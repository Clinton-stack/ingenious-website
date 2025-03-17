import React from "react";
import { FaTimes } from "react-icons/fa";

const ProductandSolution = ({ close }) => {
  return (
    <div
      onClick={close}
      className="bg-white w-[100%]  md:w-auto h-[100%] text-black py-10 md:px-9 px-2 rounded-2xl overflow-y-auto"
    >
      <button
        onClick={close}
        className="absolute md:top-10 top-3 text-2xl md:right-10 right-5 focus:outline-none"
      >
        <FaTimes /> 
      </button>
      <p className=" font-bold text-center md:text-2xl text-xl  text-[#3968af] ">
        Key Features and Benefits of AMS:
      </p>

      <ul>
        <li className="mb-6">
          <p className="font-bold text-xl mt-6 mb-2">Centralized Management:</p>
          <p>
            AMS provides a centralized platform that brings together all
            stakeholders involved in asset management. By fostering
            collaboration and eliminating silos, AMS ensures seamless
            communication and coordination across departments, leading to
            increased efficiency and productivity.
          </p>
        </li>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2">Tailored for Consumers:</p>
          <p>
            AMS goes beyond internal management by prioritizing the needs of
            asset users, such as occupants in an estate. With a dedicated
            consumer mobile application, AMS offers a one-stop solution for bill
            payments, information delivery, enhanced security features, and
            effective communication. This empowers consumers with a seamless and
            convenient experience while interacting with the assets they
            utilize.
          </p>
        </li>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2">Customized Asset Approach:</p>
          <p>
            AMS recognizes that every asset is unique and may require specific
            management strategies. Whether you manage an individual asset or a
            group of assets, AMS allows you to tailor your approach to meet the
            distinct requirements of each asset. This flexibility ensures
            optimal utilization and performance across your entire portfolio.
          </p>
        </li>
        <li className="mb-6">
          <p className="-bold text-center mb-4 md:text-2xl text-xl  text-[#3968af]">
            Experience the Power of AMS:
          </p>
          <p>
            Discover the game-changing advantages of Assets Management Service
            (AMS) and unlock the full potential of your assets. Say goodbye to
            the challenges of decentralized teams and embrace a streamlined,
            efficient, and customer-centric approach to asset management.
            Revolutionize the way you manage your assets with AMS today!
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ProductandSolution;
