import { useState } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header/Header.js";
import SummaryOfPlans from "./components/Plans/SummaryOfPlans.js";
import Schedule from "./components/Schedule.js";
import Reminder from "./components/Reminder.js";
import NewPlanForm from "./components/Plans/NewPlanForm.js";
import Popup from "./components/UI/Popup.js";

function App() {
    const [newFormIsOpen, setNewFormIsOpen] = useState(false);
    const [popupIsOpen, setPopupIsOpen] = useState(false);

    const sideBarIsShown = useSelector((state) => state.ui.sideBarIsVisible);

    const openNewFormHandler = () => {
        setNewFormIsOpen(true);
    };

    const newFormHandler = () => {
        console.log("Form was submitted");
        setNewFormIsOpen(false);
        setPopupIsOpen(!popupIsOpen);
    };

    return (
        <>
            <Header onOpenNewForm={openNewFormHandler} />
            <div className='w-full h-0.5 md:h-1 mx-3 mt-5 rounded-lg fixed top-5 bg-gradient-to-r from-cyan-500 to-blue-500 z-30'></div>
            {sideBarIsShown && <Reminder />}
            {newFormIsOpen && (
                <NewPlanForm
                    onSubmitNewForm={newFormHandler}
                    onCloseNewForm={() => setNewFormIsOpen(false)}
                />
            )}
            {popupIsOpen && (
                <Popup onClose={() => setPopupIsOpen(!popupIsOpen)} />
            )}
            <SummaryOfPlans />
            <Schedule />
        </>
    );
}

export default App;
