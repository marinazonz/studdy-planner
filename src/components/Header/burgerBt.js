const BurgerBt = (props) => {
    return (
        <div
            className='fixed right-0 top-2 flex flex-col justify-between w-12 h-6 cursor-pointer xl:h-8 xl:top-4 xl:w-16 z-50 opacity-100 '
            onClick={props.onClickBurger}
        >
            <span className='h-1 w-8 xl:w-10 animate-pulse rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'></span>
            <span className='h-1 w-8 xl:w-10 animate-pulse rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'></span>
            <span className='h-1 w-8 xl:w-10 animate-pulse rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'></span>
        </div>
    );
};

export default BurgerBt;
