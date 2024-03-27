import { useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

const SignUp = () => {
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [gender, setGender] = useState("");
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState([
    { text: "What is your name?", side: "left" },
  ]);

  const handleUserInput = (event) => {
    const input = event.target.value;
    setMessage(input);

    if (event.key === "Enter") {
      handleSubmit(input);
    }
  };

  const handleSubmit = (input) => {
    if (step === 0) {
      if (input.trim() !== "") {
        // Check if input is not empty
        setFirstName(input);
        setMessages([
          ...messages,
          { text: input, side: "right" }, // User's response
          { text: "What is your last name?", side: "left" }, // Next question
        ]);
        setStep(1);
        setMessage(""); // Clear the input field
      }
    } else if (step === 1) {
      if (input.trim() !== "") {
        // Check if input is not empty
        setLastName(input);
        setMessages([
          ...messages,
          { text: input, side: "right" }, // User's response
          { text: "What is your gender?", side: "left" }, // Next question
        ]);
        setStep(2);
        setMessage(""); // Clear the input field
      }
    } else if (step === 2) {
      if (input.trim() !== "") {
        // Check if input is not empty
        setGender(input);
        setMessages([
          ...messages,
          { text: input, side: "right" }, // User's response
          {
            text: `Thank you, ${firstName} ${lastName}. Your gender is ${input}.`,
            side: "left",
          }, // Confirmation message
        ]);
        setMessage(""); // Clear the input field
      }
    }
  };

  return (
    <div className="flex flex-row items-start justify-center w-screen h-screen px-4 py-1">
      <div className="bg-[#ffffff] p-4 rounded-sm shadow-lg w-full max-w-md">
        <div className="flex flex-col space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${
                message.side === "left"
                  ? "bg-[#e8f2ff] text-gray-800"
                  : "bg-[#f5f5f5] text-black self-end"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="relative mt-8">
          <input
            type="text"
            className=" pl-4 pr-12 py-2 w-full border bg-[#d9dadc] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={message}
            onChange={handleUserInput}
            onKeyDown={handleUserInput}
            placeholder="Type Here..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <FaCircleArrowRight className=" h-6 w-6 text-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
