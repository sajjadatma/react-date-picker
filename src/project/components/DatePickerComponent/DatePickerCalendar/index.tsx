import React, { useMemo } from "react";
import { Dayjs } from "dayjs";
import clsx from "clsx";

import { getCalendarRows, daysOfWeek } from "../../../utils/helpers";
import "./style.css";
export interface IDatePickerCalendarProps {
  shownDate: Dayjs;
  selectedDate: Dayjs;
  onChange: (newDate: Dayjs) => void;
}

export const DatePickerCalendar: React.FC<IDatePickerCalendarProps> = ({
  shownDate,
  selectedDate,
  onChange,
  ...rest
}) => {
  const handleSelectDate = (value: Dayjs) => {
    return () => onChange(value);
  };

  const rows = useMemo(() => getCalendarRows(shownDate, rest), [shownDate]);

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
        {rows.map((day, i) => (
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
                DatePickerCalendar__isDisabled: day.isDisabled,
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
