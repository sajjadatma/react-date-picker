import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { Dayjs } from "dayjs";

import {
  DisabledDays,
  FunctionParameters,
  ICalendarCell,
  ResultOfStartDate,
} from "./interfaces";
import { Dispatch, SetStateAction } from "react";
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
export const daysOfWeek = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
export const month = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

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

export function triggerFoNextYear(date: Dayjs): Dayjs {
  return date.set("year", date.year() + 1);
}

export function triggerForSetMonthAndYear(
  date: Dayjs,
  setShownDate: Dispatch<SetStateAction<Dayjs>>,
  month: number = date.month() + 1,
  year: number = date.year()
): void {
  const newDate = date.set("month", month - 1).set("year", year);
  setShownDate(newDate);
}

export function triggerFoPreviousYear(
  date: Dayjs,
  setShownDate: React.FC<Dayjs>
): void {
  const newDate = date.subtract(1, "year");
  setShownDate(newDate);
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
  dayConstant: Dayjs,
  closureDay?: Array<number> | []
) => {
  return {
    text: String(dayNumber),
    value: date.clone().set("date", dayNumber),
    isDisabled,
    isInThisMonth: checkDaysIsInMonth(dayConstant, date),
    closureDay:
      closureDay && closureDay.length > 0
        ? closureDay.some((item) => {
            if (item === 1) {
              return date.day() - 5 === +item;
            } else {
              return date.day() === +item - 2;
            }
          })
        : false,
  };
};

export function getCalendarRows(
  newConstants: FunctionParameters
): Array<ICalendarCell> {
  const { shownDate, max, min, notAvailableDays, closureDay } = newConstants;

  let days: Array<ICalendarCell> = [];
  const startDayTrigger = startDate(shownDate, false);
  const { difference, firstDay } = startDayTrigger;
  let firstDayOfRow = firstDay;
  for (let i = 0; i <= difference; i++) {
    days.push(
      prepareCell(
        firstDayOfRow,
        +firstDayOfRow.format("D"),
        false,
        shownDate,
        closureDay
      )
    );
    firstDayOfRow = firstDayOfRow.add(1, "day");
  }

  if (notAvailableDays && notAvailableDays.length > 0) {
    days = addNotActivatedDate(days, notAvailableDays);
  }

  if (max && typeof max === "string") {
    days = disableDaysAfterThisDate(days, max);
  }
  if (min && typeof min === "string") {
    days = disableDaysBeforeThisDate(days, min);
  }
  return days;
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

const startDate = (date: Dayjs, startDateFlag: boolean) => {
  const firstDayOfMonth = date.startOf("month");
  const lastDayOfMonth = date.endOf("month");
  const firstSaturdayOfMonth: Dayjs = firstDayOfMonth.startOf("week");
  const lastFridayOfMonth: Dayjs = firstDayOfMonth.endOf("month").endOf("week");
  let difference: number = lastFridayOfMonth.diff(firstSaturdayOfMonth, "day");
  let result: ResultOfStartDate = {
    difference,
    firstDay: firstSaturdayOfMonth,
  };
  if (startDateFlag === true) {
    difference = lastDayOfMonth.diff(firstDayOfMonth, "day");
    result = { difference, firstDay: firstDayOfMonth };
  }
  return result;
};
