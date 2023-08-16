"use client";

import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const eventStyle = (event, start, end, isSelected) => {
  let bgColor;
  let fontColor;
  if (event.id === 0) {
    bgColor = "#BF7A87";
    fontColor = "aliceblue";
  } else {
    bgColor = "#386537";
    fontColor = "black";
  }
  return {
    className: "",
    style: {
      backgroundColor: bgColor,
      color: fontColor,
    },
  };
};

const page = () => {
  const localizer = momentLocalizer(moment);
  return (
    <div className="p-4">
      <Calendar
        className="h-full"
        localizer={localizer}
        events={eventStyle}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default page;
