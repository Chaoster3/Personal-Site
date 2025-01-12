import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const AppParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      className='z-0'
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: true,
        background: {
          color: {
            value: "#191616"
          }
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
               mode: "push"
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true
          },
          modes: {
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 50,
              factor: 2,
            }
          }
        },
        particles: {
          color: {
            value: '#437b7b'
          },
        //   00AA95
        // #437b7b
        //229ECB
        //479292
          links: {
            color: '#418787',
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 0.175,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 100
            },
            value: 20
          },
          opacity: {
            value: 0.3
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 0, max: 0 }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default AppParticles;