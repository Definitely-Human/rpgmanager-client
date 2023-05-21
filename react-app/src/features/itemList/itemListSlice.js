import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedItemType: "",
    selectedItemId: null,
};

const itemListSlice = createSlice({
    name: "itemList",
    initialState,
    reducers: {
        setSelectedItem: (state, { payload }) => {
            state.selectedItemId = payload.id;
            state.selectedItemType = payload.type;
        },
        clearSelectedItem: (state, { payload }) => {
            return initialState;
        },
    },
});

export const { setSelectedItem, clearSelectedItem } = itemListSlice.actions;

export default itemListSlice.reducer;
