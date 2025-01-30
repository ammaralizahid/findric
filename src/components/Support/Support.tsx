import React from "react";
import { FaSearch } from "react-icons/fa"; // Import search icon from react-icons

export default function Support() {
  return (
    <div className=" py-12">
      {/* Top Section with Gradient Background for Title and Search Box */}
      <div className="text-center mb-12 py-44 bg-gradient-to-br from-[#a83f8e] via-[#5645c2] via-[#6e37f7] via-[#ff8888] via-[#229068] to-[#097135]">
  <div className="inline-block px-6 py-3 rounded-lg mb-4">
    <h1 className="md:text-4xl text-24 font-bold text-white">
      What Do You Need Assistance With?
    </h1>
  </div>
  <div className="relative max-w-md mx-auto px-2">
    <input
      type="text"
      placeholder="Search for assistance..."
      className="w-full py-3 px-4 pl-10 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
    />
    <FaSearch className="absolute top-1/2 left-5 transform -translate-y-1/2 text-gray-400" />
  </div>
</div>


      {/* Support Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto px-6">
        {/* Services Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Our Services</h2>
          <ul className="space-y-3">
            <li className="hover:text-blue-500 cursor-pointer">Account Setup</li>
            <li className="hover:text-blue-500 cursor-pointer">Billing & Payments</li>
            <li className="hover:text-blue-500 cursor-pointer">Product Installation</li>
            <li className="hover:text-blue-500 cursor-pointer">Customization Help</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <ul className="space-y-3">
            <li className="hover:text-blue-500 cursor-pointer">
              How to reset my password?
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              How to manage my subscriptions?
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              How to access premium features?
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              Where can I find tutorials?
            </li>
          </ul>
        </div>

        {/* Additional Resources Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Additional Resources</h2>
          <ul className="space-y-3">
            <li className="hover:text-blue-500 cursor-pointer">User Guide</li>
            <li className="hover:text-blue-500 cursor-pointer">Video Tutorials</li>
            <li className="hover:text-blue-500 cursor-pointer">Community Forums</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
