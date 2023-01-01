import React, { useState } from "react";
import "./styles.css";
import { ICalendarCell } from "../../utils/interfaces";
import { ChevronDownIcon } from "../../icons/index";
import { Dayjs } from "dayjs";
type Props = {
  daysOfWeek: Array<string>;
  days: Array<ICalendarCell>;
  selectedDate?: any;
  dateState: Dayjs;
  handleSelectDate: any;
  trigger?: any;
  triggerForSetMonthAndYear: any;
  month: Array<string>;
  setDateState: any;
  triggerFoChangeYear: any;
};

const DatePickerComponent = (props: Props) => {
  const {
    daysOfWeek,
    days,
    selectedDate,
    dateState,
    handleSelectDate,
    trigger,
    triggerForSetMonthAndYear,
    month,
    triggerFoChangeYear,
  } = props;

  const [selectedMonth, setSelectedMonth] = useState(dateState.month());
  const monthOnChange = (e: string) => {
    setSelectedMonth(+e);
    triggerForSetMonthAndYear({ month: +e });
  };
  return (
    <div className="DatePickerCalendar__main DatePickerCalendar__main__custom">
      <div className="trigger_icon__year">
        {" "}
        <button
          className="trigger_icon__nextyear"
          onClick={() => triggerFoChangeYear(false)}
        >
          سال قبل
        </button>
        <button
          className="trigger_icon__nextyear"
          onClick={() => triggerFoChangeYear(true)}
        >
          سال بعد
        </button>
      </div>
      <div className="DatePickerCalendar__icons">
        <button className="trigger_icon__left" onClick={trigger(false)}>
          <ChevronDownIcon />
        </button>
        <select
          value={dateState.month()}
          onChange={(e) => monthOnChange(e.target.value)}
        >
          {month.map((item: string, idx: number) => (
            <option key={idx} value={idx}>
              {item}
            </option>
          ))}
        </select>
        <button className="trigger_icon__right" onClick={trigger(true)}>
          <ChevronDownIcon />
        </button>
      </div>
      <div className={"DatePickerCalendar__header"}>
        {daysOfWeek.map((day, i) => (
          <div
            key={i}
            className={
              "DatePickerCalendar__cell DatePickerCalendar__cell__custom"
            }
          >
            {day}
          </div>
        ))}
      </div>

      <div className={"DatePickerCalendar__row"}>
        {days.map((day, i) => {
          const classNames = [];
          classNames.push("DatePickerCalendar__cell");
          classNames.push("DatePickerCalendar__dayCell");
          if (day.value.isSame(selectedDate, "date")) {
            classNames.push("DatePickerCalendar__dayCell_selected");
          }
          if (day.closureDay || day.isDisabled) {
            classNames.push("DatePickerCalendar__isDisabled");
          }
          if (!day.isInThisMonth) {
            classNames.push("DatePickerCalendar__beforeAfter");
          }

          return (
            <div
              key={`${day.text} - ${i}`}
              className={classNames.join(" ")}
              onClick={handleSelectDate(day.value)}
            >
              {day.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DatePickerComponent;
