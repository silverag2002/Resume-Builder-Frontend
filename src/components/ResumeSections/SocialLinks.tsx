import React, { useState } from "react";
export default function SocialLinks({ handleClick }: any) {
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  return (
    <>
      <div
        className="font-semibold text-3xl my-6 flex flex-row justify-between items-center cursor-pointer "
        onClick={(event) => handleClick(event, setShowSocialLinks)}
        id="education"
      >
        <span id="education">Social Links</span>{" "}
        <div className="border-x border-y rounded-md border-violet-600 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`w-6 h-6 text-violet-600  transition-all duration-500 ease-in-out ${
              showSocialLinks ? "rotate-180" : ""
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
        className={`w-full h-1 ${showSocialLinks ? "hidden" : ""} bg-gray-200`}
      ></div>
      <div
        className={` rounded-md  transition-all duration-500 max-h-0 overflow-hidden ${
          showSocialLinks ? "max-h-full p-8 border-2" : ""
        }`}
      >
        <div className="flex flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-1/2">
            <span className="text-sm text-gray-400">Label</span>
            <input
              type="text"
              name="jobTitle"
              className="bg-gray-200 h-12 px-4 outline-none rounded-lg flex-2 "
            />
          </div>
          <div className="flex flex-col w-1/2 ml-4">
            <span className="text-sm text-gray-400 ">Link</span>
            <input
              type="text"
              name="jobTitle"
              className="bg-gray-200 h-12 px-4 outline-none rounded-lg flex-2 "
            />
          </div>
        </div>
      </div>
    </>
  );
}
