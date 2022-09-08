import { Dayjs } from "dayjs";
export interface DisabledDays {
  disabledDate?: string | Dayjs;
  description?: string;
}

export interface ICalendarCell {
  text: string;
  value: Dayjs;
  isDisabled: boolean;
  isInThisMonth: boolean;
  activate?: boolean;
}

export interface FunctionParameters {
  shownDate: Dayjs;
  notAvailableDays?: Array<DisabledDays>;
  min?: string;
  max?: string;
}
