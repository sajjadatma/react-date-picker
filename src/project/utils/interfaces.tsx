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
  closureDay?: boolean;
}

export interface FunctionParameters {
  dateState: Dayjs;
  holidays?: Array<DisabledDays>;
  min?: string;
  max?: string;
  closureDay?: Array<number> | [];
}
export interface ResultOfStartDate {
  difference: number;
  firstDay: Dayjs;
}
