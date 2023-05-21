import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import categorySlice from "./features/category/categorySlice";
import allCategoriesSlice from "./features/allCategories/allCategoriesSlice";
import allTasksSlice from "./features/allTasks/allTasksSlice";
import itemListSlice from "./features/itemList/itemListSlice";
import taskSlice from "./features/task/taskSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        category: categorySlice,
        allCategories: allCategoriesSlice,
        allTasks: allTasksSlice,
        task: taskSlice,
        itemList: itemListSlice,
    },
});
