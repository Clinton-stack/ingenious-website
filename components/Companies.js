import { Heading } from "@chakra-ui/react";
import React from "react";


function Companies() {
  return (
    <div className="bg-gradient-to-r px-10 pb-10">
        <div className="  text-center lg:pt-12 pt-6 whitespace-nowrap">
          <Heading
            className="  text-xl lg:text-2xl"
            color="#73D0FF"
            mb={["20px", "40px"]}
            textAlign="center"
          >
            Clients and Partners
          </Heading>
        </div>
        <div className="  w-full justify-evenly items-center grid grid-cols-2 md:grid-cols-4 gap-5">
          <img src="/pt1.png" alt="Partners" className="w-48 h-auto" />
          <img src="/pt5.png" alt="Partners" className="w-48 h-auto" />
          <img src="/pt4.png" alt="Partners" className="w-48 h-auto" />
          <img src="/pt3.png" alt="Partners" className="w-48 h-auto" />
          <img src="/pt2.png" alt="Partners" className="w-28 h-28" />
          <img src="/pt6.png" alt="Partners" className=" w-38 h-24" />
        </div>
    </div>
  );
}

export default Companies;
