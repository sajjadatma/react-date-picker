import { changeDateMonth, getCalendarRows, now } from "./utils/helpers";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import { useMemo, useState } from "react";
import { DatePickerComponent } from "./components/DatePickerComponent";
import { DisabledDays } from "./utils/interfaces";
import { CustomStyles } from "./utils/interfaces-styles";
import { IDatePickerPropsComponent } from "./components/DatePickerComponent/DatePickerComponent-interfaces";
dayjs.extend(jalaliday);
dayjs.locale("fa");

export interface IAppProps {
  notAvailableDays?: Array<DisabledDays>;
  min?: string;
  max?: string;
  customStyles?: CustomStyles;
  Component?: React.FunctionComponent<IDatePickerPropsComponent>;
  closureDay?: Array<number> | [];
}
export const DatePicker: React.FC<IAppProps> = ({ Component, ...rest }) => {
  const [date, setDate] = useState(now());
  const [shownDate, setShownDate] = useState(date.clone());
  const { notAvailableDays, min, max, closureDay } = rest;
  const days = useMemo(
    () =>
      getCalendarRows({ shownDate, notAvailableDays, min, max, closureDay }),
    [shownDate, notAvailableDays, min, max,closureDay]
  );

  const trigger = (isNextMonth: boolean) => {
    return () => {
      setShownDate(changeDateMonth(shownDate, isNextMonth));
    };
  };

  return (
    <div className="app__container">
      <div className="app">
        <h4 className="app__title">
          Picked Date: {date.format("YYYY - MM - DD")}
        </h4>
        {Component ? (
          <Component days={days} {...rest} trigger={trigger} />
        ) : (
          <DatePickerComponent
            selectedDate={date}
            onChange={setDate}
            days={days}
            shownDate={shownDate}
            setShownDate={setShownDate}
            trigger={trigger}
            {...rest}
          />
        )}
      </div>
    </div>
  );
};

export default DatePicker;
