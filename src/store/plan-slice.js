import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
    name: "plan",
    initialState: {
        plans: [],
        totalPlansForDay: 0,
        changed: false,
    },
    reducers: {
        replacePlansInfo(state, action) {
            state.plans = action.payload.plans;
        },
        addPlan(state, action) {},
        removePlan(state, action) {
            const id = action.payload;
            state.plans = state.plans.filter((item) => item.id !== id);
            state.changed = true;
        },
    },
});

export const planActions = planSlice.actions;

export default planSlice;
