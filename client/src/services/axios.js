import axios from "axios";

const baseURL = process.env.API_BASE_URL || "http://localhost:5000/api"

export const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});