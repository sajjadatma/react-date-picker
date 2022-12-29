import React from "react";
import { IDatePickerPropsComponent } from "./project/components/DatePickerComponent/DatePickerComponent-interfaces";

const FakeComponent: React.FC<IDatePickerPropsComponent> = (props) => {
  console.log(props);
  return <div>FakeComponent</div>;
};

export default FakeComponent;
