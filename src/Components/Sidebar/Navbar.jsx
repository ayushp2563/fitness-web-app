// import { useState } from "react";
// import Sidebar from "./Sidebar";
// //import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { setNavbarTitle } from "../../actions/actions";

// // eslint-disable-next-line react/prop-types
// const Navbar = ({ show }) => {
//   // hamburger menu functionality
//   const [showSidebar, setShowSidebar] = useState(false);

//   const handleToggle = () => {
//     console.log("Toggling sidebar:", !showSidebar); // Debugging line
//     setShowSidebar(!showSidebar);
//   };

//   //const navbarTitle = useSelector((state) => state.navbarTitle);
//   // to dynamically change the title of navbar
//   const [isNewTitle, setIsNewTitle] = useState(false);

//   const dispatch = useDispatch();

//   const handleClick = () => {
//     const newTitle = isNewTitle ? "DASHBOARD" : "CUSTOMIZE YOUR INTEREST";
//     dispatch(setNavbarTitle(newTitle));
//     setIsNewTitle(!isNewTitle);
//   };
//   // navbar will not visible in splashscreen
//   if (!show) {
//     return null;
//   }

//   return (
//     <>
//       <nav className=" fixed bg-white px-4 py-4 flex justify-between shadow-xl z-999 w-full ">
//         <div className="flex items-center text-xl">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-menu cursor-pointer"
//             onClick={() => {
//               handleToggle();
//               handleClick();
//             }}
//           >
//             <line x1="4" x2="20" y1="12" y2="12" />
//             <line x1="4" x2="20" y1="6" y2="6" />
//             <line x1="4" x2="20" y1="18" y2="18" />
//           </svg>
//         </div>
//         <div className="flex items-center gap-x-5">
//           {isNewTitle ? "CUSTOMIZE YOUR INTEREST" : "DASHBOARD"}
//         </div>
//         <div className="flex items-center gap-x-5">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="28"
//             height="28"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-bell-dot relative inset-y-0 left-0 flex items-center pl-2 cursor-pointer"
//           >
//             <path d="M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3" />
//             <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
//             <circle cx="18" cy="8" r="3" />
//           </svg>
//         </div>
//       </nav>
//       {showSidebar ? <Sidebar /> : null}
//     </>
//   );
// };

// export default Navbar;
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
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../../actions/actions";

// eslint-disable-next-line react/prop-types
const Navbar = ({ show }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebarAndNavigate = (url) => {
    setShowSidebar(false);
    navigate(url);
  };

  // to dynamically change the title of navbar
  const dispatch = useDispatch();
  const title = useSelector((state) => state.title);
  const handleClick = (title) => {
    dispatch(setTitle(title));
  };

  const buttons = [
    {
      name: "NUTRITION",
      icon: <img src={Nutrition} alt="Nutrition" className="w-10 h-10" />,
      url: "/nutrition",
      cName: "nav-text",
    },
    {
      name: "ORGANIC",
      icon: <img src={Organic} alt="Organic" className="w-10 h-10" />,
      url: "/organic",
      cName: "nav-text",
    },
    {
      name: "YOGA",
      icon: <img src={Yoga} alt="Yoga" className="w-10 h-10" />,
      url: "/yoga",
      cName: "nav-text",
    },

    {
      name: "SPORTS",
      icon: <img src={Sports} alt="Sports" className="w-10 h-10" />,
      url: "/button4",
      cName: "nav-text",
    },
    {
      name: "NATURE",
      icon: <img src={Nature} alt="Nature" className="w-10 h-10" />,
      url: "/button5",
      cName: "nav-text",
    },
    {
      name: "SLEEP",
      icon: <img src={Sleep} alt="Sleep" className="w-10 h-10" />,
      url: "/sleep",
      cName: "nav-text",
    },
    {
      name: "HEALTH",
      icon: <img src={Health} alt="Health" className="w-10 h-10" />,
      url: "/button7",
      cName: "nav-text",
    },
    {
      name: "RUNNING",
      icon: <img src={Runing} alt="Running" className="w-10 h-10" />,
      url: "/button8",
      cName: "nav-text",
    },
    {
      name: "VEGAN",
      icon: <img src={Vegan} alt="Vegan" className="w-10 h-10" />,
      url: "/button9",
      cName: "nav-text",
    },
  ];

  if (!show) {
    return null;
  }

  return (
    <>
      <nav className="fixed bg-white px-4 py-4 flex justify-between shadow-xl z-50 w-full">
        <div className="flex items-center text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu cursor-pointer"
            onClick={() => {
              handleClick("CUSTOMIZE YOUR INTEREST");
              toggleSidebar();
            }}
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </div>
        <div className="flex items-center gap-x-5">{title}</div>
        <div className="flex items-center gap-x-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-bell-dot relative inset-y-0 left-0 flex items-center pl-2 cursor-pointer"
          >
            <path d="M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            <circle cx="18" cy="8" r="3" />
          </svg>
        </div>
      </nav>

      {showSidebar && (
        <div className="fixed inset-0 z-40 flex justify-center items-center  bg-[#f9f9f9]">
          <div className="bg-white border-2 border-[#ffffff] px-6 py-6 shadow-xl ">
            <h2 className="text-lg mb-2">SELECT YOUR INTEREST</h2>
            <div className="grid grid-cols-3 gap-4">
              {buttons.map((button, index) => (
                <NavLink
                  to={button.url}
                  key={index}
                  className="flex flex-col items-center justify-center p-0"
                  onClick={() => {
                    closeSidebarAndNavigate(button.url);
                    handleClick(button.name);
                  }}
                >
                  <button className="bg-white text-black py-2 px-2 w-20 h-20 flex items-center justify-center shadow rounded-sm border border-stone-600 hover:bg-gradient-to-t from-slate-200 to-slate-100 mt-5">
                    <span className="mr-0">{button.icon}</span>
                  </button>
                  <span className="mt-1">{button.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="pt-20 px-2">
        {/* Content of the page will be rendered below the navbar */}
      </div>
    </>
  );
};

export default Navbar;
