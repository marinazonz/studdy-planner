import Modal from "../UI/Modal";

const NewPlanForm = () => {
    return (
        <Modal>
            <form className='font-sans text-slate-800 md:text-xl font-medium'>
                <p className='my-2 text-center'>
                    Add new plan in your schedule
                </p>
                <div className='flex flex-col w-10/12 ml-7 justify-start mb-3'>
                    <label>Title</label>
                    <input
                        type='text'
                        required
                        className='rounded-md shadow-md indent-1 bg-zinc-100 mt-1 md:h-10 focus:outline-2 focus:outline-cyan-500/75'
                    />
                </div>
                <div className='flex flex-col md:flex-row mx-5 justify-between mb-3 text-sm md:text-xl md:mb-5 md:max-w-lg font-normal'>
                    <div className='flex'>
                        <label for='study' className='mr-5 self-center'>
                            Study
                        </label>
                        <input
                            id='study'
                            type='radio'
                            value='study'
                            name='types'
                            class='accent-pink-500 h-3 w-3 md:h-4 md:w-4 bg-zinc-100 border-none self-center'
                        />
                    </div>
                    <div className='flex'>
                        <label for='sport' className='mr-5 self-center'>
                            Sport
                        </label>
                        <input
                            id='sport'
                            type='radio'
                            value='sport'
                            name='types'
                            class='accent-blue-600 h-3 w-3 md:h-4 md:w-4 bg-zinc-100 border-none self-center'
                        />
                    </div>
                    <div className='flex'>
                        <label for='private' className='mr-5 self-center'>
                            Private (family)
                        </label>
                        <input
                            id='private'
                            type='radio'
                            value='private'
                            name='types'
                            class='accent-orange-600 h-3 w-3 md:h-4 md:w-4 bg-zinc-100 border-none self-center'
                        />
                    </div>
                </div>
                <div className='flex flex-col w-10/12 ml-7 justify-start mb-5'>
                    <label className='mr-5'>Start</label>
                    <input
                        type='datetime-local'
                        required
                        className='rounded-md shadow-md indent-1 bg-zinc-100 mt-1 md:h-10 focus:outline-2 focus:outline-cyan-500/75'
                    />
                </div>
                <div className='flex flex-col w-10/12 ml-7 justify-start mb-5'>
                    <label className='mr-5'>Deadline</label>
                    <input
                        type='datetime-local'
                        required
                        className='rounded-md shadow-md indent-1 bg-zinc-100 mt-1 md:h-10 focus:outline-2 focus:outline-cyan-500/75'
                    />
                </div>
                <button className='absolute right-20 mt-10 w-32 h-10 rounded-lg shadow-md bg-blue-300 font-semibold'>
                    Submit
                </button>
            </form>
        </Modal>
    );
};

export default NewPlanForm;