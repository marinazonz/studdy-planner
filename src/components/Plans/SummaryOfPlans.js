import { useState, useEffect, useCallback } from "react";

import PlanForm from "./PlanForm";

const SummaryOfPlans = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [plans, setPlans] = useState([]);

    //loading functuanality (chanhe h1)
    //spans of importance in every item depend on the data(study/sport)
    //to delete items

    const fetchPlans = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                "https://myprojectname-8bdfe-default-rtdb.firebaseio.com/plans.json"
            );
            if (!response.ok) {
                console.log("Something went wrong");
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
        } catch (error) {}
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchPlans();
    }, [fetchPlans, plans]);

    return (
        <section className='font-sans text-slate-800 mt-16'>
            <h1 className='text-center mb-5 font-medium'>
                The list of tasks is empty
            </h1>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 grid-flow-row w-full'>
                {plans.map((task) => (
                    <PlanForm
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        importance={task.importance}
                        startDate={task.startDate}
                        deadlineDate={task.deadlineDate}
                    />
                ))}
            </ul>
        </section>
    );
};

export default SummaryOfPlans;
