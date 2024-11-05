import Card from "../Features/Card";
import timeTrack from "@/public/assets/timeTrackImage.png";
import timetrack2 from "@/public/assets/timetrack2.png";

const Feature = () => {
  return (
    <div className="container mx-auto py-8 flex h-screen">
      {/* Left Side - Multiple Feature Card Sections */}
      <div className="w-full lg:w-5/6 flex flex-col overflow-y-auto">
        
        {/* Section 1: Feature Card Section */}
        <div className="flex flex-col lg:flex-row items-start mb-8 sticky">
          <div className="bg-[#c1fda7] text-black p-6 rounded-lg lg:w-1/3 mb-4 lg:mb-0">
            <h2 className="text-xl font-semibold mb-4">Comprehensive Inventory Management</h2>
            <p>
              {/* Add your description or content here */}
            </p>
          </div>
          
          {/* Sliding Feature Content for Section 1 */}
          <div className="flex flex-col gap-5 w-full lg:w-2/3">
            <div className="flex flex-col md:flex-row md:gap-5">
              <div className="flex-1 mb-4">
                <Card
                  title="Real-Time Inventory Tracking"
                  description="Monitor inventory levels in real-time, providing alerts for low stock and automatic updates as sales occur."
                  imageUrl={timeTrack}
                  bg_color="#ffffff"
                />
              </div>

              <div className="flex-1 mb-4">
                <Card
                  title="Bulk Import/Export"
                  description="Facilitate bulk uploading of products via CSV files, allowing users to manage their inventory effortlessly."
                  imageUrl={timetrack2}
                  bg_color="#ffffff"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-5">
              <div className="flex-1 mb-4">
                <Card
                  title="Multi-Location Support"
                  description="Manage inventory across multiple store locations, enabling users to track stock levels, sales, and transfers between locations."
                  imageUrl={timetrack2}
                  bg_color="#ffffff"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Feature Card Section */}
        <div className="flex flex-col lg:flex-row items-start mb-8">
          <div className="bg-[#c1fda7] text-black p-6 rounded-lg lg:w-1/3 mb-4 lg:mb-0">
            <h2 className="text-xl font-semibold mb-4">Advanced Analytics</h2>
            <p>
              {/* Add your description or content here */}
            </p>
          </div>
          
          {/* Sliding Feature Content for Section 2 */}
          <div className="flex flex-col gap-5 w-full lg:w-2/3">
            <div className="flex flex-col md:flex-row md:gap-5">
              <div className="flex-1 mb-4">
                <Card
                  title="Sales Insights"
                  description="Gain insights into sales trends and performance metrics to make informed business decisions."
                  imageUrl={timeTrack}
                  bg_color="#ffffff"
                />
              </div>

              <div className="flex-1 mb-4">
                <Card
                  title="Inventory Forecasting"
                  description="Use historical data to forecast inventory needs and optimize stock levels."
                  imageUrl={timetrack2}
                  bg_color="#ffffff"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Feature Card Section */}
        <div className="flex flex-col lg:flex-row items-start mb-8">
          <div className="bg-[#c1fda7] text-black p-6 rounded-lg lg:w-1/3 mb-4 lg:mb-0">
            <h2 className="text-xl font-semibold mb-4">Team Collaboration</h2>
            <p>
              {/* Add your description or content here */}
            </p>
          </div>
          
          {/* Sliding Feature Content for Section 3 */}
          <div className="flex flex-col gap-5 w-full lg:w-2/3">
            <div className="flex flex-col md:flex-row md:gap-5">
              <div className="flex-1 mb-4">
                <Card
                  title="Role-Based Access Control"
                  description="Assign different access levels to team members based on their roles for improved collaboration."
                  imageUrl={timeTrack}
                  bg_color="#ffffff"
                />
              </div>

              <div className="flex-1 mb-4">
                <Card
                  title="Activity Tracking"
                  description="Monitor team activities and contributions to ensure accountability and productivity."
                  imageUrl={timetrack2}
                  bg_color="#ffffff"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar - Display only on large screens */}
      <div className="hidden lg:block w-1/6 h-screen sticky top-0">
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
