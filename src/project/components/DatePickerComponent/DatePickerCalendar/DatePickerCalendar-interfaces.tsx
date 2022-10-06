import { Dayjs } from "dayjs";
import { DisabledDays, ICalendarCell } from "../../../utils/interfaces";
import { CustomStyles } from "../../../utils/interfaces-styles";

export interface IDatePickerCalendarProps {
  shownDate: Dayjs;
  selectedDate: Dayjs;
  customStyles?: CustomStyles;
  notAvailableDays?: Array<DisabledDays>;
  min?: string;
  max?: string;
  days: Array<ICalendarCell>;
  onChange: (newDate: Dayjs) => void;
}
