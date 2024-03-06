import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const ReactBigCalendar = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("eventsData"));
    if (storedEvents) {
      setEventsData(storedEvents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("eventsData", JSON.stringify(eventsData));
  }, [eventsData]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title) {
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title,
        },
      ]);
    }
  };

  return (
    <div className="App">
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
      />
    </div>
  );
};

export default ReactBigCalendar;
