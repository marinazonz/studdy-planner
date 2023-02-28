import { useSelector } from "react-redux";

import PlanForm from "./PlanForm";

const SummaryOfPlans = () => {
    const plansArray = useSelector((state) => state.plan.plans);

    let greetingContent = (
        <h1 className='text-center mb-5 font-medium md:text-xl'>
            The list of tasks is empty
        </h1>
    );
    if (plansArray.length > 0) {
        greetingContent = (
            <h1 className='text-center mb-5 font-medium md:text-xl'>
                Here is your list of tasks, Sir.
            </h1>
        );
    }

    return (
        <section className='font-sans text-slate-800 mt-16 mx-4'>
            {greetingContent}
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 grid-flow-row w-full'>
                {plansArray.map((task) => (
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
