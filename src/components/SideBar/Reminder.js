import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "../../store/ui-slice";

import ArchivedItem from "../SideBar/ArchivedItem";
import TodoTodayItem from "./todoTodayItem";

//let today = new Date().toDateString();
const newDate = Date.now();
let today = new Date(newDate).toDateString();

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
            <section className='font-sans text-slate-800 h-screen md:max-w-5xl md:w-96 md:text-xl bg-slate-300 font-bold text-base fixed right-0 flex gap-1 transition ease-in-out duration-700 z-40 top-0 opacity-95'>
                <div className='w-0.5 md:w-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 mt-5 mx-2'></div>
                <div className='flex flex-col w-full p-2 gap-3'>
                    <h2>Plan for today</h2>
                    <ul className='flex flex-col justify-start content-start gap-2 max-h-96 overflow-scroll'>
                        {plansArray.map((item) => {
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
                    <h3 className='text-slate-50'>Archive</h3>
                    <ul className='max-h-screen grid grid-cols-1 grid-flow-row gap-2 overflow-y-scroll'>
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
