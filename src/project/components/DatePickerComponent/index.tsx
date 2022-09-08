import React, { useState } from "react";


import { DatePickerCalendar } from "./DatePickerCalendar";
import { DatePickerSelector } from "./DatePickerSelector";

import "./style.css";
import {  IDatePickerProps } from "./DatePickerComponent-interfaces";

export const DatePickerComponent: React.FC<IDatePickerProps> = ({
  selectedDate,
  selectorDateFormat,
  onChange,
  ...rest
}) => {
  const [shownDate, setShownDate] = useState(selectedDate.clone());

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
        {...rest}
      />
    </div>
  );
};
