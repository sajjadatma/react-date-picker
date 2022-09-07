import React, { useState } from "react";

import type { Dayjs } from "dayjs";

import { DatePickerCalendar } from "./DatePickerCalendar";
import { DatePickerSelector } from "./DatePickerSelector";

import "./style.css";
import { DisabledDays } from "../../utils/interfaces";

export interface IDatePickerProps {
  selectedDate: Dayjs;
  selectorDateFormat?: string;
  notAvailableDays?: Array<DisabledDays>;
  min?: string;
  max?: string;
  onChange: (newDate: Dayjs) => void;
}

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
