'use client'
import { ParticlesConfig } from "./ParticleConfig";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particlebg = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div className="z-[-99999999999999]">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesConfig}
      />
    </div>
  );
};

export default Particlebg;
