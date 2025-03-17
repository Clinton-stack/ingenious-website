'use cliebt'
import { useState } from "react";

export function Services ({updateFormData}){
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (e) => {
      const { value, checked } = e.target;
  
      if (checked) {
        // If checkbox is checked, add the value to selectedOptions
        setSelectedOptions((prevOptions) => [...prevOptions, value]);
      } else {
        // If checkbox is unchecked, remove the value from selectedOptions
        setSelectedOptions((prevOptions) =>
          prevOptions.filter((option) => option !== value)
        );
      }
  
      // Update the formData with 'ourServices' field
      if (updateFormData) {
        updateFormData({ ourServices: selectedOptions });
      }
    };
    return(
<>
      <p className=" flex px-3 justify-center mx-auto text-center  max-w-lg  border-b  border-opacity-40 pb-2">
        We offer a range of comprehensive IT services to support your business.
      </p>
      <div className="max-w-screen-xl  p-6 mx-auto rounded-md shadow-md md:p-12">
        <div className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-4 font-medium  text-white">
              What Ingenious service would you like to enquire about today.
            </label>
            <label className="inline-flex  items-center text-white mb-2">
              <input
                type="checkbox"
                name="ourServices"
                value="Cloud Migration and Managment"
                onChange={handleCheckboxChange}

                className="h-6 w-6 "
              />
              <span className=" ml-2">
                Cloud Migration and Managment (Description: Migrate to the cloud
                seamlessly and let us manage your cloud infrastructure
                efficiently).
              </span>
            </label>

            <label className="inline-flex items-center text-white mb-2">
              <input
                type="checkbox"
                name="ourServices"
                value="IT Consulting and Strategy Development"
                onChange={handleCheckboxChange}
                className="h-6 w-6 "
              />
              <span className="ml-2">
                IT Consulting and Strategy Development (Description: Develop a
                winning IT strategy with our expert consultants).
              </span>
            </label>
            <label className="inline-flex items-center text-white mb-2">
              <input
                type="checkbox"
                name="ourServices"
                value="Managed IT Services"
                onChange={handleCheckboxChange}
                className="h-6 w-6 "
              />
              <span className=" ml-2">
                Managed IT Services (Description: Trust our professionals to
                manage your IT infrastructure, allowing you to focus on your
                core business).
              </span>
            </label>
            <label className="inline-flex items-center text-white mb-2">
              <input
                type="checkbox"
                name="ourServices"
                value="Custom Software Development and Application Integration"
                onChange={handleCheckboxChange}
                className="h-6 w-6 "
              />
              <span className=" ml-2">
                Custom Software Development and Application Integration
                (Description: Tailor-made software solutions to meet your
                specific business needs).
              </span>
            </label>
            <label className="inline-flex items-center text-white mb-2">
              <input
                type="checkbox"
                name="ourServices"
                value="Data Analytics and Business Intelligence"
                onChange={handleCheckboxChange}
                className="h-6 w-6 "
              />
              <span className=" ml-2">
                Data Analytics and Business Intelligence (Description: Leverage
                data to make informed decisions and drive your business
                forward).
              </span>
            </label>
            <label className="inline-flex items-center text-white mb-2">
              <input
                type="checkbox"
                name="ourServices"
                value="Cybersecurity Services"
                onChange={handleCheckboxChange}
                className="h-6 w-6 "
              />
              <span className="ml-2">
                Cybersecurity Services (Description: Protect your business from
                cyber threats with our top-notch security services).
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
    )
}

export function IngeniousAMS({updateFormData}){

    const [selectedAssets, setSelectedAssets] = useState([]);
    const [selectedSection, setSelectedSection] = useState("");
  
    const handleCheckboxChange = (e) => {
      const { value, checked } = e.target;
  
      if (checked) {
        // If checkbox is checked, add the value to selectedAssets
        setSelectedAssets((prevAssets) => [...prevAssets, value]);
      } else {
        // If checkbox is unchecked, remove the value from selectedAssets
        setSelectedAssets((prevAssets) =>
          prevAssets.filter((asset) => asset !== value)
        );
      }
  
      // Update the formData with 'assets' field
      if (updateFormData) {
        updateFormData({ assets: selectedAssets, section: selectedSection });
      }
    };
  
    const handleSelectChange = (e) => {
      const { value } = e.target;
  
      // Update the formData with 'section' field
      setSelectedSection(value);
  
      if (updateFormData) {
        updateFormData({ assets: selectedAssets, section: value });
      }
    };
    return(
        <>
          <p className=" flex px-3 justify-center mx-auto text-center  max-w-lg  border-b  border-opacity-40 pb-2">
            Our Asset Management System (AMS) is designed to streamline asset
            management and optimize your resources. Connect with our AMS experts
            to explore how you can enhance your asset management processes.
          </p>
          <div className="max-w-screen-xl  p-6 mx-auto rounded-md shadow-md md:p-12">
            <div className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-4 font-medium  text-white">
                  What section in Ingenious AMS do you think you fall under:
                </label>
                <div className="border md:w-[90%] w-[90%] border-blue-500 rounded-full focus:outline-none focus:border-blue-700">
             
                <select
                  name="product_or_service"
                  className="py-2 px-6   w-[98%] focus:outline-none   bg-transparent text-white "
                    onChange={handleSelectChange}
               >
                  <option value="" className="text-black">
                    Select
                  </option>
                  <option className=" text-black">
                    Asset Manager (Description: You own an Asset or You are the
                    Asset manager or the company you work for owns the Asset)
                  </option>
                  <option className="text-black">
                    Facility Manager (Description: You manage an asset or the
                    company you work for manages an Asset)
                  </option>
                  <option className="text-black">
                    Collaborator (Description: You are a service provider that
                    wants to integrate with Ingenious AMS to service an asset).
                  </option>
                </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="mb-4 font-medium text-white">
                  What type of Assets would you be possibly onboard into
                  Ingenious AMS (With a unit counter in front of each Assets. To
                  provide the option of selecting more than one)
                </label>

                <label className="inline-flex  items-center text-white mb-2">
                  <input
                    type="checkbox"
                    name="asset"
                    value="Housing Estate"
                    onChange={handleCheckboxChange}
                  />
                  Housing Estate
                </label>

                <label className="inline-flex items-center text-white mb-2">
                  <input
                    type="checkbox"
                    name="asset"
                    value="Hotel"
                    onChange={handleCheckboxChange}
                  />
                  Hotel
                </label>
                <label className="inline-flex items-center text-white mb-2">
                  <input
                    type="checkbox"
                    name="asset"
                    value="Mall"
                    onChange={handleCheckboxChange}
                  />
                  Mall
                </label>
                <label className="inline-flex items-center text-white mb-2">
                  <input
                    type="checkbox"
                    name="asset"
                    value="Warehouse"
                    onChange={handleCheckboxChange}
                  />
                  Warehouse
                </label>
                <label className="inline-flex items-center text-white mb-2">
                  <input
                    type="checkbox"
                    name="asset"
                    value="Manufacturing firm"
                    onChange={handleCheckboxChange}
                  />
                  Manufacturing firm
                </label>

                <label className="inline-flex items-center text-white mb-2">
                  <input
                    type="checkbox"
                    name="asset"
                    value="Others"
                    onChange={handleCheckboxChange}
                  />
                  Others
                </label>
              </div>
            </div>
          </div>
        </>
    )

}

export function IngeniousPayment({ updateFormData }) {
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleCheckboxChange = (e) => {
      const { value, checked } = e.target;
  
      if (checked) {
        // If checkbox is checked, add the value to selectedOptions
        setSelectedOptions((prevOptions) => [...prevOptions, value]);
      } else {
        // If checkbox is unchecked, remove the value from selectedOptions
        setSelectedOptions((prevOptions) =>
          prevOptions.filter((option) => option !== value)
        );
      }
  
      // Update the formData with 'ingeniousPayment' field
      if (updateFormData) {
        updateFormData({ ingeniousPayment: selectedOptions });
      }
    };
  
    return (
      <>
        <p className="flex px-3 justify-center mx-auto text-center max-w-lg border-b border-opacity-40 pb-2">
          Ingenious Payment is the future of secure and efficient digital
          transactions. Get in touch with our payment experts to discover how we
          can revolutionize your financial transactions.
        </p>
        <div className="max-w-screen-xl p-6 mx-auto rounded-md shadow-md md:p-12">
          <div className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-4 font-medium text-white">
                What category do you think you fall under in the Ingenious Payment System;
              </label>
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="ingeniousPayment"
                  value="Consumer"
                  onChange={handleCheckboxChange}
                  className="h-6 w-6 "
                />
                <span className=" ml-2">
                  Consumer (Description: You are an individual that will like to
                  utilise one or more payment feature(s))
                </span>
              </label>
  
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="ingeniousPayment"
                  value="Merchant"
                  onChange={handleCheckboxChange}
                  className="h-6 w-6 "
                />
                <span className=" ml-2">
                  Merchant (Description: You own an online business (or Company,
                  firm) that require our service as our International payment service)
                </span>
              </label>
  
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="ingeniousPayment"
                  value="Others"
                  onChange={handleCheckboxChange}
                  className="h-6 w-6 "
                />
                <span className=" ml-2">Others</span>
              </label>
            </div>
          </div>
        </div>
      </>
    );
  }

  export function EduCollaboAfrica({ updateFormData }) {
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleCheckboxChange = (e) => {
      const { value, checked } = e.target;
  
      if (checked) {
        // If checkbox is checked, add the value to selectedOptions
        setSelectedOptions((prevOptions) => [...prevOptions, value]);
      } else {
        // If checkbox is unchecked, remove the value from selectedOptions
        setSelectedOptions((prevOptions) =>
          prevOptions.filter((option) => option !== value)
        );
      }
  
      // Update the formData with 'category' field
      if (updateFormData) {
        updateFormData({ category: selectedOptions });
      }
    };
  
    return (
      <>
        <p className="flex px-3 justify-center mx-auto text-center max-w-lg border-b border-opacity-40 pb-2">
          EduCollabo Africa is our commitment to educational excellence. Reach out
          to us and discover how we're revolutionizing the way Africa learns and grows.
        </p>
        <div className="max-w-screen-xl p-6 mx-auto rounded-md shadow-md md:p-12">
          <div className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-4 font-medium text-white">
                What category below can you be classified under;
              </label>
  
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Student"
                  onChange={handleCheckboxChange}
                />
                Student
              </label>
  
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Educator"
                  onChange={handleCheckboxChange}
                />
                Educator
              </label>
  
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Institution"
                  onChange={handleCheckboxChange}
                />
                Institution
              </label>
  
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Philanthropist"
                  onChange={handleCheckboxChange}
                />
                Philanthropist
              </label>
  
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Investor"
                  onChange={handleCheckboxChange}
                />
                Investor
              </label>
  
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Others"
                  onChange={handleCheckboxChange}
                />
                Others
              </label>
            </div>
          </div>
        </div>
      </>
    );
  }

  export function Medtech({ updateFormData }) {
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleCheckboxChange = (e) => {
      const { value, checked } = e.target;
  
      if (checked) {
        // If checkbox is checked, add the value to selectedOptions
        setSelectedOptions((prevOptions) => [...prevOptions, value]);
      } else {
        // If checkbox is unchecked, remove the value from selectedOptions
        setSelectedOptions((prevOptions) =>
          prevOptions.filter((option) => option !== value)
        );
      }
  
      // Update the formData with 'category' field
      if (updateFormData) {
        updateFormData({ category: selectedOptions });
      }
    };
  
    return (
      <>
        <p className="flex px-3 justify-center mx-auto text-center max-w-lg border-b border-opacity-40 pb-2">
          Ingenious MedTech is your partner in healthcare innovation. Connect
          with us to explore the future of healthcare access and services.
        </p>
        <div className="max-w-screen-xl p-6 mx-auto rounded-md shadow-md md:p-12">
          <div className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-4 font-medium text-white">
                What category below can you be classified under;
              </label>
  
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Collaborator"
                  onChange={handleCheckboxChange}
                />
                Collaborator
              </label>
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Consultant"
                  onChange={handleCheckboxChange}
                />
                Consultant
              </label>
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Philanthropist"
                  onChange={handleCheckboxChange}
                />
                Philanthropist
              </label>
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Investor"
                  onChange={handleCheckboxChange}
                />
                Investor
              </label>
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Others"
                  onChange={handleCheckboxChange}
                />
                Others
              </label>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export function Agriwave({ updateFormData }) {
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleCheckboxChange = (e) => {
      const { value, checked } = e.target;
  
      if (checked) {
        // If checkbox is checked, add the value to selectedOptions
        setSelectedOptions((prevOptions) => [...prevOptions, value]);
      } else {
        // If checkbox is unchecked, remove the value from selectedOptions
        setSelectedOptions((prevOptions) =>
          prevOptions.filter((option) => option !== value)
        );
      }
  
      // Update the formData with 'category' field
      if (updateFormData) {
        updateFormData({ category: selectedOptions });
      }
    };
  
    return (
      <>
        <p className="flex px-3 justify-center mx-auto text-center max-w-lg border-b border-opacity-40 pb-2">
          Join the agricultural revolution with Ingenious Agriwave. Contact us
          to harness the power of technology for sustainable farming and food security.
        </p>
        <div className="max-w-screen-xl p-6 mx-auto rounded-md shadow-md md:p-12">
          <div className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-4 font-medium text-white">
                What category below do you belong to?
              </label>
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Farmer"
                  onChange={handleCheckboxChange}
                />
                Farmer
              </label>
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Partner"
                  onChange={handleCheckboxChange}
                />
                Partner/ Collaborator
              </label>
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Others"
                  onChange={handleCheckboxChange}
                />
                Others
              </label>
            </div>
          </div>
        </div>
      </>
    );
  }
  

  export function StudioEte({ updateFormData }) {
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleCheckboxChange = (e) => {
      const { value, checked } = e.target;
  
      if (checked) {
        // If checkbox is checked, add the value to selectedOptions
        setSelectedOptions((prevOptions) => [...prevOptions, value]);
      } else {
        // If checkbox is unchecked, remove the value from selectedOptions
        setSelectedOptions((prevOptions) =>
          prevOptions.filter((option) => option !== value)
        );
      }
  
      // Update the formData with 'category' field
      if (updateFormData) {
        updateFormData({ category: selectedOptions });
      }
    };
  
    return (
      <>
        <p className="flex px-3 justify-center mx-auto text-center max-w-lg border-b border-opacity-40 pb-2">
          We would love to hear from you and discuss the boundless
          possibilities that Studio Eté has to offer. Feel free to reach out
          to our dedicated team for any inquiries, collaborations, or creative
          ventures.
        </p>
        <div className="max-w-screen-xl p-6 mx-auto rounded-md shadow-md md:p-12">
          <div className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-4 font-medium text-white">
                What category below can you be classified under
              </label>
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Writer"
                  onChange={handleCheckboxChange}
                />
                Writer
              </label>
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Artist"
                  onChange={handleCheckboxChange}
                />
                Artist
              </label>
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Woodworker"
                  onChange={handleCheckboxChange}
                />
                Woodworker
              </label>
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Clay artist"
                  onChange={handleCheckboxChange}
                />
                Clay artist
              </label>
              <label className="inline-flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Others"
                  onChange={handleCheckboxChange}
                />
                Others
              </label>
            </div>
          </div>
        </div>
      </>
    );
  }
  

