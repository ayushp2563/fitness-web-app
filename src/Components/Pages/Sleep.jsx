import { useState } from "react";
import Daysleep from "../Sleepcharts/Daysleep";

const selectTime = ["D", "W", "M", "Y"];

// eslint-disable-next-line react/prop-types
const DayContent = ({ day }) => {
  switch (day) {
    // case "D":
    //   return <div>This is the content for Day.</div>;
    case "W":
      return <div>This is the content for Week.</div>;
    case "M":
      return <div>This is the content for Month.</div>;
    case "Y":
      return <div>This is the content for Year.</div>;
    default:
    case "D":
      return (
        <div>
          <Daysleep />
        </div>
      );
  }
};

const Sleep = () => {
  const [selectedTime, setSelectedTime] = useState("D");

  return (
    <div className="container px-4">
      <div className="flex justify-center items-center px-6">
        <div className="flex justify-center items-center my-4 px-2 py-2 bg-[#f1edff] rounded-md">
          {selectTime.map((day) => (
            <button
              key={day}
              className={`px-2 py-2 w-20 rounded-md ${
                selectedTime === day
                  ? "bg-[#0c52bf] text-white"
                  : "bg-[#f1edff]"
              }`}
              onClick={() => setSelectedTime(day)}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
      <DayContent day={selectedTime} />
    </div>
  );
};

export default Sleep;
