import Card from "../Features/Card";
import timeTrack from "@/public/assets/timeTrackImage.png";
import timetrack2 from "@/public/assets/timetrack2.png";

const Feature = () => {
  return (
    <div className="container mx-auto py-8 flex flex-col lg:flex-row h-screen">
      {/* Left Side - Feature Card */}
      <div className="w-full lg:w-1/3 flex flex-col sticky top-0 px-2">
        <div className="bg-[#fbf3da] text-black p-6 rounded-lg mb-4 h-auto">
          <h2 className="text-xl font-semibold mb-4">Time Tracking</h2>
          <p>
            Accurate time tracking for you and your team. Automatic time
            tracking from Desktop &amp; Mobile apps or entry manually.
          </p>
        </div>
      </div>

      {/* Center - Sliding Feature Content */}
      <div className="w-full lg:w-2/3 overflow-auto px-4 h-screen flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-5 w-full">
          {/* Card for medium screens (2 per row) */}
          <div className="flex flex-col md:flex-row md:gap-5">
            <div className="flex-1 mb-4">
              <Card
                title="Time Tracking"
                description="Accurate time tracking for you and your team from Desktop & Mobile app"
                imageUrl={timeTrack}
                bg_color="#ffffff"
              />
            </div>

            <div className="flex-1 mb-4">
              <Card
                title="Daily, Weekly, Monthly & Custom Timesheet"
                description="Calendar wise timesheet report for your members. You can track time worked reports on a daily, weekly, monthly, or custom basis."
                imageUrl={timetrack2}
                bg_color="#ffffff"
              />
            </div>
          </div>

          {/* Card for medium screens (2 per row) */}
          <div className="flex flex-col md:flex-row md:gap-5">
            <div className="flex-1 mb-4">
              <Card
                title="Daily, Weekly, Monthly & Custom Timesheet"
                description="Calendar wise timesheet report for your members. You can track time worked reports on a daily, weekly, monthly, or custom basis."
                imageUrl={timetrack2}
                bg_color="#ffffff"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar - Display only on large screens */}
      <div className="hidden lg:block w-1/6 h-screen">
        <ul className="flex flex-col gap-2 pl-3">
          <li>Point of Sale</li>
          <li>Inventory Management</li>
          <li>Manage Teams</li>
          <li>Create Store</li>
        </ul>
      </div>
    </div>
  );
};

export default Feature;
