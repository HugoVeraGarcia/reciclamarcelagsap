import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    
    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1500}px`,
        ease: "power1.inOut",
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"  //same time
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<" //same time
      );
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors mt-20 lg:mt-20">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.number}
            className={`relative z-30 lg:w-[35vw] w-64 lg:h-[50vh] md:w-[63vw] md:h-[35vh] h-56 flex-none ${flavor.rotation}`}
          >
            <img
              src={`/images/pp${flavor.number}.png`}
              alt=""
              className="absolute bottom-0"
            />

            
            <h1>{flavor.number}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
