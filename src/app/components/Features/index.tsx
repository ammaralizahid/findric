import React from "react";
import Card from "./Card";
import timeTrack from "@/public/assets/timeTrackImage.png";
import timetrack2 from "@/public/assets/timetrack2.png";
export const Features = () => {
  return (
    <div className="container mx-auto py-8 lg:px-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-center lg:text-40 md:text-32 xs:text-20 text-[#1f2939] font-bold font-montserrat ">
          Time Tracking Feature Sets To Help You Build & Manage A{" "}
          <span className="text-customGreen">High Growth Business</span>
        </h1>
        <div className="flex flex-col lg:flex-row gap-5 ">
          {/* First Card */}
          <div className="lg:flex-1 px-2">
            <Card
              title="Time Tracking"
              description="Accurate time tracking for you and your team from Desktop & Mobile app"
              imageUrl={timeTrack}
              bg_color="#ecf0fc"
            />
          </div>

          {/* Second Card takes 2x the width of the first card on larger screens */}
          <div className="lg:flex-[2]">
            <Card
              title="Daily, Weekly, Monthly & Custom Timesheet"
              description="Calendar wise timesheet report for your members. You can track time worked reports on a daily, weekly, monthly, or custom basis."
              imageUrl={timetrack2}
              bg_color="#eaf9f7"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 ">
          <div className="lg:flex-1">
            <Card
              title="Time Tracking"
              description="Accurate time tracking for you and your team from Desktop & Mobile app"
              imageUrl={timeTrack}
              bg_color="#d2e4ff"
            />
          </div>

          <div className="lg:flex-1">
            <Card
              title="Daily, Weekly, Monthly & Custom Timesheet"
              description="Calendar wise timesheet report for your members. You can track time worked reports on a daily, weekly, monthly, or custom basis."
              imageUrl={timetrack2}
              bg_color="#fdf9ef"
            />
          </div>
          <div className="lg:flex-1">
            <Card
              title="Daily, Weekly, Monthly & Custom Timesheet"
              description="Calendar wise timesheet report for your members. You can track time worked reports on a daily, weekly, monthly, or custom basis."
              imageUrl={timetrack2}
              bg_color="#ecf0fc"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
