import { useDispatch } from "react-redux";
import { planActions } from "../../store/plan-slice";

const TodoTodayItem = (props) => {
    const dispatch = useDispatch();
    const { title, deadlineDate, id } = props;

    const removePlanHandler = () => {
        dispatch(planActions.addToArchive(id));
        dispatch(planActions.removePlan(id));
    };

    return (
        <li className='w-full text-center mb-1 border-2 border-pink-300 rounded-lg flex flex-col flex-wrap flex-grow shadow-md relative'>
            <h2 className='font-medium text-sm'> {title}</h2>
            <div className='font-medium text-sm'>
                Deadline at {deadlineDate}
            </div>
            <button
                className='rounded-lg shadow-md absolute text-pink-600 right-3 top-1 w-8 hover:bg-pink-300'
                onClick={removePlanHandler}
            >
                ✔️
            </button>
        </li>
    );
};

export default TodoTodayItem;
