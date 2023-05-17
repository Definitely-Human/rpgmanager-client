import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";

const initialState = {
    isLoading: false,
    tasks: [],
};

export const getAllTasks = createAsyncThunk(
    "allTasks/getTasks",
    async (_, thunkApi) => {
        let url = "/manager/tasks/";
        try {
            const resp = await customFetch.get(url);
            return resp.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

const allTasksSlice = createSlice({
    name: "allTasks",
    initialState,
    extraReducers: (builder) => {
        builder
            // Get all
            .addCase(getAllTasks.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllTasks.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.tasks = payload;
            })
            .addCase(getAllTasks.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            });
    },
});

export default allTasksSlice.reducer;
