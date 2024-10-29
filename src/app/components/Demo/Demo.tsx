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
        Schedule for 30 minutes for more
        <br /> Quests
      </h1>
      <p className="text-14 font-medium text-center mt-7">
        Our expert will guide you to learn ins and outs of Apploye, answer your
        inquiries and show a demo on how it works.
      </p>
      <div className="w-[200px] flex items-center justify-center mx-auto">
        <Button
          type="button"
          text="Schedule Time"
          className="mt-6 w-full text-white border-none bg-customGreen text-16 font-medium"
          onClick={handleScheduleDemo}
        />
      </div>
      <div className="flex lg:justify-center py-8">
        <div className="lg:max-w-md px-4 lg:p-5 font-montserrat lg:border-blue-300 lg:border-2">
          <h1 className="text-xl font-semibold mb-4">You&#39;ll get to know</h1>
          <ul className="space-y-3 font-medium">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
              What makes Apploye special and distinctive from the others.
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
              The basics of Apploye: how to install it and set it up for the
              team.
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
              All the answers you need to learn with adequate time to wrap up
              properly.
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
              Help you figure out every complexity you have with Apploye using
              it with your associates.
            </li>
          </ul>
          <h1 className="text-xl font-semibold mt-10">More information:</h1>
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
          </ul>
        </div>
      </div>
    </div>
  );
}
