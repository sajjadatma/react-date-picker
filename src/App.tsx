import "./App.css";
import DatePicker from "./project/index";
import { DisabledDays } from "./project/utils/interfaces";
import FakeComponent from "./fakeComponent";
function App() {
  const notAvailableDays: Array<DisabledDays> = [
    { disabledDate: "2022/09/05", description: "1st Holiday" },
    { disabledDate: "2022-09-10", description: "2nd Holiday" },
    { disabledDate: "2022-09-15", description: "3th Holiday" },
    { disabledDate: "2022-10-17", description: "4th Holiday" },
  ];
  const min: string = "2022-09-05";
  const max: string = "2022-09-20";

  const customStyles = {
    triggerTitle: {
      color: "red",
      fontSize: "20px",
    },
  };
  const closureDay = [1];
  return (
    <div className="App">
      <DatePicker
        // notAvailableDays={notAvailableDays}
        // min={min}
        // max={max}
        // closureDay={closureDay}
        // Component={FakeComponent}
      />
    </div>
  );
}

export default App;
