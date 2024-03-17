import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Nutrition from "../../images/nutritions.png";
import Organic from "../../images/organic.png";
import Yoga from "../../images/yoga.png";
import Sports from "../../images/sports.png";
import Nature from "../../images/nature.png";
import Sleep from "../../images/sleep.png";
import Health from "../../images/health.png";
import Runing from "../../images/running.png";
import Vegan from "../../images/vegan.png";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true); // Assuming sidebar is open by default
  const navigate = useNavigate();

  const closeSidebarAndNavigate = (url) => {
    setShowSidebar(false);
    navigate(url);
  };

  const buttons = [
    {
      name: "Nutrition",
      icon: <img src={Nutrition} alt="Nutrition" className="w-10 h-10" />,
      url: "/nutrition",
      cName: "nav-text",
    },
    {
      name: "Organic",
      icon: <img src={Organic} alt="Organic" className="w-10 h-10" />,
      url: "/organic",
      cName: "nav-text",
    },
    {
      name: "Yoga",
      icon: <img src={Yoga} alt="Yoga" className="w-10 h-10" />,
      url: "/button3",
      cName: "nav-text",
    },
    {
      name: "Sports",
      icon: <img src={Sports} alt="Sports" className="w-10 h-10" />,
      url: "/button4",
      cName: "nav-text",
    },
    {
      name: "Nature",
      icon: <img src={Nature} alt="Nature" className="w-10 h-10" />,
      url: "/button5",
      cName: "nav-text",
    },
    {
      name: "Sleep",
      icon: <img src={Sleep} alt="Sleep" className="w-10 h-10" />,
      url: "/button6",
      cName: "nav-text",
    },
    {
      name: "Health",
      icon: <img src={Health} alt="Health" className="w-10 h-10" />,
      url: "/button7",
      cName: "nav-text",
    },
    {
      name: "Running",
      icon: <img src={Runing} alt="Running" className="w-10 h-10" />,
      url: "/button8",
      cName: "nav-text",
    },
    {
      name: "Vegan",
      icon: <img src={Vegan} alt="Vegan" className="w-10 h-10" />,
      url: "/button9",
      cName: "nav-text",
    },
  ];
  // Your buttons configuration

  if (!showSidebar) return null; // Return null if sidebar is closed

  return (
    <div className="h-screen w-screen">
      <div className="bg-[#f6f6f6] text-black h-screen w-screen flex flex-col justify-center items-center shadow-2xl border-gray-100 ">
        <div className=" bg-white flex flex-col px-8 py-8 border-1 border-white shadow-md z-50">
          <h2 className="text-sm justify-start items-start">
            SELECT YOUR INTEREST
          </h2>
          <div className="grid grid-cols-3 gap-6 ">
            {buttons.map((button, index) => (
              <NavLink
                to={button.url}
                key={index}
                className="flex flex-col items-center justify-center p-0"
              >
                <button
                  onClick={() => closeSidebarAndNavigate(button.url)}
                  className="bg-white text-black py-2 px-2 w-20 h-20 flex items-center justify-center shadow rounded-sm border border-stone-600 hover:bg-gradient-to-t from-slate-200 to-slate-100 mt-5"
                >
                  <span className="mr-0">{button.icon}</span>
                </button>
                <span className="m-0">{button.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
