import React from "react";
import { TriggerTitle } from "./styles";
import { ChevronDownIcon } from "../../../icons";
import { changeDateMonth } from "../../../utils/helpers";

import "./style.css";
import clsx from "clsx";
import { IDatePickerSelectorProps } from "../../../utils/interfaces";
import { CustomStyles } from "../../../utils/interfaces-styles";

export const DatePickerSelector: React.FC<IDatePickerSelectorProps> = ({
  shownDate,
  setShownDate,
  ...rest
}) => {
  const { triggerTitle } = rest.customStyles as CustomStyles;
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
        <TriggerTitle {...triggerTitle}>
          {shownDate.format("MMMM YYYY")}
        </TriggerTitle>
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
