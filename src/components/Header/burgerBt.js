import { useDispatch } from "react-redux";
import { uiActions } from "./../../store/ui-slice";

const BurgerBt = (props) => {
    const dispatch = useDispatch();
    const toggleSideBarHandler = () => {
        dispatch(uiActions.toggle());
    };

    return (
        <div
            className='group fixed right-0 top-2 flex flex-col justify-between w-12 h-6 cursor-pointer xl:h-6 xl:top-2 xl:w-12 z-50 opacity-100'
            onClick={toggleSideBarHandler}
        >
            <span className='h-1 w-8 xl:w-9 animate-pulse rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:from-violet-500 group-hover:to-fuchsia-500'></span>
            <span className='h-1 w-8 xl:w-9 animate-pulse rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:from-violet-500 group-hover:to-fuchsia-500'></span>
            <span className='h-1 w-8 xl:w-9 animate-pulse rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:from-violet-500 group-hover:to-fuchsia-500'></span>
        </div>
    );
};

export default BurgerBt;
