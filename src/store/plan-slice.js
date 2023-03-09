import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
    name: "plan",
    initialState: {
        plans: [],
        archived: [],
        totalPlansForDay: 0,
        changed: false,
        archivedChanged: false,
    },
    reducers: {
        replacePlansInfo(state, action) {
            state.plans = action.payload.plans;
        },
        replaceArchivedInfo(state, action) {
            state.archived = action.payload.archived;
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
            let date = new Date();
            const day = date.toDateString();
            state.plans.map((item) => {
                if (item.id === id) {
                    state.archived.unshift({
                        id: item.id,
                        title: item.title,
                        importance: item.importance,
                        closeddate: day,
                    });
                }
            });
            state.archivedChanged = true;
        },
    },
});

export const planActions = planSlice.actions;

export default planSlice;
