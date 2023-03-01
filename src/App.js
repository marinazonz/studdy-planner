import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/Header/Header.js";
import SummaryOfPlans from "./components/Plans/SummaryOfPlans.js";
import Schedule from "./components/Schedule.js";
import Reminder from "./components/SideBar/Reminder.js";
import NewPlanForm from "./components/Plans/NewPlanForm.js";
import Popup from "./components/UI/Popup.js";
import { fetchPlanData, sendPlanData } from "./store/fetch-slice.js";
import { uiActions } from "./store/ui-slice.js";

let isInitial = true;

function App() {
    const dispatch = useDispatch();

    const sideBarIsShown = useSelector((state) => state.ui.sideBarIsVisible);
    const newFormIsShown = useSelector((state) => state.ui.modalIsShown);
    const popupIsShown = useSelector((state) => state.ui.popupIsOpened);
    const plans = useSelector((state) => state.plan);

    useEffect(() => {
        dispatch(fetchPlanData());
    }, [dispatch]);
    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }
        if (plans.changed) {
            dispatch(sendPlanData(plans.plans));
        }
    }, [dispatch, plans]);

    return (
        <>
            <Header
                onOpenNewForm={() => {
                    dispatch(uiActions.setModalIsShown());
                }}
            />
            <div className='w-full h-0.5 md:h-1 mx-3 mt-5 rounded-lg fixed top-5 bg-gradient-to-r from-cyan-500 to-blue-500 z-30'></div>
            {sideBarIsShown && <Reminder />}
            {newFormIsShown && (
                <NewPlanForm
                    onCloseNewForm={() => dispatch(uiActions.setModalIsShown())}
                />
            )}
            {popupIsShown && (
                <Popup onClose={() => dispatch(uiActions.setPopupIsOpened())} />
            )}
            <SummaryOfPlans />
            <Schedule />
        </>
    );
}

export default App;
