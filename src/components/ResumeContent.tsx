import React, { useState } from "react";

const ResumeContent = () => {
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);

  function handleClick(event: any) {
    const id = event.target.getAttribute("id");
    console.log(id);
    setShowPersonalDetails(!showPersonalDetails);
  }
  return (
    <div className="flex flex-row">
      <div className="w-1/2 px-24 py-16 h-auto overflow-y-hidden overflow-x-scroll">
        <div className="bg-violet-600 rounded-full px-2 py-2 w-10  text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <div
          className="font-semibold text-3xl my-6 flex flex-row justify-between items-center cursor-pointer "
          onClick={(event) => handleClick(event)}
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
          <div className="flex flex-row items-center justify-between my-4">
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
          </div>
          <div className="text-violet-600 flex flex-row justify-start items-center">
            <span>Add more details +</span>
          </div>
        </div>
        {/* <div className="font-semibold text-3xl my-6 ">
          <span>Professional Summary</span>
          <button className="w-auto mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6  "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
        </div> */}

        {/* <div className="flex flex-row items-center justify-between my-4">
          <div className="flex flex-col w-full h-3/4 mr-4">
            <span className="text-sm text-gray-400">
              A short description about your professional career
            </span>
            <textarea
              name="jobTitle"
              className="bg-gray-200 h-64 px-4 outline-none rounded-lg flex-2 resize-none row-start-5"
            />
          </div>
        </div> */}
        <div className="font-semibold text-3xl my-6 ">
          <span>Employment History</span>
          <button className="w-auto mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6  "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col border-2 rounded-md p-8">
          <div className="flex flex-row justify-between">
            <span className="text-lg">School</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-violet-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
          <div className="flex flex-row items-center justify-between my-4 w-full">
            <div className="flex flex-col w-4/6">
              <span className="text-sm text-gray-400">Employer</span>
              <input
                type="text"
                name="jobTitle"
                className="bg-gray-200 h-12 px-4 outline-none rounded-lg flex-2 "
              />
            </div>
            <div className="flex flex-col  ml-4">
              <span className="text-sm text-gray-400 ">Position</span>
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
                <span className="text-sm text-gray-400">
                  Start and End date
                </span>
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
        <div className="text-violet-600 flex flex-row justify-start items-center">
          <span>Add Employment +</span>
        </div>
        <div className="font-semibold text-3xl my-6 ">
          <span>Education</span>
          <button className="w-auto mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6  "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col border-2 rounded-md p-8">
          <div className="flex flex-row justify-between">
            <span className="text-lg">School</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-violet-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
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
                <span className="text-sm text-gray-400">
                  Start and End date
                </span>
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
        <div className="font-semibold text-3xl my-6 ">
          <span>Website & Social links</span>
          <button className="w-auto mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6  "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col border-2 rounded-md p-8">
          <div className="flex flex-row justify-between">
            <span className="text-lg">Label</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-violet-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
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
        <div className="font-semibold text-3xl my-6 ">
          <span>Skills</span>
          <button className="w-auto mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6  "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col border-2 rounded-md p-8">
          <div className="flex flex-row justify-between">
            <span className="text-lg">Skills</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-violet-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
          <div className="flex flex-row items-center justify-between my-4 w-full">
            <div className="flex flex-col w-1/2">
              <span className="text-sm text-gray-400">Skill</span>
              <input
                type="text"
                name="jobTitle"
                className="bg-gray-200 h-12 px-4 outline-none rounded-lg flex-2 "
              />
            </div>
            <div className="flex flex-col w-1/2 ml-4">
              <span className="text-sm text-gray-400 ">Level - Selected</span>
              <div className="flex flex-row justify-stretch">
                <div className="bg-red-200 w-12 h-12 hover:border-2 hover:border-black"></div>
                <div className="bg-yellow-200 w-12 h-12 hover:border-2 hover:border-black"></div>
                <div className="bg-green-200 w-12 h-12 hover:border-2 hover:border-black"></div>
                <div className="bg-green-300 w-12 h-12 hover:border-2 hover:border-black"></div>
                <div className="bg-violet-300 w-12 h-12 hover:border-2 hover:border-black"></div>
              </div>
            </div>
          </div>
          <div className="text-violet-600 flex flex-row justify-start items-center my-4">
            <span>Add Education +</span>
          </div>
        </div>

        <div className="font-semibold text-3xl my-6 ">
          <span>Add Section</span>
        </div>
        <div className="flex flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-1/2">
            <span className="text-sm text-violet-600">
              Extra-Curricular Acitivities
            </span>
          </div>
          <div className="flex flex-col w-1/2 ml-4">
            <span className="text-sm text-violet-600">Internships</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-1/2">
            <span className="text-sm text-violet-600">Courses</span>
          </div>
          <div className="flex flex-col w-1/2 ml-4">
            <span className="text-sm text-violet-600">Hobbies</span>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-screen  bg-gray-200 flex flex-col items-center fixed right-0">
        <div className="bg-white text-black m-20 mb-6 h-3/4 w-3/4 "></div>
        <div className="flex flex-row justify-between items-center w-3/4 my-2">
          <button className="text-violet-600 ">Select template</button>
          <button className="bg-violet-600 text-white p-2 px-6  rounded-md ">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};
export default ResumeContent;
