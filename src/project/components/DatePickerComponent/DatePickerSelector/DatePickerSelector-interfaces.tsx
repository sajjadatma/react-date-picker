import { Dayjs } from "dayjs";
import { CustomStyles } from "../../../utils/interfaces-styles";

export interface IDatePickerSelectorProps {
  shownDate: Dayjs;
  selectorDateFormat?: string;
  setShownDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  customStyles?: CustomStyles;
  trigger: (isNextMonth: boolean) => () => void;
}
