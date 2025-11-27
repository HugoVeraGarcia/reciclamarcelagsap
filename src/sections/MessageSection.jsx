import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const MessageSection = () => {
    useGSAP(()=>{
        const firstMsgSplit = SplitText.create(".first-message",{
            type: "words",
        });
        const secondMsgSplit = SplitText.create(".second-message",{
            type: "words",
        });
        const paragraphSplit = SplitText.create(".message-content p",{
            type: "words, lines",
            linesClass: "paragraph-line"
        });

        gsap.to(firstMsgSplit.words,{
            color:"#faeade",
            ease:"power1.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".message-content",
                start: "top center",
                end: "30% center",
                scrub: true,
                //markers: true,
            }
        });
        gsap.to(secondMsgSplit.words,{
            color:"#faeade",
            ease:"power1.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".second-message",
                start: "top center",
                end: "bottom center",
                scrub: true,
                //markers: true,
            }
        });
        const revealTl = gsap.timeline({
            delay:0.5,
            scrollTrigger:{
                trigger: ".msg-txt-scroll",
                start: "top 50%",
                //markers: true,
            }
        });
        revealTl.to(".msg-txt-scroll",{
            duration:1,
            clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:"circ.inOut",
        });
        const paragraphtl = gsap.timeline({
            scrollTrigger:{
                trigger: ".message-content p",
                start: "top center",
                //markers: true,
                //scrub: true,
            }
        });
        paragraphtl.from(paragraphSplit.words,{
            yPercent:300,
            rotate:3,
            ease:"power1.inOut",
            //ease: "none",

            duration:1,
            stagger: 0.01,
        })
    });
  return (
    <section className="message-content">
        <div className="container mx-auto flex-center py-28 relative">
            <div className="w-full h-full">
                <div className="msg-wrapper">
                    <h1 className='first-message'>Reimagina el ciclo de vida y</h1>

                    <div style={{
                        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                    }} className="msg-txt-scroll">
                        <div className="bg-light-brown md:pb-5 pb-3 px-5">
                            <h2 className='text-red-brown'>Regenera</h2>
                        </div>
                    </div>
                    <h1 className="second-message">
                        el mañana con cada acción consciente
                    </h1>
                </div>
                
                
                <div className="flex-center md:mt-20 mt-10">
                    <div className="max-w-md px-10 flex-center overflow-hidden w-full px-10">
                    <p>
                        Despierta tu conciencia ecológica y nutre la esperanza del planeta. Cada pequeño residuo gestionado es un paso gigante hacia un legado verde y un futuro libre de contaminación.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MessageSection