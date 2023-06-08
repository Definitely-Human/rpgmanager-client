import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";

const customFetch = axios.create({
    baseURL: `http://${import.meta.env.VITE_API_URL}/api`,
    headers: {
        Authorization: `Token ${getUserFromLocalStorage()?.token}`,
    },
});

export default customFetch;
