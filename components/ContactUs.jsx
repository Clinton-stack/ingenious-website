'use client'
import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { Agriwave, EduCollaboAfrica, IngeniousAMS, IngeniousPayment, Medtech, Services, StudioEte } from "./ServicesAndSolutions";
import { Button } from "@chakra-ui/react";


const ContactUs = () => {
  const form = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedForm, setSelectedForm] = useState("services");
  const [formData, setFormData] = useState({}); // Add formData state

  const handleFormChange = (formType) => {
    setSelectedForm(formType);
  };

  const sendEmail = async (mergedFormData) => {
    setIsLoading(true);
    console.log(mergedFormData);

    try {
      const response = await fetch(
        "https://mq940i1qbl.execute-api.us-east-1.amazonaws.com/Dev/Contact_Us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mergedFormData),
        }
      );

      if (response.ok) {
        Swal.fire("Successful!", "Your mail has been delivered!", "success");
        form.current.reset();
        setFormData({});
      } else {
        throw new Error(`Failed to submit form. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Failed to submit form. ${error.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Extract form data
    const additionalFormData = {
      title: e.target.title ? e.target.title.value : "",
      name: e.target.name ? e.target.name.value : "",
      company: e.target.company ? e.target.company.value : "",
      relationship: e.target.relationship ? e.target.relationship.value : "",
      email: e.target.email_address ? e.target.email_address.value : "",
      phoneNumber: e.target.phone_number ? e.target.phone_number.value : "",
      communicationMethod: e.target.communication_method
        ? e.target.communication_method.value
        : "",
      enquiryText: e.target.enquiryText ? e.target.enquiryText.value : "",
    };

    // Merge additional form data with existing formData
    const mergedFormData = {
      ...additionalFormData,
      ...formData,
    };

    // Call sendEmail with the merged form data
    sendEmail(mergedFormData);
  };

  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <>
      <form
        ref={form}
        className="max-w-screen-xl p-6 mx-auto rounded-md shadow-sm md:p-12"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="space-y-6">
          <div className="flex flex-col   ">
            <label htmlFor="title" className="mb-4 font-medium text-white">
              Title
            </label>
            <div className="border md:w-[90%] w-[90%] border-blue-500 rounded-full focus:outline-none focus:border-blue-700">

            <select
              id="title"
              name="title"
              className="py-2 px-6 w-[98%] focus:outline-none   bg-transparent text-white   "
              >
              <option value="" className="text-black">
                Select
              </option>
              <option className="text-black">Mr.</option>
              <option className="text-black">Mrs.</option>
              <option className="text-black">Miss.</option>
              <option className="text-black">Dr.</option>
              <option className="text-black">Engr.</option>
              <option className="text-black">Chief.</option>
              <option className="text-black">others.</option>
            </select>
              </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-4 font-medium text-white">
              *Can you do us the pleasure of writing your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="py-2 px-6 md:w-[90%] w-[90%] bg-transparent text-white border border-blue-500 rounded-full focus:outline-none focus:border-blue-700"
              pattern="^[^\s][A-Za-z ]{2,}$"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="company" className="mb-4 font-medium text-white">
              *What Company/Firm/Business do you represent?
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="py-2 px-6 md:w-[90%] w-[90%] bg-transparent text-white border border-blue-500 rounded-full focus:outline-none focus:border-blue-700"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="relationship"
              className="mb-4 font-medium text-white"
            >
              *What is the relationship between you and the company?
            </label>
            <input
              type="text"
              id="relationship"
              name="relationship"
              className="py-2 px-6 md:w-[90%] w-[90%] bg-transparent text-white border border-blue-500 rounded-full focus:outline-none focus:border-blue-700"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email_address"
              className="mb-4 font-medium text-white"
            >
              *Email
            </label>
            <input
              type="email"
              id="email_address"
              name="email_address"
              className="py-2 px-6 md:w-[90%] w-[90%] bg-transparent text-white border border-blue-500 rounded-full focus:outline-none focus:border-blue-700"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="phone_number"
              className="mb-4 font-medium text-white"
            >
              *Phone number (include country code e.g +234 or 00234)
            </label>
            <input
              type="phone"
              id="phone_number"
              name="phone_number"
              className="py-2 px-6 md:w-[90%] w-[90%] bg-transparent text-white border border-blue-500 rounded-full focus:outline-none focus:border-blue-700"
              pattern="^(00|\+)\d{8,15}$"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="communication"
              className="mb-4 font-medium text-white"
            >
              What do you prefer as your means of communication
            </label>
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="email"
                name="communication_method"
                value="Email"
                className="mr-2"
              />
              <label htmlFor="email" className="text-white mr-4">
                Email
              </label>
              <input
                type="radio"
                id="phone"
                name="communication_method"
                value="Phone Call"
                className="mr-2"
              />
              <label htmlFor="phone" className="text-white">
                Phone Call
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center  px-10 justify-center mb-8 mt-8">
          <p className="text-white text-center  font-bold text-xl md:text-2xl mb-2">
            What Services or Solutions do you want to Contact us for?
          </p>

          <div className="border md:w-[30%] w-[90%] border-blue-500 rounded-full focus:outline-none focus:border-blue-700">
            <select
              className="  py-2 px-6  md:w-[95%] w-[96%] focus:outline-none   bg-transparent text-white "
              value={selectedForm}
              onChange={(e) => handleFormChange(e.target.value)}
            >
              <option className=" text-black" value="services">
                Our Services
              </option>
              <option className=" text-black" value="ingenious-ams">
                Ingenious AMS
              </option>
              <option className=" text-black" value="ingenious-payment">
                Ingenious Payment
              </option>
              <option className=" text-black" value="eduCollabo-africa">
                EduCollabo Africa
              </option>
              <option className=" text-black" value="med-tech">
                Ingenious Medtech
              </option>
              <option className=" text-black" value="agriwave">
                Ingenious Agriwave
              </option>
              <option className=" text-black" value="studio">
                Studio Eté
              </option>
            </select>
          </div>
        </div>

        {selectedForm === "services" && (
          <Services updateFormData={updateFormData} />
        )}
        {selectedForm === "ingenious-ams" && (
          <IngeniousAMS updateFormData={updateFormData} />
        )}
        {selectedForm === "ingenious-payment" && (
          <IngeniousPayment updateFormData={updateFormData} />
        )}
        {selectedForm === "eduCollabo-africa" && (
          <EduCollaboAfrica updateFormData={updateFormData} />
        )}
        {selectedForm === "med-tech" && (
          <Medtech updateFormData={updateFormData} />
        )}
        {selectedForm === "agriwave" && (
          <Agriwave updateFormData={updateFormData} />
        )}
        {selectedForm === "studio" && (
          <StudioEte updateFormData={updateFormData} />
        )}

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-4 font-medium  text-white">
            Explain the nature of your enquiry below
          </label>
          <textarea
            rows={5}
            name="enquiryText"
            className="py-2 px-4 bg-transparent text-white border border-blue-500 rounded-lg focus:outline-none focus:border-blue-700"
            placeholder="Enter additional information..."
          />
        </div>
        
        <Button
          display="flex"
          alignContent={"center"}
          type="submit"
          borderRadius="40px"
          variant="outline"
          borderColor="#0191E3"
          color="white"
          width={{
            md: "auto",
          }}
          className={`block px-[20px] mt-10 md:px-[30px] py-2 mx-auto text-white transition duration-300`}
          disabled={isLoading}
          _hover={{ bg: "#0191E3", color: "white" }}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </>
  );
};

export default ContactUs;
