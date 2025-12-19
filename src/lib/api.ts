import axios from 'axios';

// Create axios instance with base URL
// Using localhost:8000 as default, but allowing environment variable override
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor for adding auth token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for handling errors (e.g., 401 unauthorized)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Do not auto-logout on a single 401 (some endpoints may return 401 transiently).
            // Let the UI decide what to do.
            if (typeof window !== "undefined") {
                window.dispatchEvent(
                    new CustomEvent("ezorder:unauthorized", {
                        detail: {
                            url: error.config?.url,
                            method: error.config?.method,
                        },
                    })
                );
            }
        }
        return Promise.reject(error);
    }
);

export default api;
