import { useDispatch } from "react-redux";
import { planActions } from "../../store/plan-slice";

const PlanForm = (props) => {
    const dispatch = useDispatch();

    //CHECKED THIS ONE!
    const deletePlanHandler = (id) => {
        dispatch(planActions.removePlan(id));
        console.log("clicked Close");
    };

    let spanDefault = (
        <div className='flex border border-pink-500 w-3.5 h-3.5 rounded absolute ml-1 mt-2 z-10'>
            <span className='rounded-full w-2 h-2 bg-pink-500 m-0.5'></span>
        </div>
    );
    if (props.importance === "sport") {
        spanDefault = (
            <div className='flex border border-blue-600 w-3.5 h-3.5 rounded absolute ml-1 mt-2 z-10'>
                <span className='rounded-full w-2 h-2 bg-blue-600 m-0.5'></span>
            </div>
        );
    }
    if (props.importance === "private") {
        spanDefault = (
            <div className='flex border border-orange-600 w-3.5 h-3.5 rounded absolute ml-1 mt-2 z-10'>
                <span className='rounded-full w-2 h-2 bg-orange-600 m-0.5'></span>
            </div>
        );
    }

    return (
        <li className='w-64 text-center mb-3 border-2 border-cyan-400 rounded-lg flex flex-col flex-wrap flex-grow shadow-md relative'>
            <h2 className='font-medium text-lg'>{props.title}</h2>
            {spanDefault}
            {props.deadLine && <div> 🔥{props.deadLine}</div>}
            <button
                className='rounded-lg w-9 h-5 place-self-end absolute top-1.5 bg-slate-300 mr-1 hover:bg-slate-400 font-semibold hover:font-medium'
                onClick={deletePlanHandler}
            >
                X
            </button>
        </li>
    );
};

export default PlanForm;
