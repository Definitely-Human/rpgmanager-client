import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";

const initialState = {
    isLoading: false,
    categories: [],
};

export const getAllCategories = createAsyncThunk(
    "allCategories/getCategories",
    async (_, thunkApi) => {
        let url = "/manager/categories/";
        try {
            const resp = await customFetch.get(url);
            console.log(resp.data);
            return resp.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

const allCategoriesSlice = createSlice({
    name: "allCategories",
    initialState,
    extraReducers: (builder) => {
        builder
            // Get all
            .addCase(getAllCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllCategories.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.categories = payload;
            })
            .addCase(getAllCategories.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            });
    },
});

export default allCategoriesSlice.reducer;
