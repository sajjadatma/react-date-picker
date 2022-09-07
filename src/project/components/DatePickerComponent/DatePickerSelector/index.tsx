import React from "react";
import { Dayjs } from "dayjs";

import { ChevronDownIcon } from "../../../icons";
import { changeDateMonth } from "../../../utils/helpers";

import "./style.css";
import clsx from "clsx";

export interface IDatePickerSelectorProps {
  shownDate: Dayjs;
  selectorDateFormat?: string;
  setShownDate: React.Dispatch<React.SetStateAction<Dayjs>>;
}

export const DatePickerSelector: React.FC<IDatePickerSelectorProps> = ({
  shownDate,
  setShownDate,
}) => {
  const handleIconClick = (isNextMonth: boolean) => {
    return () => {
      setShownDate(changeDateMonth(shownDate, isNextMonth));
    };
  };

  return (
    <div className={"DatePickerSelector"}>
      <div
        className={clsx(
          "DatePickerSelector__icon",
          "DatePickerSelector__iconLeft"
        )}
        onClick={handleIconClick(false)}
      >
        <ChevronDownIcon />
      </div>

      <div className={"DatePickerSelector__date"}>
        {shownDate.format("MMMM YYYY")}
      </div>

      <div
        className={clsx(
          "DatePickerSelector__icon",
          "DatePickerSelector__iconRight"
        )}
        onClick={handleIconClick(true)}
      >
        <ChevronDownIcon />
      </div>
    </div>
  );
};
