import PlanForm from "./PlanForm";

const Dummy_Tasks = [
    {
        id: "1",
        title: "Todo this",
        importance: "not importante",
        deadLine: "",
    },
    {
        id: "2",
        title: "Todo that",
        importance: "importante",
        deadLine: "end of fabruary",
    },
];

const SummaryOfPlans = () => {
    //here will be the option of adding a new plan of study(task, what you want to do/to study)
    //option to delete the task
    //option to add deadline for the task
    //option fo sorting tasks
    //like todo list, what later will be converted to the calendar -> notifications?!
    return (
        <section className='font-sans text-slate-800 mt-16'>
            <h1 className='text-center mb-5 font-medium'>
                The list of studying tasks
            </h1>
            <ul className='flex flex-wrap flex-col justify-around max-h-40 md:max-h-60'>
                {Dummy_Tasks.map((task) => (
                    <PlanForm
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        importance={task.importance}
                        deadLine={task.deadLine}
                    />
                ))}
            </ul>
        </section>
    );
};

export default SummaryOfPlans;
