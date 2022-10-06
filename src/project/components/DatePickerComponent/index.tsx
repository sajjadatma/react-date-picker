import React, { useState } from "react";

import { DatePickerCalendar } from "./DatePickerCalendar";
import { DatePickerSelector } from "./DatePickerSelector";

import "./style.css";
import { IDatePickerProps } from "./DatePickerComponent-interfaces";

export const DatePickerComponent: React.FC<IDatePickerProps> = ({
  selectedDate,
  selectorDateFormat,
  onChange,
  shownDate,
  setShownDate,
  days,
  trigger,
  ...rest
}) => {
  return (
    <div className={"DatePicker"}>
      <DatePickerSelector
        shownDate={shownDate}
        selectorDateFormat={selectorDateFormat}
        setShownDate={setShownDate}
        trigger={trigger}
        {...rest}
      />

      <DatePickerCalendar
        selectedDate={selectedDate}
        shownDate={shownDate}
        onChange={onChange}
        days={days}
        {...rest}
      />
    </div>
  );
};
