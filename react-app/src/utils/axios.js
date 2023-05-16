import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";

const customFetch = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        Authorization: `Token ${getUserFromLocalStorage()?.token}`,
    },
});

export default customFetch;
