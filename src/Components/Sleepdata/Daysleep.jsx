//import { DaysleepChart } from "../Charts/DaysleepChart";
import DayChart from "../Charts/DaysleepChart";

const Daysleep = () => {
  return (
    <div className=" py-8 px-4  bg-white ">
      <div className=" inset-0 z-40 flex flex-col items-center border-2 border-[#ffffff] shadow-xl bg-[#f9f9f9] px-2">
        <div className="flex items-center justify-between w-full mt-8 px-4 ">
          <div className="flex flex-col items-center px-2">
            <h2 className="text-md ">Night Sleep</h2>
            <p className="text-sm mt-1">8 Hrs 16 Min</p>
          </div>
        </div>

        <div className="relative w-full flex justify-center items-center">
          {/* <div>
            <div className="flex items-center">
              <div className="w-10 h-2 rounded-md bg-[#ffa500] mr-1"></div>
              <p className="text-xs mr-2">Carbs</p>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <div className="w-10 h-2 rounded-md bg-[#616161] mr-1"></div>
              <p className="text-xs mr-2">Proteins</p>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <div className="w-10 h-2 rounded-md bg-[#964b00] mr-1"></div>
              <p className="text-xs ">Fat</p>
            </div>
          </div> */}

          <div className="flex flex-col w-full md:w-[500px] h-[300px]  justify-center">
            <DayChart />
          </div>
        </div>

        <div className="flex items-center justify-between w-full mt-8 px-4 ">
          <div className="flex flex-col items-center px-2">
            <h2 className="text-md ">Sleep Score</h2>
            <p className="text-xl font-bold "> 93/100</p>
          </div>
        </div>

        <div className="w-full max-w-3xl mt-8">
          <div className="flex items-center justify-between mb-2 px-4 py-2 bg-[#f8f6ff] rounded-md">
            <div className="flex items-center ">
              <div className="w-6 h-2 rounded-lg bg-[#e93331] mr-2"></div>
              <p className="text-sm">Deep Sleep</p>
            </div>
            <p className="flex flex-row text-sm items-center justify-center">
              2 Hrs 16 Min
            </p>
          </div>
          <div className="flex items-center justify-between mb-2 px-4 py-2 bg-[#f8f6ff] rounded-md">
            <div className="flex items-center">
              <div className="w-6 h-2 rounded-lg bg-[#0c52bf] mr-2"></div>
              <p className="text-sm">Light Sleep</p>
            </div>
            <p className="flex flex-row text-sm items-center justify-center">
              6 Hrs 14 Min
            </p>
          </div>
          <div className="flex items-center justify-between mb-2 px-4 py-2 bg-[#f8f6ff] rounded-md">
            <div className="flex items-center">
              <div className="w-6 h-2 rounded-lg bg-[#ffdc00] mr-2"></div>
              <p className="text-sm">Awake</p>
            </div>
            <p className="flex flex-row text-sm items-center justify-center">
              0 Hrs 16 Min
            </p>
          </div>

          {/* data section */}

          <div className="flex items-center justify-between mb-2 px-4 py-4 bg-[#fef4f4] rounded-md">
            <div className="flex flex-col items-start">
              <p className="text-sm">Proportion of Deep sleep</p>
              <p className="text-sm">Reference values : 20-60% </p>
            </div>
            <p className="flex flex-row text-sm items-center justify-center">
              25%
            </p>
          </div>
          <div className="flex items-center justify-between mb-2 px-4 py-4 bg-[#fff6f6] rounded-md">
            <div className="flex flex-col items-start">
              <p className="text-sm">Proportion of Light sleep</p>
              <p className="text-sm">Reference values : 50%</p>
            </div>
            <p className="flex flex-row text-sm items-center justify-center">
              75%
            </p>
          </div>
          <div className="flex items-center justify-between mb-2 px-4 py-4 bg-[#fffef2] rounded-md">
            <div className="flex flex-col items-start">
              <p className="text-sm">Awake Times</p>
              <p className="text-sm">Reference values : 0-2 Times</p>
            </div>
            <p className="flex flex-row text-sm items-center justify-center">
              1 Time
            </p>
          </div>
          <div className="flex items-center justify-between mb-2 px-4 py-4 bg-[#f6f6f6] rounded-md">
            <div className="flex flex-col items-start">
              <p className="text-sm">Fall Sleep Times</p>
              <p className="text-sm">Reference values : Before 0:00</p>
            </div>
            <p className="flex flex-row text-sm items-center justify-center">
              00:21 Late
            </p>
          </div>
          <div className="flex items-center justify-between mb-2 px-4 py-4 bg-[#f7f7fb] rounded-md">
            <div className="flex flex-col items-start">
              <p className="text-sm">Woke Up Times</p>
              <p className="text-sm">Reference values : After 6:00</p>
            </div>
            <p className="flex flex-row text-sm items-center justify-center">
              08:37
            </p>
          </div>
        </div>
      </div>
      <div className=" inset-0 z-40 flex flex-col items-start border-2 border-[#ffffff] shadow-xl bg-[#f9f9f9] px-2 mt-3">
        <div className="flex flex-col items-start">
          <p className="text-xl mt-1 px-2 py-2">
            {" "}
            Feel asleep late. Deep sleep time is short.
          </p>
          <p className="text-md mt-2 px-2 py-2">
            {" "}
            Try going bed around 22:00.Staying up late is not good for your
            immune system and speeds up ageing. Do not strain yourself too much,
            keep good mood,makke reasonable arrangements for work and rest time
            and do more exercise to keep fit.
          </p>
        </div>
        <div className="flex flex-col items-start mt-2 px-2 py-2">
          <p className="text-xl ">Sleep regularity</p>
          <div className="flex flex-row items-center mt-2">
            <div className="w-6 h-2 rounded-lg bg-[#e93331] mr-2"></div>
            <p className="text-sm">Fell asleep 32m late</p>
          </div>
          <div className="flex flex-row items-center mt-2">
            <div className="w-6 h-2 rounded-lg bg-[#605dae] mr-2"></div>
            <p className="text-sm">You woke up as usual</p>
          </div>
          <div className="flex flex-row items-center mt-2">
            <div className="w-6 h-2 rounded-lg bg-[#0c52bf] mr-2"></div>
            <p className="text-sm">Total sleep time is as usual</p>
          </div>
          <div className="flex flex-row items-center mt-2">
            <div className="w-6 h-2 rounded-lg bg-[#ffdc00] mr-2"></div>
            <p className="text-sm">37m added to deep sleep</p>
          </div>
        </div>
        <div className="flex flex-col items-start mt-2 px-2 py-2 ">
          <p className="text-xl"> Sleep</p>
          <p className="text-md mt-2 mb-4 text-pretty ">
            {" "}
            Sleep is an important to sustain biological life.Simply Loose
            records your sleep condition on devices such as watches and analyses
            quality to help you adjust your sleep habits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Daysleep;
