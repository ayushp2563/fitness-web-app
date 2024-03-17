import company from "../images/company_logo.png";
import logo from "../images/logo.png";

const Splashscreen = () => {
  //   let my_url = "/login";
  //   setTimeout(function () {
  //     window.location.replace(my_url);
  //   }, 3000);

  return (
    <div className=" fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-white">
      <div className="flex justify-center items-center h-full">
        <img
          src={logo}
          alt="Company Logo"
          className="max-w-16 max-h-16 rounded-xl"
        />
      </div>
      <div className="flex flex-row justify-center absolute bottom-5">
        <p className="mr-2 mt-3 content-center">POWERED BY :</p>
        <img src={company} alt="Company Logo" className="mb-2 max-w-24" />
      </div>
    </div>
  );
};

export default Splashscreen;
