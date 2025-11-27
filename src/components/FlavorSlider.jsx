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
    // Creamos un contexto de MatchMedia
    let mm = gsap.matchMedia();

    // ------------------------------------------------
    // 1. LÓGICA SOLO PARA ESCRITORIO (min-width: 1024px)
    // ------------------------------------------------
    mm.add("(min-width: 1024px)", () => {
      const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1000}px`, // Ajusté un poco el valor
          scrub: true,
          pin: true,
          // markers: true, // Descomenta si necesitas depurar
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1000}px`,
        ease: "none", // Importante: "none" para que el scroll se sienta natural
      });

      // Animaciones de texto (Solo en escritorio)
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top top",
          end: "bottom 80%",
          scrub: true,
        },
      });

      titleTl
        .to(".first-text-split", { xPercent: -30, ease: "power1.inOut" })
        .to(".flavor-text-scroll", { xPercent: -22, ease: "power1.inOut" }, "<")
        .to(".second-text-split", { xPercent: -10, ease: "power1.inOut" }, "<");
    });

    // ------------------------------------------------
    // 2. LÓGICA PARA MÓVIL/TABLET (Opcional)
    // ------------------------------------------------
    mm.add("(max-width: 1023px)", () => {
      // Aquí puedes poner animaciones simples para móvil si quieres
      // Por ejemplo, que aparezcan con fade-in al hacer scroll
      /*
      gsap.from(".slider-wrapper img", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        scrollTrigger: {
           trigger: ".flavors",
           start: "top 80%"
        }
      });
      */
    });

  }, { scope: sliderRef }); // Scope para mejor limpieza

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
            <h2>{flavor.number}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
