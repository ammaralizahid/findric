"use client";
import { useState } from "react";
import Card from "./Card";
import Button from "../Button";

const Pricing = () => {
  const features = [
    { label: "Unlimited Projects" },
    { label: "Time Tracking" },
    { label: "Custom Reports" },
    { label: "Team Collaboration" },
  ];
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="">
      <div className="flex flex-col">
        <div className="flex flex-col gap-10 items-center">
          <h1 className="font-extrabold md:text-4xl xs:text-22 xs:px-2 sm:text-22 text-center leading-tight">
            The Best Time Tracker Doesn&#39;t Have To Be{" "}
            <span className="text-teal-custom">The Most Expensive</span> One
          </h1>
          <h1 className="text-[#3d4d69] text-lg md:font-medium text-center sm:text-18 text-13">
            Free For 10 Days{" "}
            <span className="text-[5px] leading-none mt-[-20px]">⚫️</span> No
            Credit Card Required
          </h1>
          <div className="flex flex-row items-center gap-4">
            <div className="absolute flex justify-center items-center px-3 py-1 rounded-md ml-[-55px] mt-[-50px] text-sm font-semibold text-white bg-[#ffc107] rotate-[-15deg] transition-all duration-100 ease-in before:content-[''] before:absolute before:bottom-[-5px] before:left-1/2 before:transform before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-[5px] before:border-l-transparent before:border-r-[5px] before:border-r-transparent before:border-t-[5px] before:border-[#ffc107]">
              Save 50%
            </div>

            <h1
              className={`${
                isOn ? "text-[#3d4d69]" : "text-teal-custom font-semibold"
              } font-medium text-lg`}
            >
              Yearly
            </h1>
            <div className="flex items-center">
              <div
                onClick={toggleSwitch}
                className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  isOn ? "bg-teal-custom" : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                    isOn ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </div>
            </div>
            <h1
              className={`font-medium text-lg ${
                isOn ? "text-teal-custom font-semibold" : "text-[#3d4d69]"
              }`}
            >
              Monthly
            </h1>
          </div>
          <p className="text-lg text-center font-medium sm:text-18 text-13">
            Get Three Months Free, When You Pay Annually
          </p>
        </div>

        {/* Flexbox or Grid for Card Layout */}
        <div className="flex flex-col lg:flex-row gap-5 px-4 py-11 lg:px-20 font-montserrat">
          <div className="lg:flex-1">
            <Card
              bg_color="#f0f4f8"
              text_color="#4a90e2"
              title="STANDARD"
              pricing="$2.5"
              description="Ideal for the in-house teams, freelancers, or contractor teams of any size."
              features={features}
              buttonText="Try Free For 10 Days"
            />
          </div>
          <div className="lg:flex-1">
            <Card
              bg_color="#D4BEE4"
              text_color="#3B1E54"
              title="PREMIUM"
              pricing="$5.0"
              description="Best for growing teams with advanced features."
              features={features}
              buttonText="Try Free For 10 Days"
            />
          </div>

          <div className="lg:flex-1">
            <Card
              bg_color="#F3FEB8"
              text_color="#FFB22C"
              title="ENTERPRISE"
              pricing="$10.0"
              description="Designed for large organizations with custom solutions."
              features={features}
              buttonText="Try Free For 10 Days"
            />
          </div>
        </div>
        <div className="flex justify-center pb-12">
          <Button
            type="button"
            text="See Full Pricing Comparison"
            className="bg-white text-customGreen border-2 border-customGreen w-72 py-6 font-montserrat"
            style={{fontSize:"17px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
