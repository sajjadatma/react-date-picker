import { now } from "./utils/helpers";
import dayjs, { Dayjs } from "dayjs";
import jalaliday from "jalaliday";
import { useState } from "react";
import { DatePickerComponent } from "./components/DatePickerComponent";
import { DisabledDays } from "./utils/interfaces";
dayjs.extend(jalaliday);
dayjs.locale("fa");

export interface IAppProps {
  notAvailableDays?: Array<DisabledDays>;
  min?: string;
  max?: string;
}
export const DatePicker: React.FC<IAppProps> = ({ ...rest }) => {
  const [date, setDate] = useState(now());
  return (
    <div className="app__container">
      <div className="app">
        <h4 className="app__title">
          Picked Date: {date.format("YYYY - MM - DD")}
        </h4>
        <DatePickerComponent selectedDate={date} onChange={setDate} {...rest} />
      </div>
    </div>
  );
};

export default DatePicker;
