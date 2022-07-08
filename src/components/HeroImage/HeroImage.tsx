import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { HeroImageProps } from "./types";
import "./HeroImage.scss";
import Logo from "../../assets/images/logo.png";

export const HeroImage: React.FC<HeroImageProps> = () => {
  const particlesInit = async (main: any) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <section className="hero-container">
      <h1>Custom Website Creation</h1>
      <p>The online presence your business deserves</p>
      <div className="particle-container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            fpsLimit: 60,
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
              },
              shape: {
                type: ["circle"],
                stroke: {
                  width: 0,
                  color: "#fff"
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 1,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 8,
                random: true,
                anim: {
                  enable: false,
                  speed: 2,
                  size_min: 10,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#808080",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab"
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 140,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }}
        />

        <img className="logo" src={Logo} alt="" />
      </div>
    </section>
  );
};
