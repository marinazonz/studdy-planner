const Popup = (props) => {
    return (
        <div className='w-full h-screen absolute top-0 bg-slate-600 opacity-95 z-40'>
            <div className='h-2/5 w-2/5 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 absolute inset-x-56 top-20 md:left-48 text-center flex flex-col justify-center z-50'>
                <p className='font-semibold text-xl mb-10'>
                    Form was successfully submitted
                </p>
                <button
                    className='absolute top-40 right-5 mt-10 w-20 h-10 rounded-lg shadow-md bg-blue-300 font-semibold hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:transition-all duration-200 hover:text-sm hover:border'
                    onClick={props.onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Popup;
