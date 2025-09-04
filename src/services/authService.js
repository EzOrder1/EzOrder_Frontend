import api from "./api";

const authService = {
  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials);
    const { access_token, refresh_token, user } = response.data;

    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
    localStorage.setItem("user", JSON.stringify(user));

    return response.data;
  },

  register: async (userData) => {
    const response = await api.post("/auth/register", userData);
    return response.data;
  },

  sendRegistrationOTP: async (phoneNumber) => {
    const response = await api.post("/auth/send-otp", { phone_number: phoneNumber });
    return response.data;
  },

  verifyOTP: async (phoneNumber, otpCode) => {
    const response = await api.post("/auth/verify-otp", {
      phone_number: phoneNumber,
      otp_code: otpCode
    });
    return response.data;
  },

  registerWithOTP: async (userData) => {
    const response = await api.post("/auth/register-with-otp", userData);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
  },

  getCurrentUser: async () => {
    const response = await api.get("/auth/me");
    return response.data;
  },
};

export default authService;
