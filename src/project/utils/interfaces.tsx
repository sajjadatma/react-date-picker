import { Dayjs } from "dayjs";

export interface DisabledDays {
  disabledDate?: string | Dayjs;
  description?: string;
}
