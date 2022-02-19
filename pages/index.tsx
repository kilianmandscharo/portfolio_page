import Head from "next/head";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import About from "../components/About";
import AnimatedLines from "../components/AnimatedLines";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import useScroll from "../hooks/useScroll";
import useWindowSize from "../hooks/useWindowSize";

const ITEM_OFFSET = 60;

const Home = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [aboutYPosition, setAboutYPosition] = useState(0);
    const [projectsYPosition, setProjectsYPosition] = useState(0);
    const [skillsYPosition, setSkillsYPosition] = useState(0);
    const [contactYPosition, setContactYPosition] = useState(0);
    const scrollY = useScroll();

    const containerRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

    const [windowWidth, windowHeight] = useWindowSize();
    const bottomReached = scrollY + windowHeight >= height - 10;
    console.log(windowHeight + scrollY, height);

    useLayoutEffect(() => {
        const updateDimensions = () => {
            const cRef: any = containerRef.current;
            const aRef: any = aboutRef.current;
            const pRef: any = projectsRef.current;
            const sRef: any = skillsRef.current;
            const coRef: any = contactRef.current;
            if (cRef) {
                setWidth(cRef.offsetWidth);
                setHeight(cRef.offsetHeight);
            }
            if (aRef) {
                setAboutYPosition(aRef.offsetTop - ITEM_OFFSET);
            }
            if (pRef) {
                setProjectsYPosition(pRef.offsetTop - ITEM_OFFSET);
            }
            if (sRef) {
                setSkillsYPosition(sRef.offsetTop - ITEM_OFFSET);
            }
            if (coRef) {
                setContactYPosition(coRef.offsetTop - ITEM_OFFSET);
            }
        };
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    const aboutHighlighted = () => {
        return scrollY >= 0 && scrollY < projectsYPosition - 430;
    };

    const projectsHighlighted = () => {
        if (bottomReached) {
            return false;
        } else {
            return (
                scrollY >= projectsYPosition - 430 &&
                scrollY < skillsYPosition - 390
            );
        }
    };

    const skillsHighlighted = () => {
        if (bottomReached) {
            return false;
        } else {
            return (
                scrollY >= skillsYPosition - 390 &&
                scrollY < contactYPosition - 355
            );
        }
    };

    const contactHighlighted = () => {
        if (bottomReached) {
            return true;
        } else {
            return scrollY >= contactYPosition - 355;
        }
    };

    return (
        <>
            <Head>
                <title>Dominik Heller</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div
                ref={containerRef}
                className="grid justify-center max-w-5xl min-w-[350px] relative mx-auto p-5 pt-8 pl-12 bg-neutral-900 text-white/90 font-normal"
            >
                <header className="mb-9 z-10">
                    <Navbar />
                    <h1 className="text-4xl pt-2 text-center font-header sm:text-6xl sm:pt-0">
                        Hi, I'm Dominik
                    </h1>
                </header>
                <div className="z-10">
                    <About highlighted={aboutHighlighted()} ref={aboutRef} />
                    <Projects
                        highlighted={projectsHighlighted()}
                        ref={projectsRef}
                    />
                    <Skills highlighted={skillsHighlighted()} ref={skillsRef} />
                    <Contact
                        highlighted={contactHighlighted()}
                        ref={contactRef}
                    />
                </div>
                <AnimatedLines
                    width={width}
                    height={height}
                    scrollY={scrollY}
                    aboutYPosition={aboutYPosition}
                    projectsYPosition={projectsYPosition}
                    skillsYPosition={skillsYPosition}
                    contactYPosition={contactYPosition}
                    bottomReached={bottomReached}
                />
            </div>
        </>
    );
};

export default Home;
