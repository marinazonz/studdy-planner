import BurgerBt from "./burgerBt";

const Header = (props) => {
    //Enter - option for sign in and log in with veryfication
    //oportunity to turn on/off dark mode

    return (
        <>
            <header className='font-sans text-slate-800 w-full h-12 bg-slate-300 font-bold text-base fixed top-0 left-0 right-0 md:text-xl z-20'>
                <nav className='h-full max-w-[16rem] md:max-w-lg flex flex-wrap justify-around list-none content-center'>
                    <li
                        className='hover:transition-all duration-200 cursor-pointer hover:border-2 border-fuchsia-400 rounded-lg p-1 hover:text-sm md:hover:text-lg'
                        onClick={props.onOpenNewForm}
                    >
                        Create new plan
                    </li>
                </nav>
            </header>
            <BurgerBt />
        </>
    );
};

export default Header;
