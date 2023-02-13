const Header = () => {
    //Enter - option for sign in and log in with veryfication
    //oportunity to turn on/off dark mode

    //on the left side - reminder section with the plan for the day and what to do. when its closed - it goes as design
    return (
        <header className='font-sans text-slate-800 w-full h-12 bg-slate-300 font-bold text-base fixed top-0 left-0 right-0 md:text-xl'>
            <nav className='h-full max-w-xs md:max-w-lg flex flex-wrap justify-around list-none content-center'>
                <li className='mr-4'>Enter</li>
                <li>Create new plan</li>
            </nav>
        </header>
    );
};

export default Header;
