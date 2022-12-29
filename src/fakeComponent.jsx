import React from "react";
import "./fake-styles.css";
const FakeComponent = (props) => {
  const {
    daysOfWeek,
    days,
    selectedDate,
    shownDate,
    handleSelectDate,
    trigger,
    triggerForSetMonthAndYear,
  } = props;
  console.log(selectedDate.format("YYYY/MM/DD"),"selectedDate");
  return (
    <div className="DatePickerCalendar__main__custom">
      
      <div>
        <button onClick={trigger(false)}>previous month</button>
        <button onClick={trigger(true)}>next month</button>
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
          // Determine the class names for each cell
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

export default FakeComponent;
