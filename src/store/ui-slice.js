import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { sideBarIsVisible: false },
    reducers: {
        toggle(state) {
            state.sideBarIsVisible = !state.sideBarIsVisible;
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
