import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";
import { API_URL } from "./urls";

const customFetch = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Token ${getUserFromLocalStorage()?.token}`,
    },
});

export default customFetch;
