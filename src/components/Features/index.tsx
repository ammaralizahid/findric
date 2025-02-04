import React from "react";
import Card from "./Card";
import timeTrack from "@/public/assets/timeTrackImage.png";
import timetrack2 from "@/public/assets/timetrack2.png";
export const Features = () => {
  return (
    <div className="container mx-auto py-8 lg:px-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-center lg:text-40 md:text-32 xs:text-20 text-[#1f2939] font-bold font-montserrat ">
          Transform Your Business with{" "}
          <span className="text-customGreen">Smart Features</span>
        </h1>
        <div className="flex flex-col lg:flex-row gap-5 ">
          {/* First Card */}
          <div className="lg:flex-1 px-2">
            <Card
              title="Hunted Products"
              description="Showcase top-selling or trending products that users can hunt for, helping them discover popular items."
              imageUrl={timeTrack}
              bg_color="#C7FFD8"
            />
          </div>

          {/* Second Card takes 2x the width of the first card on larger screens */}
          <div className="lg:flex-[2]">
            <Card
              title="Broad Marketplace"
              description={`Enable businesses to list a wide variety of products across multiple categories, attracting a broad customer base.`}
              imageUrl={timetrack2}
              bg_color="#ffd1fb"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 ">
          <div className="lg:flex-1">
            <Card
              title="Track Inventory"
              description="Continuously track inventory levels, providing updates on stock availability"
              imageUrl={timeTrack}
              bg_color="#d2e4ff"
            />
          </div>

          <div className="lg:flex-1">
            <Card
              title="Services"
              description="Allow businesses to list services alongside physical products, broadening their offerings to customers"
              imageUrl={timetrack2}
              bg_color="#fdf9ef"
            />
          </div>
          <div className="lg:flex-1">
            <Card
              title="Track Orders/Sales"
              description="A centralized system to track all customer orders, from placement to fulfillment, ensuring timely delivery and service"
              imageUrl={timetrack2}
              bg_color="#DFF2EB"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 ">
          {/* First Card */}
          <div className="lg:flex-[2] px-2">
            <Card
              title="Robust Dashboard"
              description={
                "Allow users to customize their dashboard.\nIncorporate charts and graphs for easy data interpretation, providing a comprehensive view of business performance at a glance."
              }
              imageUrl={timetrack2}
              bg_color="#FFE3E3"
            />
          </div>

          {/* Second Card takes 2x the width of the first card on larger screens */}
          <div className="lg:flex-1">
            <Card
              title="Multiple Locations Support"
              description="Manage inventory for multiple locations, allowing users to track stock levels and sales by location"
              imageUrl={timetrack2}
              bg_color="#FFE1FF"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 ">
          <div className="lg:flex-1">
            <Card
              title="Manage Teams & Permissions"
              description="Define user roles and permissions, ensuring team members have appropriate access to relevant features and data"
              imageUrl={timeTrack}
              bg_color="#FFF7F1"
            />
          </div>
          <div className="lg:flex-1">
            <Card
              title="Email Marketing"
              description="Enable users to create and schedule email marketing campaigns, promoting products and services directly to their customer base."
              imageUrl={timeTrack}
              bg_color="#C4D7FF"
            />
          </div>
          <div className="lg:flex-1">
            <Card
              title="Product Variants and Customization"
              description={
                "Support for various product types and customizable options, such as sizes, colors, and materials.\nEasily manage product listings and provide a unique shopping experience tailored to your customers preferences."
              }
              imageUrl={timeTrack}
              bg_color="#f0ffd6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
