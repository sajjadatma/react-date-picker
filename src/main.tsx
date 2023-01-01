import React, { useMemo } from "react";
import {
  changeDateMonth,
  triggerFoChangeYear,
  getCalendarRows,
  now,
  daysOfWeek,
  month,
  triggerForSetMonthAndYear,
} from "./utils/helpers";
import dayjs, { Dayjs } from "dayjs";
import jalaliday from "jalaliday";
import DatePickerComponent from "./components/DatePickerComponent/index";
import { DisabledDays } from "./utils/interfaces";
dayjs.extend(jalaliday);
dayjs.locale("fa");

type getDataProps = {
  selected_month?: number;
  selected_day?: number;
  selected_year?: number;
  state_month?: number;
  state_day?: number;
  state_year?: number;
  state_date?: any;
  selected_date?: any;
};
export interface IAppProps {
  holidays?: Array<DisabledDays>;
  min?: string;
  max?: string;
  component?: React.FunctionComponent<any>;
  closureDay?: Array<number> | [];
  getDate?: any;
}
const DatePicker: React.FC<IAppProps> = ({ component, ...rest }) => {
  const Component = component;
  const { holidays, min, max, closureDay } = rest;
  const [date, setDate] = React.useState(now());
  const [dateState, setDateState] = React.useState(date.clone());
  const days = useMemo(
    () => getCalendarRows({ dateState, holidays, min, max, closureDay }),
    [dateState, holidays, min, max, closureDay]
  );

  const trigger = (isNextMonth: boolean) => {
    return () => {
      setDateState(changeDateMonth(dateState, isNextMonth));
    };
  };
  type SetMonthAndYearFunc = {
    month?: number;
    year?: number;
  };
  const triggerForSetMonthAndYearFunc = (params: SetMonthAndYearFunc) => {
    triggerForSetMonthAndYear(
      dateState,
      setDateState,
      params.month,
      params.year
    );
  };
  const handleSelectDate = (value: Dayjs) => {
    return () => setDate(value);
  };
  const triggerFoNextYearFunc = (yearTrigger: boolean) => {
    return triggerFoChangeYear(dateState, setDateState, yearTrigger);
  };

  useMemo(() => {
    const selected_date = date;
    const state_date = dateState;
    const selected_month = date.month();
    const selected_year = date.year();
    const selected_day = date.date();
    const state_day = dateState.date();
    const state_year = dateState.year();
    const state_month = dateState.month();

    rest.getDate &&
      rest.getDate({
        selected_date,
        state_date,
        selected_month,
        selected_year,
        selected_day,
        state_day,
        state_year,
        state_month,
      });
  }, [date, dateState]);
  return (
    <>
      {Component ? (
        <Component
          selectedDate={date}
          handleSelectDate={handleSelectDate}
          days={days}
          dateState={dateState}
          setDateState={setDateState}
          trigger={trigger}
          triggerFoChangeYear={triggerFoNextYearFunc}
          daysOfWeek={daysOfWeek}
          month={month}
          triggerForSetMonthAndYear={triggerForSetMonthAndYearFunc}
          {...rest}
        />
      ) : (
        <DatePickerComponent
          selectedDate={date}
          handleSelectDate={handleSelectDate}
          days={days}
          dateState={dateState}
          setDateState={setDateState}
          trigger={trigger}
          triggerFoChangeYear={triggerFoNextYearFunc}
          daysOfWeek={daysOfWeek}
          month={month}
          triggerForSetMonthAndYear={triggerForSetMonthAndYearFunc}
          {...rest}
        />
      )}
    </>
  );
};

export default DatePicker;
