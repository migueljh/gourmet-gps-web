import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_GOURMET_GPS_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export default apiClient;
