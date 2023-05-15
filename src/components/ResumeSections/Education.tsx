import React, { useState } from "react";
export default function Education({ handleClick }: any) {
  const [showEducation, setShowEducation] = useState(false);
  return (
    <>
      <div
        className="font-semibold text-3xl my-6 flex flex-row justify-between items-center cursor-pointer "
        onClick={(event) => handleClick(event, setShowEducation)}
        id="education"
      >
        <span id="education">Education</span>{" "}
        <div className="border-x border-y rounded-md border-violet-600 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`w-6 h-6 text-violet-600  transition-all duration-500 ease-in-out ${
              showEducation ? "rotate-180" : ""
            }`}
            id="education"
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
        className={`w-full h-1 ${showEducation ? "hidden" : ""} bg-gray-200`}
      ></div>
      <div
        className={` rounded-md  transition-all duration-500 max-h-0 overflow-hidden ${
          showEducation ? "max-h-full p-8 border-2" : ""
        }`}
      >
        <div className="flex flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-4/6">
            <span className="text-sm text-gray-400">School</span>
            <input
              type="text"
              name="jobTitle"
              className="bg-gray-200 h-12 px-4 outline-none rounded-lg flex-2 "
            />
          </div>
          <div className="flex flex-col  ml-4">
            <span className="text-sm text-gray-400 ">Degree</span>
            <input
              type="text"
              name="jobTitle"
              className="bg-gray-200 h-12 px-4 outline-none rounded-lg flex-2 "
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between my-4">
          <div className="flex flex-col w-7/12 mr-3">
            <div className="flex flex-row justify-between items-center">
              <span className="text-sm text-gray-400">Start and End date</span>
              <div className="flex flex-row">
                <input type="checkbox" name="eduPresent" />
                <span className="text-sm text-black mx-1">Present</span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center my-0.5">
              <input
                type="month"
                name="jobTitle"
                className="bg-gray-200 h-12 px-4 pr-3 outline-none rounded-lg flex-2 mr-1"
              />
              <input
                type="month"
                name="jobTitle"
                className="bg-gray-200 h-12 px-4 pr-3 outline-none rounded-lg flex-2 ml-1"
              />
            </div>
          </div>
          <div className="flex flex-col w-4/12 ml-4">
            <span className="text-sm text-gray-400 ">City</span>
            <input
              type="text"
              name="jobTitle"
              className="bg-gray-200 h-12 px-4 outline-none rounded-lg flex-2 "
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between my-4">
          <div className="flex flex-col w-full h-3/4 ">
            <span className="text-sm text-gray-400">Description</span>
            <textarea
              name="jobTitle"
              className="bg-gray-200 h-64 p-4 pr-0 outline-none rounded-lg flex-2 resize-none row-start-5"
            />
          </div>
        </div>
      </div>
      <div className="text-violet-600 flex flex-row justify-start items-center my-4">
        <span>Add Education +</span>
      </div>
    </>
  );
}
