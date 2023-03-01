import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
    name: "plan",
    initialState: {
        plans: [],
        archived: [],
        totalPlansForDay: 0,
        changed: false,
    },
    reducers: {
        replacePlansInfo(state, action) {
            state.plans = action.payload.plans;
        },
        addPlan(state, action) {
            const newItem = action.payload;
            state.changed = true;

            state.plans.push({
                id: newItem.id,
                title: newItem.title,
                importance: newItem.importance,
                startDate: newItem.startDate,
                deadlineDate: newItem.deadlineDate,
            });
        },
        removePlan(state, action) {
            const id = action.payload;

            state.plans = state.plans.filter(
                (itemInPlans) => itemInPlans.id !== id
            );
            state.changed = true;
        },
        addToArchive(state, action) {
            const id = action.payload;
            state.plans.map((item) => {
                if (item.id === id) {
                    state.archived.push({
                        id: item.id,
                        title: item.title,
                        importance: item.importance,
                    });
                }
            });
            console.log(state.archived);
        },
    },
});

export const planActions = planSlice.actions;

export default planSlice;
