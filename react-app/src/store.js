import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import categorySlice from "./features/category/categorySlice";
import allCategoriesSlice from "./features/allCategories/allCategoriesSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        category: categorySlice,
        allCategories: allCategoriesSlice,
    },
});
