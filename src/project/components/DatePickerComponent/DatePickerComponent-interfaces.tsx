import { Dayjs } from "dayjs";
import { DisabledDays } from "../../utils/interfaces";
import { CustomStyles } from "../../utils/interfaces-styles";

export interface IDatePickerProps {
    selectedDate: Dayjs;
    selectorDateFormat?: string;
    notAvailableDays?: Array<DisabledDays>;
    min?: string;
    max?: string;
    customStyles?: CustomStyles;
    onChange: (newDate: Dayjs) => void;
  }