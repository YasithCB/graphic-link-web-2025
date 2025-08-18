import React, { useState, useEffect, useCallback, memo } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'


// Constants
const TYPING_SPEED = 100;
const ERASING_SPEED = 30;
const PAUSE_DURATION = 2000;
const WORDS = ["5Year+ Experience in Graphic Designing", "2Year+ Experience in Software"];

const Home = () => {
    const [text, setText] = useState("")
    const [isTyping, setIsTyping] = useState(true)
    const [wordIndex, setWordIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    // Optimize AOS initialization
    useEffect(() => {
        const initAOS = () => {
            AOS.init({
                once: true,
                offset: 10,

            });
        };

        initAOS();
        window.addEventListener('resize', initAOS);
        return () => window.removeEventListener('resize', initAOS);
    }, []);

    useEffect(() => {
        setIsLoaded(true);
        return () => setIsLoaded(false);
    }, []);

    // Optimize typing effect
    const handleTyping = useCallback(() => {
        if (isTyping) {
            if (charIndex < WORDS[wordIndex].length) {
                setText(prev => prev + WORDS[wordIndex][charIndex]);
                setCharIndex(prev => prev + 1);
            } else {
                setTimeout(() => setIsTyping(false), PAUSE_DURATION);
            }
        } else {
            if (charIndex > 0) {
                setText(prev => prev.slice(0, -1));
                setCharIndex(prev => prev - 1);
            } else {
                setWordIndex(prev => (prev + 1) % WORDS.length);
                setIsTyping(true);
            }
        }
    }, [charIndex, isTyping, wordIndex]);

    useEffect(() => {
        const timeout = setTimeout(
            handleTyping,
            isTyping ? TYPING_SPEED : ERASING_SPEED
        );
        return () => clearTimeout(timeout);
    }, [handleTyping]);

    return (
        <>
            <div className="col-md-12 portfolio-wrap">
                <div className="row no-gutters align-items-center">

                    <div className="col-md-6 img js-fullheight d-flex align-items-center justify-content-center"
                         style="background-image: url(../../images/work-1.jpg);"></div>


                    <div className="col-md-6">
                        {/*3d robot*/}
                        <spline-viewer className="robot-3d"
                                       url="https://prod.spline.design/U9T-eKQSg7iiS1iZ/scene.splinecode"></spline-viewer>

                        <div className="main-text-container pt-5 mt-1 text pl-0 px-lg-5 pl-md-4 ftco-animate">
                            <div className="px-4 px-lg-4">
                                <div className="desc">
                                    <div className="top">
                                        <h4 className="mb-2">
                                            We Design. We Print. We Advertise. <br/> Your Brand, Our Creativity.
                                        </h4>
                                    </div>
                                    <div className="absolute">
                                        <p>Creative UAE-based graphics and advertising company delivering impactful
                                            designs, branding, printing, and marketing solutions to help businesses
                                            stand out.</p>
                                    </div>
                                    <p><a href="../../single.html" className="custom-btn">Explore Our Services</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Home);