import "./App.css";
import DatePicker from "./project/index";
import { DisabledDays } from "./project/utils/interfaces";
function App() {
  const notAvailableDays: Array<DisabledDays> = [
    { disabledDate: "2022/09/05", description: "1st Holiday" },
    { disabledDate: "2022-09-10", description: "2nd Holiday" },
    { disabledDate: "2022-09-15", description: "3th Holiday" },
    { disabledDate: "2022-10-17", description: "4th Holiday" },
  ];
  const min: string = "2022-09-05";
  const max: string = "2022-09-20";
  return (
    <div className="App">
      <DatePicker notAvailableDays={notAvailableDays} />
    </div>
  );
}

export default App;
