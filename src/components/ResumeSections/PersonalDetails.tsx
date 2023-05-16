import React, { useState } from "react";
export default function PersonalDetails({ handleClick }: any) {
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);
  return (
    <>
      <div
        className="font-semibold text-3xl my-6 flex flex-row justify-between items-center cursor-pointer "
        onClick={(event) => handleClick(event, setShowPersonalDetails)}
        id="personal-details"
      >
        <span id="personal-details">Personal details</span>{" "}
        <div className="border-x border-y rounded-md border-violet-600 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`w-6 h-6 text-violet-600  transition-all duration-500 ease-in-out ${
              showPersonalDetails ? "rotate-180" : ""
            }`}
            id="personal-details"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <div
        className={`w-full h-1 ${
          showPersonalDetails ? "hidden" : ""
        } bg-gray-200`}
      ></div>
      <div
        className={` rounded-md  transition-all duration-500 max-h-0 overflow-hidden ${
          showPersonalDetails ? "max-h-full p-8 border-2" : ""
        }`}
      >
        <div className="flex flex-row items-center justify-between my-4">
          <div className="flex flex-col w-1/2 mr-4">
            <span className="text-sm text-gray-400">First Name</span>
            <input
              type="text"
              name="jobTitle"
              className="bg-gray-200 h-12 px-4 outline-none rounded-lg flex-2 "
            />
          </div>
          <div className="flex flex-col w-1/2 ml-4">
            <span className="text-sm text-gray-400 ">Last Name</span>
            <input
              type="text"
              name="jobTitle"
              className="bg-gray-200 h-12 px-4 outline-none rounded-lg flex-2 "
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between my-4">
          <div className="flex flex-col w-1/2 mr-4">
            <span className="text-sm text-gray-400">Email</span>
            <input
              type="text"
              name="jobTitle"
              className="bg-gray-200 h-12 px-4 outline-none rounded-lg flex-2 "
            />
          </div>
          <div className="flex flex-col w-1/2 ml-4">
            <span className="text-sm text-gray-400 ">Phone</span>
            <input
              type="text"
              name="jobTitle"
              className="bg-gray-200 h-12 px-4 outline-none rounded-lg flex-2 "
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between my-4">
          <div className="flex flex-col w-full ">
            <span className="text-sm text-gray-400">Headline</span>
            <input
              type="text"
              name="jobTitle"
              className="bg-gray-200 h-12 px-4 outline-none rounded-lg flex-2 "
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between my-4">
          <div className="flex flex-col w-full ">
            <span className="text-sm text-gray-400">Address</span>
            <input
              type="text"
              name="jobTitle"
              className="bg-gray-200 h-12 px-4 outline-none rounded-lg flex-2 "
            />
          </div>
        </div>
        {/* <div className="flex flex-row items-center justify-between my-4">
          <div className="flex flex-col w-1/2 mr-4">
            <span className="text-sm text-gray-400">City</span>
            <input
              type="text"
              name="jobTitle"
              className="bg-gray-200 h-12 px-4 outline-none rounded-lg flex-2 "
            />
          </div>
          <div className="flex flex-col w-1/2 ml-4">
            <span className="text-sm text-gray-400 ">Country</span>
            <input
              type="text"
              name="jobTitle"
              className="bg-gray-200 h-12 px-4 outline-none rounded-lg flex-2 "
            />
          </div>
        </div> */}
        <div className="text-violet-600 flex flex-row justify-start items-center">
          <span>Add more details +</span>
        </div>
      </div>
    </>
  );
}
