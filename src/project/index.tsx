import { getCalendarRows, now } from "./utils/helpers";
import dayjs, { Dayjs } from "dayjs";
import jalaliday from "jalaliday";
import { ReactComponentElement, useMemo, useState } from "react";
import { DatePickerComponent } from "./components/DatePickerComponent";
import { DisabledDays, ICalendarCell } from "./utils/interfaces";
import { CustomStyles } from "./utils/interfaces-styles";
import { IDatePickerProps } from "./components/DatePickerComponent/DatePickerComponent-interfaces";
dayjs.extend(jalaliday);
dayjs.locale("fa");

export interface IAppProps {
  notAvailableDays?: Array<DisabledDays>;
  min?: string;
  max?: string;
  customStyles?: CustomStyles;
  Component?: React.FunctionComponent<IDatePickerProps>;
}
export const DatePicker: React.FC<IAppProps> = ({ Component, ...rest }) => {
  const [date, setDate] = useState(now());
  const [shownDate, setShownDate] = useState(date.clone());
  const { notAvailableDays, min, max } = rest;
  const rows = useMemo(
    () => getCalendarRows({ shownDate, notAvailableDays, min, max }),
    [shownDate]
  );

  return (
    <div className="app__container">
      <div className="app">
        <h4 className="app__title">
          Picked Date: {date.format("YYYY - MM - DD")}
        </h4>
        {Component ? (
          <Component
            selectedDate={date}
            onChange={setDate}
            rows={rows}
            shownDate={shownDate}
            setShownDate={setShownDate}
            {...rest}
          />
        ) : (
          <DatePickerComponent
            selectedDate={date}
            onChange={setDate}
            rows={rows}
            shownDate={shownDate}
            setShownDate={setShownDate}
            {...rest}
          />
        )}
      </div>
    </div>
  );
};

export default DatePicker;
