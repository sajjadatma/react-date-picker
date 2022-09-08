import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { Dayjs } from "dayjs";
import { DisabledDays, FunctionParameters, ICalendarCell } from "./interfaces";
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
export const daysOfWeek = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
export const now = (date?: string) =>
  dayjs(date).calendar("jalali").locale("fa");

export function changeDateMonth(date: Dayjs, isNextMonth: boolean): Dayjs {
  if (date.month() === 0 && !isNextMonth) {
    return date.set("year", date.year() - 1).set("month", 11);
  }
  if (date.month() === 11 && isNextMonth) {
    return date.set("year", date.year() + 1).set("month", 0);
  }
  return date.add(isNextMonth ? 1 : -1, "month");
}

export function checkDaysIsInMonth(dayConstant: Dayjs, date: Dayjs) {
  if (date.isBefore(dayConstant, "month")) return false;
  if (date.isAfter(dayConstant, "month")) return false;
  return true;
}

const prepareCell = (
  date: Dayjs,
  dayNumber: number,
  isDisabled: boolean = false,
  dayConstant: Dayjs
) => {
  return {
    text: String(dayNumber),
    value: date.clone().set("date", dayNumber),
    isDisabled,
    isInThisMonth: checkDaysIsInMonth(dayConstant, date),
  };
};

export function getCalendarRows(
  newConstants: FunctionParameters
): Array<ICalendarCell> {
  const { shownDate, max, min, notAvailableDays } = newConstants;
  let rows: Array<ICalendarCell> = [];
  let daysInMonth: Dayjs = shownDate.startOf("month").startOf("week");
  let endDaysInMonth: Dayjs = shownDate.endOf("month").endOf("week");
  const differents: number = endDaysInMonth.diff(daysInMonth, "day");
  for (let i = 0; i <= differents; i++) {
    rows.push(
      prepareCell(daysInMonth, +daysInMonth.format("D"), false, shownDate)
    );
    daysInMonth = daysInMonth.add(1, "day");
  }

  if (notAvailableDays && notAvailableDays.length > 0) {
    rows = addNotActivatedDate(rows, notAvailableDays);
  }

  if (max && typeof max === "string") {
    rows = disableDaysAfterThisDate(rows, max);
  }
  if (min && typeof min === "string") {
    rows = disableDaysBeforeThisDate(rows, min);
  }
  return rows;
}

export const addNotActivatedDate = (
  days: ICalendarCell[],
  notAvailableDays: Array<DisabledDays>
) => {
  const newDays = days.map((obj) => ({
    ...obj,
    isDisabled: notAvailableDays.some((item) =>
      dayjs(item.disabledDate).isSame(obj.value, "day")
    ),
  }));

  return newDays;
};

export const disableDaysAfterThisDate = (
  days: ICalendarCell[],
  max: string
) => {
  const newDays = days.map((obj) => ({
    ...obj,
    isDisabled:
      obj.isDisabled === false
        ? obj.value.isSameOrAfter(dayjs(max), "day")
        : true,
  }));
  return newDays;
};

export const disableDaysBeforeThisDate = (
  days: ICalendarCell[],
  min: string
) => {
  const newDays = days.map((obj) => ({
    ...obj,
    isDisabled:
      obj.isDisabled === false
        ? obj.value.isSameOrBefore(dayjs(min), "day")
        : true,
  }));
  return newDays;
};
