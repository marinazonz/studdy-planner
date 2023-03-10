const ArchivedItem = (props) => {
    const { title, closedate } = props;
    return (
        <li className='w-full text-center mb-1 border-2 border-white rounded-lg flex flex-col flex-wrap flex-grow shadow-md relative'>
            <h2 className='font-medium text-sm'> {title}</h2>
            <div className='font-medium text-sm'>Finished at {closedate}</div>
        </li>
    );
};

export default ArchivedItem;
