import React from "react";
import { IDatePickerProps } from "./project/components/DatePickerComponent/DatePickerComponent-interfaces";

const FakeComponent: React.FC<IDatePickerProps> = (props) => {
  console.log(props);
  return <div>FakeComponent</div>;
};

export default FakeComponent;
