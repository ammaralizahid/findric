import React from "react";
import Card from "./Card";
import timeTrackImage from "../../../../public/assets/timeTrackImage.png";

export const Features = () => {
  return (
    <div className="flex flex-row gap-5 px-24">
      <Card
        title="Time Tracking"
        description={
          "Accurate time tracking for you and your team from Desktop & Mobile app"
        }
        imageUrl={timeTrackImage}
        bg_color="#ecf0fc"
      />
      <Card
        title="Daily, Weekly, Monthly & Custom Timesheet"
        description={
          "Calendar wise timesheet report for your members. You can track time worked reports on a daily, weekly, monthly, or custom basis."
        }
        imageUrl={timeTrackImage}
        bg_color="#eaf9f7"
      />
    </div>
  );
};
