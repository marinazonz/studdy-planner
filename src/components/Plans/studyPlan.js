const StudyPlan = (props) => {
    return (
        <li className='w-64 text-center mb-3 border-2 border-cyan-400 rounded-lg'>
            <h2 className='font-medium text-lg'>{props.title}</h2>
            <span
                id='importance'
                className='rounded-full w-1 h-1 bg-red-500'
            ></span>
            <p>{props.deadLine}</p>
        </li>
    );
};

export default StudyPlan;
