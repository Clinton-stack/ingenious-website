import React from "react";
import { FaTimes } from "react-icons/fa";
const IngeniousStudio = ({ close }) => {
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
        Key Components
      </p>

      <ul>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2">Virtual Studio Spaces:</p>
          <p>
            Leverage cutting-edge technology to offer personalized virtual
            studios for artists, equipped with digital tools tailored to each
            medium.
          </p>
        </li>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2">Interactive Workshops:</p>
          <p>
            - Host live, interactive workshops conducted by industry-leading
            artists and writers.
          </p>
          <p>
            - Participants engage in real-time discussions, learn new
            techniques, and draw inspiration from a diverse global community.
          </p>
        </li>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2">Collaborative Projects:</p>
          <p>
            - Facilitate cross-disciplinary collaboration with projects that
            unite artists, writers, and craftsmen.
          </p>
          <p>
            - Studio Eté becomes a hub for interdisciplinary creativity,
            yielding unique and innovative artworks.
          </p>
        </li>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2"> Ingenious Gallery:</p>
          <p>
            - Showcase and trade finished artworks in the Ingenious Gallery, an
            integrated online marketplace.
          </p>
          <p>
            - Artists gain exposure to a global audience, while enthusiasts
            discover and acquire unique pieces.
          </p>
        </li>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2">
            AI-Powered Writing Assistance:
          </p>
          <p>
            - Integrate AI-driven tools for writers in copywriting,
            scriptwriting, and creative writing.
          </p>
          <p>
            - Enhance writing skills, generate creative prompts, and provide
            feedback for continual improvement.
          </p>
        </li>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2">
            Digital Woodworking and Clay Modeling:
          </p>
          <p>
            - Incorporate virtual tools simulating real-world woodworking and
            clay modeling techniques.
          </p>
          <p>
            - Artists bring their creations to life digitally before embarking
            on physical projects.
          </p>
        </li>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2">Community and Social Hub:</p>
          <p>
            - Establish a vibrant community where artists, writers, and
            craftsmen connect, share ideas, and collaborate.
          </p>
          <p>
            - Host events, challenges, and contests to foster active
            participation.
          </p>
        </li>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2">Blockchain for Authenticity:</p>
          <p>
            - Implement blockchain technology to ensure the authenticity and
            provenance of digital and physical artworks.
          </p>
          <p>
            - Buyers trace the origin and ownership history of each piece
            securely.
          </p>
        </li>
      </ul>
      <p className="font-bold md:text-4xl text-center text-xl mb-5 text-[#3968af]">
        {" "}
        Why Studio Eté?
      </p>

      <ul>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2">Global Accessibility</p>
          <p>
            Eliminate geographical barriers, enabling global collaboration and
            exposure for artists.
          </p>
        </li>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2">Technological Empowerment:</p>
          <p>
            Harness Ingenious Technology to enhance creativity, providing
            cutting-edge tools and fostering a dynamic artistic community.
          </p>
        </li>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2">Monetization Opportunities:</p>
          <p>
            Empower artists to monetize their creations through virtual sales,
            workshops, and collaborative projects.
          </p>
        </li>
        <li className="mb-6">
          <p className="font-bold text-xl mb-2">Innovation Ecosystem:</p>
          <p>
            Forge an innovation hub where technology and artistic expression
            intersect, driving the evolution of new creative forms.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default IngeniousStudio;
