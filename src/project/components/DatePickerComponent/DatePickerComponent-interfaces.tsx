import { Dayjs } from "dayjs";
import { DisabledDays, ICalendarCell } from "../../utils/interfaces";
import { CustomStyles } from "../../utils/interfaces-styles";
export interface IDatePickerProps {
  selectedDate: Dayjs;
  selectorDateFormat?: string;
  notAvailableDays?: Array<DisabledDays>;
  min?: string;
  max?: string;
  customStyles?: CustomStyles;
  shownDate: Dayjs;
  setShownDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  rows: Array<ICalendarCell>;
  onChange: (newDate: Dayjs) => void;
}
