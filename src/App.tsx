import "./App.css";
import DatePicker from "./project/index";
import { DisabledDays } from "./project/utils/interfaces";
import FakeComponent from "./fakeComponent";
function App() {
  const holidays: Array<DisabledDays> = [
    { disabledDate: "2023/01/05", description: "1st Holiday" },
    { disabledDate: "2023-01-10", description: "2nd Holiday" },
    { disabledDate: "2023-01-15", description: "3th Holiday" },
    { disabledDate: "2023-01-17", description: "4th Holiday" },
  ];
  const min: string = "2023-02-05";
  const max: string = "2023-02-20";

  const customStyles = {
    triggerTitle: {
      color: "red",
      fontSize: "20px",
    },
  };
  const closureDay = [1, 5];
  const getDate = (date: object) => {
    console.log(date);
  };
  return (
    <div className="App">
      <div>
        <DatePicker
          getDate={getDate}
          // holidays={holidays}
          // min={min}
          // max={max}
          // closureDay={closureDay}
          // component={FakeComponent}
        />
      </div>
    </div>
  );
}

export default App;
