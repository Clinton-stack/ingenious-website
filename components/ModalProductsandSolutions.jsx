import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export function AmsModal({ isOpen, onClose }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay
          bg="rgba(115, 208, 255, 0.3)"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent bg="#0E315D">
          <ModalHeader textAlign="center">
            Key Features and Benefits of AMS:
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p className="pt-3">
              <b> 1. Centralized Management:</b> AMS provides a centralized
              platform that brings together all stakeholders involved in asset
              management. By fostering collaboration and eliminating silos, AMS
              ensures seamless communication and coordination across
              departments, leading to increased efficiency and productivity.
            </p>
            <p className="pt-3">
              <b>2. Tailored for Consumers:</b> AMS goes beyond internal
              management by prioritizing the needs of asset users, such as
              occupants in an estate. With a dedicated consumer mobile
              application, AMS offers a one-stop solution for bill payments,
              information delivery, enhanced security features, and effective
              communication. This empowers consumers with a seamless and
              convenient experience while interacting with the assets they
              utilize.
            </p>
            <p className="pt-3">
              <b>3. Customized Asset Approach: </b>AMS recognizes that every
              asset is unique and may require specific management strategies.
              Whether you manage an individual asset or a group of assets, AMS
              allows you to tailor your approach to meet the distinct
              requirements of each asset. This flexibility ensures optimal
              utilization and performance across your entire portfolio.
            </p>
            <p className="pt-3">
              <b> Experience the Power of AMS:</b> Discover the game-changing
              advantages of Assets Management Service (AMS) and unlock the full
              potential of your assets. Say goodbye to the challenges of
              decentralized teams and embrace a streamlined, efficient, and
              customer-centric approach to asset management. Revolutionize the
              way you manage your assets with AMS today!
            </p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export function IngeniousPaymentModal({ isOpen, onClose }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay
          bg="rgba(115, 208, 255, 0.3)"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent bg="#0E315D">
          <ModalHeader textAlign="center"> Why IngeniousPayment?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p className="pt-3">
              <b>Global Reach: </b> IngeniousPayment enables you to conduct
              transactions in multiple currencies, including Dollar, Pounds,
              Euro, Chinese Yuan, and many more. Say goodbye to the limitations
              of traditional payment gateways and embrace the freedom to
              transact globally.
            </p>
            <p className="pt-3">
              <b> Bank Collaboration:</b> Unlike conventional Nigerian payment
              gateways, IngeniousPayment has established partnerships with both
              foreign and local Nigerian banks. This strategic collaboration
              ensures secure and swift financial transactions, bridging the gap
              between international and domestic banking networks.
            </p>
            <p className="pt-3">
              <b> Fast and Efficient:</b> Experience lightning-fast payments
              with IngeniousPayment. Our platform is optimized for speed,
              allowing you to make or receive payments in mere seconds, ensuring
              that your business remains agile and responsive to market demands.
            </p>
            <p className="pt-3">
              <b>Ease of Use:</b> IngeniousPayment boasts a user-friendly
              interface that simplifies the payment process for both individuals
              and businesses. Our platform is intuitive, making it accessible to
              users of all levels of technical expertise.
            </p>
            <p className="pt-3">
              <b>Robust Security:</b> We take the security of your transactions
              seriously. IngeniousPayment employs state-of-the-art security
              measures, including encryption and multi-factor authentication, to
              safeguard your financial data and give you peace of mind.{" "}
            </p>
            <p className="pt-3">
              <b>AMS Integration:</b> Forbusinesses that utilize an Asset
              Management System (AMS), IngeniousPayment seamlessly integrates
              with your existing software. This integration streamlines
              financial management, allowing you to pay for asset maintenance,
              services, and more with ease.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export function StudioEte({ isOpen, onClose }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay
          bg="rgba(115, 208, 255, 0.3)"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent bg="#0E315D">
          <ModalHeader textAlign="center"> Key Components:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p className="pt-3">
              <b>Virtual Studio Spaces: </b> Leverage cutting-edge technology to
              offer personalized virtual studios for artists, equipped with
              digital tools tailored to each medium.
            </p>
            <p className="pt-3">
              <b>Interactive Workshops: </b> Host live, interactive workshops
              conducted by industry-leading artists and writers.teracting with
              the assets they utilize.
              <br />
              Participants engage in real-time discussions, learn new
              techniques, and draw inspiration from a diverse global community.
            </p>
            <p className="pt-3">
              <b>Collaborative Projects: </b> Facilitate cross-disciplinary
              collaboration with projects that unite artists, writers, and
              craftsmen.
              <br />
              Studio Eté becomes a hub for interdisciplinary creativity,
              yielding unique and innovative artworks.
            </p>
            <p className="pt-3">
              <b> Ingenious Gallery: </b>
              Showcase and trade finished artworks in the Ingenious Gallery, an
              integrated online marketplace.
              <br />
              Artists gain exposure to a global audience, while enthusiasts
              discover and acquire unique pieces.
            </p>

            <p className="pt-3">
              <b> AI-Powered Writing Assistance: </b>
              Integrate AI-driven tools for writers in copywriting,
              scriptwriting, and creative writing. <br />
              Enhance writing skills, generate creative prompts, and provide
              feedback for continual improvement.
            </p>
            <p className="pt-3">
              <b> Digital Woodworking and Clay Modeling: </b>
              Incorporate virtual tools simulating real-world woodworking and
              clay modeling techniques. <br />
              Artists bring their creations to life digitally before embarking
              on physical projects.
            </p>
            <p className="pt-3">
              <b> Community and Social Hub: </b>
              Establish a vibrant community where artists, writers, and
              craftsmen connect, share ideas, and collaborate. <br />
              Host events, challenges, and contests to foster active
              participation.
            </p>
            <p className="pt-3">
              <b> Blockchain for Authenticity: </b>
              Implement blockchain technology to ensure the authenticity and
              provenance of digital and physical artworks. <br />
              Buyers trace the origin and ownership history of each piece
              securely.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export function Iplug({ isOpen, onClose }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay
          bg="rgba(115, 208, 255, 0.3)"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent bg="#0E315D">
          <ModalHeader textAlign="center">
            Why Choose Ingenious Plug?:
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p className="pt-3">
              <b>Verified & Rated Professionals: </b> Easily browse, select, and
              hire top-rated service providers based on verified reviews, work
              history, and comprehensive portfolios.
            </p>
            <p className="pt-3">
              <b>Secure & Seamless Payments: </b> With the power of Ingenious
              Pay (IPay), transactions are swift, secure, and hassle-free.
              Escrow functionalities ensure that funds are only released upon
              service completion, reducing risks for both parties.
            </p>
            <p className="pt-3">
              <b> Diverse Service Coverage: </b> From technical services like
              software development, DevOps, cloud solutions, and data analysis
              to essential hands-on skills like auto repairs, home maintenance,
              and cleaning, IPlug caters to a wide range of professional needs.
            </p>
            <p className="pt-3">
              <b> Gamification & Reward System: </b>
              Users earn points and rewards through a gamified experience,
              enhancing engagement and incentivizing excellence among service
              providers and requesters alike.
            </p>

            <p className="pt-3">
              <b> Trust & Discretion: </b>
              While Ingenious Plug fosters transparency and security, users
              maintain full discretion in their engagements, ensuring a platform
              built on trust and mutual respect.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
