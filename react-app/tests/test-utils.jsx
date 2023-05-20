import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// As a basic setup, import your same slice reducers
import userSlice from "../src/features/user/userSlice";

export function setupStoreUser(preloadedState = {}) {
    return configureStore({
        reducer: { user: userSlice },
        preloadedState,
    });
}

export function setupStore(preloadedState = {}) {
    return configureStore({
        reducer: { user: userSlice },
        preloadedState,
    });
}

export function renderWithProviders(
    ui,
    { preloadedState = {}, store = setupStore(), ...renderOptions } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>;
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
