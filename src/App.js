import { useState } from "react";

import Header from "./components/Header/Header.js";
import SummaryOfPlans from "./components/Plans/SummaryOfPlans.js";
import Schedule from "./components/Schedule.js";
import Reminder from "./components/Reminder.js";
import NewPlanForm from "./components/Plans/NewPlanForm.js";

function App() {
    const [reminderIsShown, setReminderIsShown] = useState(false);
    const [newFormIsOpen, setNewFormIsOpen] = useState(false);

    const openReminderHandler = () => {
        setReminderIsShown(!reminderIsShown);
    };

    const openNewFormHandler = () => {
        setNewFormIsOpen(true);
    };

    return (
        <>
            <Header
                onClickBurger={openReminderHandler}
                onOpenNewForm={openNewFormHandler}
            />
            <div className='w-full h-0.5 md:h-1 mx-3 mt-5 rounded-lg fixed top-5 bg-gradient-to-r from-cyan-500 to-blue-500'></div>
            {reminderIsShown && <Reminder />}
            {newFormIsOpen && <NewPlanForm />}
            <SummaryOfPlans />
            <Schedule />
        </>
    );
}

export default App;
