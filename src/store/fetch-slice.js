import { planActions } from "./plan-slice";

export const fetchPlanData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                "https://myprojectname-8bdfe-default-rtdb.firebaseio.com/plans.json"
            );
            if (!response.ok) {
                throw new Error("Could not fetch data");
            }

            const data = await response.json();
            return data;
        };

        try {
            const plansData = await fetchData();
            const allPlansData = [];
            for (const key in plansData) {
                const plan = {
                    id: key,
                    ...plansData[key],
                };
                allPlansData.push(plan);
            }
            dispatch(
                planActions.replacePlansInfo({
                    plans: allPlansData || [],
                })
            );
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const sendPlanData = (plan) => {
    return async () => {
        const sendRequest = async () => {
            const response = await fetch(
                "https://myprojectname-8bdfe-default-rtdb.firebaseio.com/plans.json",
                { method: "PUT", body: JSON.stringify(plan) }
            );
            if (!response.ok) {
                throw new Error("Sending cart data failed");
            }
        };
        try {
            await sendRequest();
            //add popup of success
        } catch (error) {
            console.log(error.message);
        }
    };
};

//add popup with success
