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
  rows,
  ...rest
}) => {
  return (
    <div className={"DatePicker"}>
      <DatePickerSelector
        shownDate={shownDate}
        selectorDateFormat={selectorDateFormat}
        setShownDate={setShownDate}
        {...rest}
      />

      <DatePickerCalendar
        selectedDate={selectedDate}
        shownDate={shownDate}
        onChange={onChange}
        rows={rows}
        {...rest}
      />
    </div>
  );
};
