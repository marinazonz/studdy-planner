const Popup = (props) => {
    return (
        <div className='w-full h-full absolute bg-slate-600'>
            <div className='h-2/5 w-2/5 md:h-4/5 md:w-8/12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 absolute inset-x-56 top-20 md:left-48 z-40 text-center flex flex-col justify-center'>
                <p className='font-semibold text-xl mb-10'>
                    Form was successfully submitted
                </p>
                <button
                    className='absolute top-40 right-5 mt-10 w-20 h-10 rounded-lg shadow-md bg-blue-300 font-semibold'
                    onClick={props.onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Popup;
