import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { getAllCategories } from "../allCategories/allCategoriesSlice";

const initialState = {
    categoryId: "",
    isLoading: false,
    isEditing: false,
    name: "",
    subcategory_of: "",
};

export const createCategory = createAsyncThunk(
    "category/createCategory",
    async (category, thunkAPI) => {
        try {
            const response = await customFetch.post(
                "manager/categories/",
                category
            );
            thunkAPI.dispatch(clearValues());
            thunkAPI.dispatch(getAllCategories());
            return response.data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        handleChange: (state, { payload: { name, value } }) => {
            state[name] = value;
        },
        clearValues: () => {
            return {
                ...initialState,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            // Create Category
            .addCase(createCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createCategory.fulfilled, (state, payload) => {
                state.isLoading = false;
                toast.success(`Category ${payload.meta.arg.name} created.`);
            })
            .addCase(createCategory.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            });
    },
});

export const { handleChange, clearValues } = categorySlice.actions;

export default categorySlice.reducer;
