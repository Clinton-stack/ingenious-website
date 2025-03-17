'use client'
import React from "react";
import { FaTimes } from "react-icons/fa";
const IngeniousPayment = ({ close }) => {
  return (
    <div
      onClick={close}
      className="bg-white w-[100%] relative  md:w-auto h-[100%] text-black py-10 md:px-9 px-2 rounded-2xl overflow-y-auto"
    >
      <button
        onClick={close}
        className="absolute md:top-10 top-3 text-2xl md:right-10 right-5 focus:outline-none"
      >
        <FaTimes />
      </button>
      <p className="font-bold md:text-4xl text-center text-xl mb-5 text-[#3968af]">
        {" "}
        Ingenious Payment
      </p>

      <ul>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2">Global Reach:</p>
          <p>
            IngeniousPayment enables you to conduct transactions in multiple
            currencies, including Dollar, Pounds, Euro, Chinese Yuan, and many
            more. Say goodbye to the limitations of traditional payment gateways
            and embrace the freedom to transact globally.
          </p>
        </li>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2">Bank Collaboration:</p>
          <p>
            Unlike conventional Nigerian payment gateways, IngeniousPayment has
            established partnerships with both foreign and local Nigerian banks.
            This strategic collaboration ensures secure and swift financial
            transactions, bridging the gap between international and domestic
            banking networks.
          </p>
        </li>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2">Fast and Efficient:</p>
          <p>
            Experience lightning-fast payments with IngeniousPayment. Our
            platform is optimized for speed, allowing you to make or receive
            payments in mere seconds, ensuring that your business remains agile
            and responsive to market demands.
          </p>
        </li>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2">Ease of Use:</p>
          <p>
            IngeniousPayment boasts a user-friendly interface that simplifies
            the payment process for both individuals and businesses. Our
            platform is intuitive, making it accessible to users of all levels
            of technical expertise.
          </p>
        </li>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2">Robust Security:</p>
          <p>
            We take the security of your transactions seriously.
            IngeniousPayment employs state-of-the-art security measures,
            including encryption and multi-factor authentication, to safeguard
            your financial data and give you peace of mind.
          </p>
        </li>
        <li>
          <p className="font-bold text-xl mb-2">AMS Integration:</p>
          <p>
            For businesses that utilize an Asset Management System (AMS),
            IngeniousPayment seamlessly integrates with your existing software.
            This integration streamlines financial management, allowing you to
            pay for asset maintenance, services, and more with ease.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default IngeniousPayment;
