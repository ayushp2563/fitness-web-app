// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { setNavbarTitle } from './actions';

import { NutritionChart } from "../Charts/NutritionChart";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

// const SomeComponent = () => {
//  const dispatch = useDispatch();

//  const handleClick = () => {
//     dispatch(setNavbarTitle('New Title'));
//  };

//  return (
//     <button onClick={handleClick}>Change Navbar Title</button>
//  );
// };

// export default SomeComponent;

const Nutrition = () => {
  return (
    <div className=" py-8 px-4  bg-white ">
      <div className=" inset-0 z-40 flex flex-col items-center border-2 border-[#ffffff] shadow-xl bg-[#f9f9f9] px-2">
        <div className="flex items-center justify-between w-full mt-8 px-4 ">
          <div className="flex flex-col items-center px-2">
            <h2 className="text-md ">Consumed</h2>
            <p className="text-xl font-bold text-[#5fa3ff]">204</p>
            <p className="text-sm">Calories</p>
          </div>
          <div className="flex flex-col items-center px-2">
            <h2 className="text-md ">Remaining</h2>
            <p className="text-xl font-bold text-[#9572ff]">2185</p>
            <p className="text-sm">Calories</p>
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

          <div className="flex flex-col w-full md:w-[500px] h-[500px]  justify-center">
            <NutritionChart />
          </div>
        </div>

        <div className="w-full max-w-3xl mt-8">
          <div className="flex items-center justify-between mb-2 px-4 py-2 bg-[#f7f7f7] rounded-md">
            <div className="flex items-center ">
              <div className="w-6 h-2 rounded-lg bg-[#616161] mr-2"></div>
              <p className="text-sm">Proteins</p>
            </div>
            <p className="flex flex-row text-sm items-center justify-center">
              <IoIosArrowUp className="text-[#616161] text-lg mr-1 " />
              07.12 g
            </p>
          </div>
          <div className="flex items-center justify-between mb-2 px-4 py-2 bg-[#fffaf2] rounded-md">
            <div className="flex items-center">
              <div className="w-6 h-2 rounded-lg bg-[#ffa500] mr-2"></div>
              <p className="text-sm">Carbs</p>
            </div>
            <p className="flex flex-row text-sm items-center justify-center">
              <IoIosArrowDown className="text-[#ffa500] text-lg mr-1 " />
              30.12 g
            </p>
          </div>
          <div className="flex items-center justify-between mb-2 px-4 py-2 bg-[#faf6f2] rounded-md">
            <div className="flex items-center">
              <div className="w-6 h-2 rounded-lg bg-[#964b00] mr-2"></div>
              <p className="text-sm">Sugars</p>
            </div>
            <p className="flex flex-row text-sm items-center justify-center">
              <IoIosArrowDown className="text-[#964b00] text-lg mr-1 " />
              70.10 g
            </p>
          </div>
          <div className="flex items-center justify-between mb-2 px-4 py-2 bg-[#f5fcf4] rounded-md">
            <div className="flex items-center">
              <div className="w-6 h-2 rounded-lg bg-[#32cd32] mr-2"></div>
              <p className="text-sm">Fiber</p>
            </div>
            <p className="flex flex-row text-sm items-center justify-center">
              <IoIosArrowDown className="text-[#32cd32] text-lg mr-1 " />
              17.12 g
            </p>
          </div>
          <div className="flex items-center justify-between mb-2 px-4 py-2 bg-[#f9f6f2] rounded-md">
            <div className="flex items-center">
              <div className="w-6 h-2 rounded-lg bg-[#964b00] mr-2"></div>
              <p className="text-sm">Fat</p>
            </div>
            <p className="flex flex-row text-sm items-center justify-center">
              <IoIosArrowUp className="text-[#964b00] text-lg mr-1 " />
              15.10 g
            </p>
          </div>
          <div className="flex items-center justify-between mb-2 px-4 py-2 bg-[#fff6f6] rounded-md">
            <div className="flex items-center">
              <div className="w-6 h-2 rounded-lg bg-[#ff5353] mr-2"></div>
              <p className="text-sm">Cholesterol</p>
            </div>
            <p className="flex flex-row text-sm items-center justify-center">
              <IoIosArrowUp className="text-[#ff5353] text-lg mr-1 " />
              15.10 g
            </p>
          </div>
          <div className="flex items-center justify-between mb-2 px-4 py-2 bg-[#fcfcfc] rounded-md">
            <div className="flex items-center">
              <div className="w-6 h-2 rounded-lg bg-[#c0c0c0] mr-2"></div>
              <p className="text-sm">Sodium</p>
            </div>
            <p className="flex flex-row text-sm items-center justify-center">
              <IoIosArrowDown className="text-[#c0c0c0] text-lg mr-1 " />
              19.90 g
            </p>
          </div>
          <div className="flex items-center justify-between mb-2 px-4 py-2 bg-[#fdfdfe] rounded-md">
            <div className="flex items-center">
              <div className="w-6 h-2 rounded-lg bg-[#dadbdd] mr-2"></div>
              <p className="text-sm">Potassium</p>
            </div>
            <p className="flex flex-row text-sm items-center justify-center">
              <IoIosArrowDown className="text-[#dadbdd] text-lg mr-1 " />
              15.80 g
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
