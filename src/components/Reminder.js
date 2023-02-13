const Reminder = () => {
    return (
        <section className='font-sans text-slate-800 h-full w-32 md:max-w-5xl md:w-96 md:text-xl bg-slate-300 font-bold text-base absolute right-0 inset-y-0 flex'>
            <div className='w-0.5 md:w-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 mt-5 mx-2'></div>
            <div className='fixed right-0 top-3 place-self-center flex flex-col justify-between w-12 h-6 cursor-pointer z-50 xl:h-8 xl:top-4 xl:w-16'>
                <span className='block h-1 w-8 xl:w-10 animate-pulse rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'></span>
                <span className='block h-1 w-8 xl:w-10 animate-pulse rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'></span>
                <span className='block h-1 w-8 xl:w-10 animate-pulse rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'></span>
            </div>
            <ul className='mt-16 flex justify-start flex-wrap content-start'>
                <li>To do this</li>
                <li>To do that</li>
            </ul>
        </section>
    );
};

export default Reminder;
