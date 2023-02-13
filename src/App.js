import Header from "./components/Header.js";
import SummaryOfPlans from "./components/SummaryOfPlans.js";
import Schedule from "./components/Schedule.js";
import Reminder from "./components/Reminder.js";

function App() {
    return (
        <>
            <Header />
            <div className='w-full h-0.5 md:h-1 mx-3 mt-5 rounded-lg fixed top-5 bg-gradient-to-r from-cyan-500 to-blue-500'></div>
            <Reminder />
            <SummaryOfPlans />
            <Schedule />
        </>
    );
}

export default App;
