import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
// As a basic setup, import your same slice reducers
import userSlice from "../src/features/user/userSlice";

export function setupStoreUser(preloadedState = {}) {
    return configureStore({
        reducer: { user: userSlice },
        preloadedState,
    });
}

export function setupStore(preloadedState = {}) {
    console.log("setup store");
    return configureStore({
        reducer: {},
        preloadedState,
    });
}

export function renderWithProviders(
    ui,
    { store = setupStore(), ...renderOptions } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>;
    }

    Wrapper.propTypes = {
        children: PropTypes.element,
    };

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
