import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        sideBarIsVisible: false,
        popupIsOpened: false,
        modalIsShown: false,
    },
    reducers: {
        toggle(state) {
            state.sideBarIsVisible = !state.sideBarIsVisible;
        },
        setPopupIsOpened(state) {
            state.popupIsOpened = !state.popupIsOpened;
        },
        setModalIsShown(state) {
            state.modalIsShown = !state.modalIsShown;
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
