import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import planSlice from "./plan-slice";

const store = configureStore({
    reducer: { ui: uiSlice.reducer, plan: planSlice.reducer },
});

export default store;
