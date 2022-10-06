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
  days: Array<ICalendarCell>;
  onChange: (newDate: Dayjs) => void;
  trigger: (isNextMonth: boolean) => () => void;
}

export interface IDatePickerPropsComponent {
  notAvailableDays?: Array<DisabledDays>;
  min?: string;
  max?: string;
  customStyles?: CustomStyles;
  days: Array<ICalendarCell>;
  closureDay?: Array<number>;
  trigger: (isNextMonth: boolean) => void;
}
