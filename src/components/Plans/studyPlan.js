const StudyPlan = (props) => {
    return (
        <li className='w-64 text-center mb-3 border-2 border-cyan-400 rounded-lg flex flex-col shadow-md'>
            <h2 className='font-medium text-lg'>{props.title}</h2>
            <div className='flex border border-pink-400 w-3.5 h-3.5 rounded absolute ml-1 mt-2'>
                <span
                    id='importance'
                    className='rounded-full w-2 h-2 bg-pink-400 m-0.5'
                ></span>
            </div>
            <time>{props.deadLine}</time>
        </li>
    );
};

export default StudyPlan;
