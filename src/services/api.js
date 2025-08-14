import axios from "axios";


const apiClient = axios.create({
    baseURL: "http://localhost:8081",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

apiClient.interceptors.request.use(
    config => {
        // Add token if exist
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    response => {
        return response;
    },
    error => {
    // Xử lý lỗi global ở đây
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);