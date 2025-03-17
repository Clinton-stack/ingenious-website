'use client'
import React from "react";
import { useState } from "react";

const Form = ({ sendMail }) => {
  const [selectedForm, setSelectedForm] = useState("ingenious-ams");

  const handleFormChange = (formType) => {
    setSelectedForm(formType);
  };

  return (
    <div>
      <div className="flex  justify-center gap-5 md:gap-10 mb-4 px-3">
        <button
          className={`mr-2  text-sm flex-shrink-0 lg:text-2xl font-bold p-4 rounded-md ${
            selectedForm === "ingenious-ams" ? "bg-blue-500" : ""
          }`}
          onClick={() => handleFormChange("ingenious-ams")}
        >
          Ingenious AMS
        </button>
        <button
          className={`ml-2  flex-shrink-0  text-sm lg:text-2xl font-bold p-4 rounded-md ${
            selectedForm === "ingenious-payment" ? "bg-blue-500" : ""
          }`}
          onClick={() => handleFormChange("ingenious-payment")}
        >
          Ingenious Payment
        </button>
      </div>

      {selectedForm === "ingenious-ams" && (
        <form className="max-w-screen-xl  p-6 mx-auto rounded-md shadow-md md:p-12">
          <div className="space-y-6">
            <div className="flex flex-col">
              <input
                type="text"
                id="full_name"
                placeholder=" What product or service do you want to contact us?"
                name="full_name"
                className="px-4 py-2 placeholder:text-white bg-transparent text-black border border-blue-500 rounded-full focus:outline-none focus:border-blue-700"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mt-4 font-medium text-white">
                Are you registering onbehalf of a business or as an individual?
              </label>
              <select
                name="product_or_service"
                className="py-2 px-6 w-fit bg-transparent text-white border border-blue-500 rounded-full focus:outline-none focus:border-blue-700"
              >
                <option className=" text-black">Yes</option>
                <option className="text-black"> No</option>
              </select>
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                id="phone_no"
                placeholder="What type of business do you want to have with Ingenious AMS?"
                name="phone_no"
                className="px-4 py-2 text-white placeholder:text-white bg-transparent border border-blue-500 rounded-full focus:outline-none focus:border-blue-700"
              />
            </div>

            <div className="flex flex-col">
              <select
                id="business_type"
                name="business_type"
                className="px-4 py-2 text-white bg-transparent border border-blue-500 rounded-full focus:outline-none focus:border-blue-700"
              >
                <option className=" text-black">
                  What type of business do you want to have with Ingenious AMS?
                </option>
                <option className=" text-black">
                  Asset Manager (Description: You own or the Asset manager of
                  the Asset)
                </option>
                <option className=" text-black">
                  Facility Manager (Description: You manager or the company you
                  work for manages an Asset)
                </option>
                <option className=" text-black">
                  Collaborator (Description: You are a service provider that
                  wants to integrate with Ingenious)
                </option>
              </select>
            </div>

            <div className="flex flex-col">
              <select
                id="assets_type"
                name="assets_type"
                className="px-4 py-2 text-white bg-transparent  border  border-blue-500 rounded-full focus:outline-none focus:border-blue-700"
              >
                <option className=" text-black">
                  {" "}
                  What type of Assets do you want to onboard into Ingenious AMS
                  (With a unit counter in front of each Assets)?
                </option>
                <option className=" text-black">Hotel</option>
                <option className=" text-black">Mall</option>
                <option className=" text-black">Warehouse</option>
              </select>
            </div>

            <div className="flex flex-col">
              <select
                id="preferred_communication"
                name="preferred_communication"
                className="px-4 py-2 text-white bg-transparent border border-blue-500 rounded-full focus:outline-none focus:border-blue-700"
              >
                <option className="text-black">
                  {" "}
                  What is your preferred means of communication?
                </option>
                <option className="text-black">Email</option>
                <option className="text-black">Phone call</option>
              </select>
            </div>

            <button
              type="submit"
              className={`block px-6 py-3 mx-auto text-white transition duration-300 rounded-md ${
                isLoading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-teal-500 hover:bg-teal-600"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      )}

      {selectedForm === "ingenious-payment" && (
        <form className="max-w-screen-xl p-6 mx-auto rounded-md shadow-md md:p-12">
          {/* Ingenious Payment form */}
          {/* Your form fields specific to Ingenious Payment */}
        </form>
      )}
    </div>
  );
};

export default Form;
