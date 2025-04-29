"use client";
import React from "react";
import Button from "../Button";

const handleScheduleDemo = () => {
  window.open("https://calendly.com/mohsinpakmughal/30min", "_blank");
};

export default function ScheduleDemo() {
  return (
    <div className="flex flex-col">
      <h1 className="md:text-40 text-32 font-bold text-center font-montserrat leading-52">
        Schedule Appointment
      </h1>
      <p className="text-16 font-medium text-center mt-7">
        Our expert will guide you to learn ins and outs of FINDRIC, answer your
        inquiries and show a demo on how it works.
      </p>
      <div className="w-[200px] flex items-center justify-center mx-auto">
        <Button
          type="button"
          text="Schedule Time"
          className="mt-6 w-full text-white border-none p-1 bg-customGreen text-16 font-semibold"
          onClick={handleScheduleDemo}
        />
      </div>
      <div className="flex lg:justify-center py-8">
        <div className="lg:max-w-md px-4 lg:p-5 font-montserrat lg:border-blue-300 lg:border-2">
          <h1 className="text-xl font-semibold mb-4">You&#39;ll get to know</h1>
          <ul className="space-y-3 font-medium">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
              Guide through each feature and functionality, ensuring you
              understand how to use the system to its fullest potential.
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
              Provide specific recommendations and tips relevant to their
              business type, industry, and operational goals.
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
              How to track and manage orders from start to finish.
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
              Set up team accounts with role-based permissions, giving each team
              member the appropriate level of access.
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
              Teach customers to utilize the analytics dashboard to track sales
              performance{" "}
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
              Educate customers on the benefits of using the marketplace,
              including the visibility of their products and services in
              multiple domains.{" "}
            </li>
          </ul>
          {/* <h1 className="text-xl font-semibold mt-10">More information:</h1>
          <ul className="space-y-3 font-medium">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
              The time for the demonstration is 30 minutes, but we can adjust
              if you need it.
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
              Let us know if you need guidelines but have no extra time to put
              in.
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
              You can add other members to join the free demo.
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}
