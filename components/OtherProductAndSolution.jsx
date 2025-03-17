import React from "react";

const OtherProductAndSolution = ({ close }) => {
  return (
    <div
      onClick={close}
      className="bg-white w-[100%]   md:w-[80%] h-[90%] text-black py-10 md:px-9 px-2 rounded-2xl overflow-y-auto"
    >
      <p className=" font-bold md:text-2xl text-xl mt-5">
        Other Products and Solutions
      </p>
      <ul>
        <li>
          <p className=" font-bold text-lg mt-3">
            Key Features and Benefits of AMS:
          </p>
          <p className=" font-semibold text-base">
            Bridging the Education Divide Empowering the Future of Africa
            Through Education.
          </p>
          In a time where quality education is a precious commodity, EduCollabo
          Africa emerges as our beacon of hope. This visionary platform connects
          students, educators, and institutions, transcending geographical
          boundaries to ensure access to world-class education. With Africa's
          economic challenges in mind, EduCollabo Africa offers affordable
          online learning solutions, scholarships, and a marketplace for
          educational resources. By collaborating with AMS, it streamlines asset
          management for educational institutions, ensuring that resources are
          optimally utilized. Invest in EduCollabo Africa and be a part of a
          brighter future for Africa.
        </li>
        <li>
          <p className=" font-bold text-lg mt-3">2.Ingenious MedTech:</p>
          <p className=" font-semibold text-base">
            Revolutionizing Healthcare Access Your Health, Our Innovation
          </p>
          As Nigeria and Africa grapple with healthcare disparities, Ingenious
          MedTech steps up to offer equitable healthcare access. Our
          telemedicine and healthtech ecosystem connects patients, healthcare
          providers, and pharmacies. With a focus on affordability and
          convenience, Ingenious MedTech ensures everyone can access quality
          healthcare, no matter where they are. Collaborating with
          IngeniousPayment, Ingenious MedTech offers secure payment solutions
          for medical services and prescriptions. Invest in Ingenious MedTech
          and be a part of a healthier Africa.
        </li>

        <p className=" font-bold text-lg mt-3">3. Ingenious AgriWave:</p>
        <li>
          Transforming Agriculture for Sustainable Growth Feeding the Future,
          Nurturing the Land With an eye on Africa's agricultural potential,
          Ingenious AgriWave reimagines the farming landscape. This innovative
          agtech solution empowers farmers with data-driven insights, weather
          forecasts, and market access, fostering sustainable agriculture. In a
          time when food security is paramount, Ingenious AgriWave collaborates
          with AMS to optimize asset management for farm equipment and
          infrastructure, ensuring efficient and productive farming operations.
          Invest in Ingenious AgriWave and be a part of a more sustainable
          Africa.
        </li>
      </ul>
    </div>
  );
};

export default OtherProductAndSolution;
