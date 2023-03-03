import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "../../store/ui-slice";

import ArchivedItem from "../SideBar/ArchivedItem";
import TodoTodayItem from "./todoTodayItem";

let today = new Date().toDateString();

const Reminder = (props) => {
    const dispatch = useDispatch();
    const archivedArray = useSelector((state) => state.plan.archived);
    const plansArray = useSelector((state) => state.plan.plans);

    return (
        <>
            <div
                className='h-screen w-full top-12 bg-slate-200 opacity-80 absolute z-30'
                onClick={() => dispatch(uiActions.toggle())}
            ></div>
            <section className='font-sans text-slate-800 h-screen md:max-w-5xl md:w-96 md:text-xl bg-slate-300 font-bold text-base absolute right-0 flex transition ease-in-out duration-700 z-40 top-0 opacity-95'>
                <div className='w-0.5 md:w-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 mt-5 mx-2'></div>
                <div className='flex flex-col w-full mr-3'>
                    <h2 className='mt-10'>Plan for today</h2>
                    <ul className='mt-4 flex flex-col justify-start flex-wrap content-start '>
                        {plansArray.map((item) => {
                            console.log(item.startDate === today);
                            if (item.startDate === today) {
                                return (
                                    <TodoTodayItem
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        deadlineDate={item.deadlineDate}
                                    />
                                );
                            }
                        })}
                    </ul>
                    <h3 className='mt-32 text-slate-50'>Archive</h3>
                    <ul className='mt-3 w-full max-h-screen grid grid-cols-1 grid-flow-row gap-1 overflow-y-scroll'>
                        {archivedArray.map((item) => (
                            <ArchivedItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                closedate={item.closeddate}
                            />
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Reminder;
