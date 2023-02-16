const Reminder = () => {
    return (
        <section className='font-sans text-slate-800 h-full w-32 md:max-w-5xl md:w-96 md:text-xl bg-slate-300 font-bold text-base absolute right-0 inset-y-0 flex transition ease-in-out duration-700 opacity-80 z-40'>
            <div className='w-0.5 md:w-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 mt-5 mx-2'></div>
            <div className='flex flex-col'>
                <h2 className='mt-16 underline decoration-pink-400'>
                    Plan for today
                </h2>
                <ul className='mt-4 flex flex-col justify-start flex-wrap content-start '>
                    <li className='md:mb-2'>To do this</li>
                    <li>To do that</li>
                </ul>
            </div>
        </section>
    );
};

export default Reminder;
