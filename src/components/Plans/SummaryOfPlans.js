import { useState, useEffect, useCallback } from "react";

import PlanForm from "./PlanForm";

const SummaryOfPlans = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [plans, setPlans] = useState([]);
    const [error, setError] = useState(null);

    //loading functuanality

    const fetchPlans = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                "https://myprojectname-8bdfe-default-rtdb.firebaseio.com/plans.json"
            );
            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();

            const allPlansData = [];
            for (const key in data) {
                const plan = {
                    id: key,
                    ...data[key],
                };

                allPlansData.push(plan);
            }
            setPlans(allPlansData);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchPlans();
    }, [fetchPlans, plans]);

    let greetingContent = (
        <h1 className='text-center mb-5 font-medium md:text-xl'>
            The list of tasks is empty
        </h1>
    );
    if (plans.length > 0) {
        greetingContent = (
            <h1 className='text-center mb-5 font-medium md:text-xl'>
                Here is your list of tasks, Sir.
            </h1>
        );
    }
    if (error) {
        greetingContent = (
            <h1 className='text-center mb-5 font-medium md:text-xl'>{error}</h1>
        );
    }
    // if (isLoading) {
    //     greetingContent = (
    //         <h1 className='text-center mb-5 font-medium'>Is loading...</h1>
    //     );
    // }

    const closePlanHandler = (id) => {
        //delete item from the array
        // const deletingPlan = plans.map((item) => {
        //     // return item.id === target.id;
        // });
        // console.log();
        //REDUX!
        //delete item from the data-base
        //put deleted item in a new array 'archive' (later show it as a list of already done in the side-bar)
    };

    return (
        <section className='font-sans text-slate-800 mt-16 mx-4'>
            {greetingContent}
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 grid-flow-row w-full'>
                {plans.map((task) => (
                    <PlanForm
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        importance={task.importance}
                        startDate={task.startDate}
                        deadlineDate={task.deadlineDate}
                        onClose={closePlanHandler}
                    />
                ))}
            </ul>
        </section>
    );
};

export default SummaryOfPlans;
