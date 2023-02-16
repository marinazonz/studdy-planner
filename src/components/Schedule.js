import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";

const locales = { "en-GB": require("date-fns/locale/en-GB") };

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
    getDay,
    locales,
});

const listOfEvents = [
    {
        title: "Meeting",
        allDay: true,
        start: new Date(2023, 1, 17),
        end: new Date(2023, 1, 17),
    },
    {
        title: "Meeting22",
        start: new Date(2023, 1, 10),
        end: new Date(2023, 1, 13),
    },
];

const Schedule = () => {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(listOfEvents);

    const handleAddEvent = () => {
        setAllEvents([...allEvents, newEvent]);
    };

    return (
        <section>
            <h3>Calendar</h3>
            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor='start'
                endAccessor='end'
                style={{ height: 500 }}
            />
        </section>
    );
};

export default Schedule;
