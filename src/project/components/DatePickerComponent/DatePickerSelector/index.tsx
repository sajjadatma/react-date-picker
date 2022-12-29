import React from "react";
import { ChevronDownIcon } from "../../../icons";

import "./style.css";
import clsx from "clsx";
import { IDatePickerSelectorProps } from "./DatePickerSelector-interfaces";

export const DatePickerSelector: React.FC<IDatePickerSelectorProps> = ({
  shownDate,
  setShownDate,
  trigger,
  ...rest
}) => {
  return (
    <div className={"DatePickerSelector"}>
      <div
        className={clsx(
          "DatePickerSelector__icon",
          "DatePickerSelector__iconLeft"
        )}
        onClick={trigger(false)}
      >
        <ChevronDownIcon />
      </div>
      <div
        className={clsx(
          "DatePickerSelector__icon",
          "DatePickerSelector__iconLeft"
        )}
        onClick={() => rest.triggerFoPreviousYear(shownDate,setShownDate)}
      >
        <ChevronDownIcon />
      </div>
      <div className={"DatePickerSelector__date"}>
        {/* <TriggerTitle {...triggerTitle}> */}
        {shownDate.format("MMMM YYYY")}
        {/* </TriggerTitle> */}
      </div>

      <div
        className={clsx(
          "DatePickerSelector__icon",
          "DatePickerSelector__iconRight"
        )}
        onClick={trigger(true)}
      >
        <ChevronDownIcon />
        <br />
        <ChevronDownIcon />
      </div>
    </div>
  );
};
