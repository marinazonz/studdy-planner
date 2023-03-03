const TodoTodayItem = (props) => {
    const { title, deadlineDate } = props;
    return (
        <li className='w-full text-center mb-1 border-2 border-pink-300 rounded-lg flex flex-col flex-wrap flex-grow shadow-md relative'>
            <h2 className='font-medium text-sm'> {title}</h2>
            <div className='font-medium text-sm'>
                Deadline at {deadlineDate}
            </div>
        </li>
    );
};

export default TodoTodayItem;
