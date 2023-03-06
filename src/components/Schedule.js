import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { useSelector } from "react-redux";
import format from "date-fns/format";
import parseJSON from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { "en-GB": require("date-fns/locale/en-GB") };

const localizer = dateFnsLocalizer({
    format,
    parseJSON,
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
    getDay,
    locales,
});

const Schedule = (props) => {
    const plansArray = useSelector((state) => state.plan.plans);

    return (
        <section>
            <h3>Calendar</h3>
            <Calendar
                localizer={localizer}
                events={plansArray}
                startAccessor='startDate'
                endAccessor='deadlineDate'
                style={{ height: 500 }}
            />
        </section>
    );
};

export default Schedule;
