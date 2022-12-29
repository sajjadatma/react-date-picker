import { Dayjs } from "dayjs";
import { CustomStyles } from "../../../utils/interfaces-styles";
import React from "react";

export interface IDatePickerSelectorProps {
  shownDate: Dayjs;
  selectorDateFormat?: string;
  setShownDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  triggerFoPreviousYear: (
    shownDate: Dayjs,
    setShownDate: React.Dispatch<React.SetStateAction<Dayjs>>
  ) => void;
  trigger: (isNextMonth: boolean) => () => void;
}
