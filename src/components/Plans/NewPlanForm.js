import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { uiActions } from "../../store/ui-slice";
import { planActions } from "../../store/plan-slice";
import Modal from "../UI/Modal";

const newDate = Date.now();
let today = new Date(newDate).toDateString();

console.log(today);

let theStartDate;
let theEndDate;

const NewPlanForm = (props) => {
    const dispatch = useDispatch();
    const [choosedCategory, setChoosedCategory] = useState("private");

    const titleInputRef = useRef();
    const startDateInputRef = useRef();
    const deadlineInputRef = useRef();

    const submitFormHandler = (e) => {
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredStartDate = startDateInputRef.current.value;
        const enteredDeadline = deadlineInputRef.current.value;

        if (enteredStartDate === "") {
            theStartDate = today;
        } else {
            theStartDate = new Date(enteredStartDate).toDateString();
        }

        if (enteredDeadline === "") {
            theEndDate = today;
        } else {
            theEndDate = new Date(enteredDeadline).toDateString();
        }

        const newFormData = {
            id: Math.random(),
            title: enteredTitle,
            importance: choosedCategory,
            startDate: theStartDate,
            deadlineDate: theEndDate,
        };

        dispatch(planActions.addPlan(newFormData));

        dispatch(uiActions.setModalIsShown(false));
        dispatch(uiActions.setPopupIsOpened(true));
    };

    return (
        <Modal onClose={props.onCloseNewForm}>
            <form
                className='font-sans flex flex-col gap-5 text-slate-800 sm:text-xl font-medium w-full'
                onSubmit={submitFormHandler}
            >
                <p className='my-2'>Add new plan in your schedule</p>
                <div className='flex flex-col justify-start'>
                    <label htmlFor='text'>Title</label>
                    <input
                        type='text'
                        required
                        ref={titleInputRef}
                        className='rounded-md shadow-md bg-zinc-100 mt-1 sm:h-10 focus:outline-2 focus:outline-cyan-500/75'
                    />
                </div>
                <div className='flex flex-col md:flex-row justify-between text-sm sm:text-xl md:max-w-lg font-normal'>
                    <div className='flex'>
                        <label htmlFor='study' className='mr-5 self-center'>
                            Study
                        </label>
                        <input
                            id='study'
                            type='radio'
                            value='study'
                            name='types'
                            onChange={() => setChoosedCategory("study")}
                            className='accent-pink-500 h-3 w-3 md:h-4 md:w-4 bg-zinc-100 border-none self-center'
                        />
                    </div>
                    <div className='flex'>
                        <label htmlFor='sport' className='mr-5 self-center'>
                            Sport
                        </label>
                        <input
                            id='sport'
                            type='radio'
                            value='sport'
                            name='types'
                            onChange={() => setChoosedCategory("sport")}
                            className='accent-blue-600 h-3 w-3 md:h-4 md:w-4 bg-zinc-100 border-none self-center'
                        />
                    </div>
                    <div className='flex'>
                        <label htmlFor='private' className='mr-5 self-center'>
                            Private (family)
                        </label>
                        <input
                            id='private'
                            type='radio'
                            value='private'
                            name='types'
                            onChange={() => setChoosedCategory("private")}
                            className='accent-orange-600 h-3 w-3 md:h-4 md:w-4 bg-zinc-100 border-none self-center'
                        />
                    </div>
                </div>
                <div className='flex flex-col justify-start'>
                    <label className='mr-5'>Start</label>
                    <input
                        type='date'
                        ref={startDateInputRef}
                        className='rounded-md shadow-md indent-1 bg-zinc-100 mt-1 md:h-10 focus:outline-2 focus:outline-cyan-500/75'
                    />
                </div>
                <div className='flex flex-col justify-start'>
                    <label className='mr-5'>Deadline</label>
                    <input
                        type='date'
                        ref={deadlineInputRef}
                        className='rounded-md shadow-md indent-1 bg-zinc-100 mt-1 md:h-10 focus:outline-2 focus:outline-cyan-500/75'
                    />
                </div>
                <div className='flex flex-col sm:flex-row gap-5 sm:justify-end mt-5'>
                    <button className='transition-all px-4 py-1 rounded-lg shadow-md bg-blue-300 font-semibold hover:text-lg hover:bg-blue-300/70 hover:border md:hover:text-2xl'>
                        Submit
                    </button>
                    <button
                        className='transition-all px-4 py-1 rounded-lg shadow-md bg-indigo-300 font-semibold hover:text-lg hover:bg-indigo-300/70 hover:border md:hover:text-2xl'
                        onClick={props.onCloseNewForm}
                    >
                        Close
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default NewPlanForm;
