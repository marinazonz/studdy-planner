import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
    name: "plans",
    initialState: {
        plans: [],
        totalPlansForDay: 0,
    },
    reducers: {
        addPlan(state, action) {},
        removePlan(state, action) {
            const id = action.payload;
            const existingPlan = state.plans.find((item) => item.id === id);
            if (existingPlan) {
                state.plans = state.plans.filter((item) => item.id !== id);
                console.log(existingPlan);
            }
        },
    },
});

export const planActions = planSlice.actions;

export default planSlice;
