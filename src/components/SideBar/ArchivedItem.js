const ArchivedItem = (props) => {
    return (
        <li className='w-64 text-center mb-3 border-2 border-cyan-400 rounded-lg flex flex-col flex-wrap flex-grow shadow-md relative'>
            <h2 className='font-medium text-lg'> title{props.title}</h2>
            <div>Closed date {props.closedate}</div>
        </li>
    );
};

export default ArchivedItem;
