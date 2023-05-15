import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import {
    getUserFromLocalStorage,
    addUserToLocalStorage,
    removeUserFromLocalStorage,
} from "../../utils/localStorage";
import { useDispatch } from "react-redux";

const initialState = {
    isLoading: false,
    user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (user, thunkAPI) => {
        try {
            const resp = await customFetch.post("/user/create/", user);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (user, thunkAPI) => {
        try {
            const resp = await customFetch.post("/user/token/", user);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getUser = createAsyncThunk(
    "user/getUser",
    async (token, thunkAPI) => {
        try {
            console.log("Getting user...");
            const resp = await customFetch.get("/user/me/");
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder
            // Register User
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                toast.success("Registration successful.");
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                if (payload.email) toast.error(payload.email[0]);
                if (payload.username) toast.error(payload.username[0]);
            })
            // Login User
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                toast.success("Login successful.");
                console.log("setting token");
                addUserToLocalStorage({ token: payload.token });
                state.user = {
                    token: payload.token,
                };
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(JSON.stringify(payload));
            })
            // Get User
            .addCase(getUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                console.log(payload);
            })
            .addCase(getUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(JSON.stringify(payload));
            });
    },
});

export default userSlice.reducer;
