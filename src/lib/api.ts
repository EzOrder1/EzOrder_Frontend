import axios from "axios";

// Create axios instance with base URL
// Using localhost:8000 as default, but allowing environment variable override
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

let isRefreshing = false;
let refreshPromise: Promise<string> | null = null;

const getStoredAccessToken = () => localStorage.getItem("token");
const getStoredRefreshToken = () => localStorage.getItem("refresh_token");

const refreshAccessToken = async (): Promise<string> => {
    const storedRefresh = getStoredRefreshToken();
    if (!storedRefresh) {
        throw new Error("Missing refresh token");
    }

    const response = await axios.post(
        `${baseURL}/api/v1/auth/refresh`,
        { refresh_token: storedRefresh },
        { headers: { "Content-Type": "application/json" } }
    );

    const { access_token, refresh_token } = response.data ?? {};
    if (!access_token) {
        throw new Error("Refresh did not return access_token");
    }

    localStorage.setItem("token", access_token);
    if (refresh_token) {
        localStorage.setItem("refresh_token", refresh_token);
    }

    return access_token;
};

const setAuthHeader = (headers: any, token: string) => {
    const value = `Bearer ${token}`;

    if (!headers) {
        return { Authorization: value };
    }

    // Axios v1 may use AxiosHeaders (has .set)
    if (typeof headers.set === "function") {
        headers.set("Authorization", value);
        return headers;
    }

    return { ...headers, Authorization: value };
};

// Request interceptor for adding auth token
api.interceptors.request.use(
    (config) => {
        const token = getStoredAccessToken();
        if (token) {
            config.headers = setAuthHeader(config.headers, token);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for handling 401 (refresh + retry once).
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const status = error?.response?.status;
        const originalRequest = error?.config as any;

        if (status !== 401 || !originalRequest) {
            return Promise.reject(error);
        }

        const requestUrl: string = originalRequest.url || "";
        const isAuthEndpoint = requestUrl.includes("/api/v1/auth/login") || requestUrl.includes("/api/v1/auth/refresh");

        if (isAuthEndpoint || originalRequest._retry) {
            if (typeof window !== "undefined") {
                window.dispatchEvent(
                    new CustomEvent("ezorder:unauthorized", {
                        detail: { url: requestUrl, method: originalRequest.method },
                    })
                );
            }
            return Promise.reject(error);
        }

        const refreshToken = getStoredRefreshToken();
        if (!refreshToken) {
            if (typeof window !== "undefined") {
                window.dispatchEvent(
                    new CustomEvent("ezorder:unauthorized", {
                        detail: { url: requestUrl, method: originalRequest.method },
                    })
                );
            }
            return Promise.reject(error);
        }

        originalRequest._retry = true;

        try {
            if (!isRefreshing) {
                isRefreshing = true;
                refreshPromise = refreshAccessToken().finally(() => {
                    isRefreshing = false;
                    refreshPromise = null;
                });
            }

            const newToken = await refreshPromise!;
            originalRequest.headers = setAuthHeader(originalRequest.headers, newToken);
            return api(originalRequest);
        } catch (refreshError) {
            if (typeof window !== "undefined") {
                window.dispatchEvent(
                    new CustomEvent("ezorder:unauthorized", {
                        detail: { url: requestUrl, method: originalRequest.method, reason: "refresh_failed" },
                    })
                );
            }
            return Promise.reject(refreshError);
        }
    }
);

export default api;
