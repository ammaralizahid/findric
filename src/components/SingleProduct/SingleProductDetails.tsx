"use client";
import React, { useState } from "react";
import { FaPalette, FaTshirt } from "react-icons/fa";
import Image from "next/image";

const SingleProductDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tabs-1");
  const [rating, setRating] = useState<number>(0);

  return (
    <>
      <div className="flex justify-center  font-montserrat  px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl ">
          <div className="overview bg-white  p-6 sm:p-10">
            <ul className="flex flex-col sm:flex-row gap-4  sm:gap-6 mb-6 border-b">
              <li
                className={`cursor-pointer pb-3 ${
                  activeTab === "tabs-1"
                    ? "border-b-2 text-[#20bead] border-[#20bead]"
                    : ""
                }`}
                onClick={() => setActiveTab("tabs-1")}
              >
                <h6 className="text-base font-medium">Information</h6>
              </li>
              <li
                className={`cursor-pointer pb-3 ${
                  activeTab === "tabs-2"
                    ? "border-b-2 text-[#20bead] border-[#20bead]"
                    : ""
                }`}
                onClick={() => setActiveTab("tabs-2")}
              >
                <h6 className="text-base font-medium">Description</h6>
              </li>
              <li
                className={`cursor-pointer pb-3 ${
                  activeTab === "tabs-3"
                    ? "border-b-2 text-[#20bead] border-[#20bead]"
                    : ""
                }`}
                onClick={() => setActiveTab("tabs-3")}
              >
                <h6 className="text-base font-medium">Reviews (1)</h6>
              </li>
            </ul>

            <div className="tab-contents mt-4">
              {/* Information Tab */}
              <div
                className={`${activeTab === "tabs-1" ? "block" : "hidden"} 
                            animate-fadeIn`}
              >
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Color",
                    "Size",
                    "Material",
                    "Weight",
                    "Dimensions",
                    "Category",
                  ].map((info, index) => (
                    <div
                      key={info}
                      className="p-4 bg-gray-50 rounded-lg hover:bg-[#20bead]/5 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-[#20bead]/10 rounded-full">
                          {info === "Color" && (
                            <FaPalette className="text-[#20bead] text-lg" />
                          )}
                          {info === "Size" && (
                            <FaTshirt className="text-[#20bead] text-lg" />
                          )}
                          {info === "Material" && (
                            <FaPalette className="text-[#20bead] text-lg" />
                          )}
                          {info === "Weight" && (
                            <FaTshirt className="text-[#20bead] text-lg" />
                          )}
                          {info === "Dimensions" && (
                            <FaTshirt className="text-[#20bead] text-lg" />
                          )}
                          {info === "Category" && (
                            <FaTshirt className="text-[#20bead] text-lg" />
                          )}
                        </div>
                        <h4 className="font-semibold text-gray-700">{info}</h4>
                      </div>
                      <p className="text-gray-600 pl-11">
                        {
                          [
                            "Blue, Gray, Green, Red",
                            "Large, Medium, Small",
                            "Cotton, Leather, Silk",
                            " 0.5 kg, 1 kg, 2 kg",
                            "kilograms, meters, centimeters",
                            "Clothing, Shoes, Accessories",
                          ][index]
                        }
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description Tab */}
              <div
                className={`${
                  activeTab === "tabs-2" ? "block" : "hidden"
                } space-y-4 text-lg`}
              >
                <p className="text-gray-600">
                  Percentage off promotions, discounts, or sale markdowns are
                  most customarily based on our own opinion of the value of this
                  product, which is not intended to reflect a former price at
                  which this product has sold in the recent past.
                </p>
                <p className="text-gray-600">
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Nam eget neque eu ipsum
                  laoreet molestie nec vel nulla. Aenean iaculis, neque
                  ultricies efficitur ultricies, risus sapien dapibus ante, ac
                  venenatis nisi est nec sem. Vestibulum blandit tincidunt felis
                  a cursus. Donec eu tortor vitae metus scelerisque sollicitudin
                  ut congue est.
                </p>
              </div>

              {/* Reviews Tab */}
              <div
                className={`${
                  activeTab === "tabs-3" ? "block" : "hidden"
                } space-y-6 text-lg`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={100}
                    height={40}
                    priority // optional: preload for above-the-fold images
                  />
                  <div className="flex-1">
                    <div className="flex gap-1 text-yellow-400 mb-1">
                      {[...Array(4)].map((_, i) => (
                        <i key={i} className="fas fa-star text-sm" />
                      ))}
                      <i className="far fa-star text-sm text-yellow-400" />
                    </div>
                    <h6 className="text-base">
                      Evie Howarth -{" "}
                      <span className="text-gray-500 text-xs">
                        February 10, 2023
                      </span>
                    </h6>
                    <p className="mt-1">
                      Aenean iaculis, neque ultricies efficitur ultricies, risus
                      sapien dapibus ante, ac venenatis nisi est nec sem. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum ut pellentesque ante.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h6 className="text-lg font-medium mb-2">Add a review</h6>
                  <p className="text-gray-600 text-sm">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>

                  <div className="mt-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-sm">Your Rating</span>
                      <div className="flex gap-1">
                        {[5, 4, 3, 2, 1].map((num) => (
                          <React.Fragment key={num}>
                            <input
                              type="radio"
                              id={`star-${num}`}
                              name="rating"
                              className="hidden"
                              onChange={() => setRating(num)}
                            />
                            <label
                              htmlFor={`star-${num}`}
                              className={`cursor-pointer ${
                                rating >= num
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            >
                              <i className="fas fa-star text-sm" />
                            </label>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    <form className="space-y-4">
                      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        <div>
                          <input
                            type="text"
                            placeholder="Your Name*"
                            className="w-full px-3 py-1.5 text-sm border rounded focus:ring-2 focus:ring-[#20bead] outline-none"
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            placeholder="Your Email*"
                            className="w-full px-3 py-1.5 text-sm border rounded focus:ring-2 focus:ring-[#20bead] outline-none"
                            required
                          />
                        </div>
                      </div>

                      <textarea
                        placeholder="Your Review*"
                        rows={3}
                        className="w-full px-3 py-1.5 text-sm border rounded focus:ring-2 focus:ring-[#20bead] outline-none"
                      />

                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="saveInfo"
                          className="w-4 h-4"
                        />
                        <label
                          htmlFor="saveInfo"
                          className="text-gray-600 text-sm"
                        >
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="px-6 py-1.5 text-sm border-2 border-[#20bead] text-[#20bead] rounded hover:bg-[#20bead] hover:text-white transition-colors"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* End of Reviews Tab */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductDetails;
