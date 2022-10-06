import React, { useMemo } from "react";
import { Dayjs } from "dayjs";
import clsx from "clsx";

import { daysOfWeek } from "../../../utils/helpers";
import "./style.css";
import { IDatePickerCalendarProps } from "./DatePickerCalendar-interfaces";

export const DatePickerCalendar: React.FC<IDatePickerCalendarProps> = ({
  selectedDate,
  onChange,
  days,
}) => {
  const handleSelectDate = (value: Dayjs) => {
    return () => onChange(value);
  };

  return (
    <>
      <div className={"DatePickerCalendar__header"}>
        {daysOfWeek.map((day, i) => (
          <div key={i} className={"DatePickerCalendar__cell"}>
            {day}
          </div>
        ))}
      </div>

      <div className={"DatePickerCalendar__row"}>
        {days.map((day, i) => (
          <div
            key={`${day.text} - ${i}`}
            className={clsx(
              "DatePickerCalendar__cell",
              "DatePickerCalendar__dayCell",

              {
                DatePickerCalendar__dayCell_selected: day.value.isSame(
                  selectedDate,
                  "date"
                ),
              },
              {
                DatePickerCalendar__isDisabled:
                  day.closureDay || day.isDisabled,
              },
              {
                DatePickerCalendar__beforeAfter: !day.isInThisMonth,
              }
            )}
            onClick={handleSelectDate(day.value)}
          >
            {day.text}
          </div>
        ))}
      </div>
    </>
  );
};
