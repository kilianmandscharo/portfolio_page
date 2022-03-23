import Head from "next/head";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import About from "../components/About";
import AnimatedLines from "../components/AnimatedLines";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ThemeSwitch from "../components/ThemeSwitch";
import useScroll from "../hooks/useScroll";
import useWindowSize from "../hooks/useWindowSize";

const ITEM_OFFSET = 66;

type Theme = "dark" | "light";
type ThemeContext = { theme: Theme; toggleTheme: () => void };
export const ThemeContext = React.createContext<ThemeContext>(
    {} as ThemeContext
);

export default function Home() {
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

    const [_, windowHeight] = useWindowSize();
    const bottomReached = scrollY + windowHeight >= height - 10;

    const [theme, setTheme] = useState<Theme>("dark");
    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    useEffect(() => {
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
        setTimeout(() => {
            updateDimensions();
        }, 500);
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
                <title>Dominik&apos;s Projects</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta charSet="utf-8" />
                <meta name="author" content="Dominik Heller" />
                <meta
                    name="description"
                    content="A display of my projects and a little bit about me."
                />
                <meta
                    name="keywords"
                    content="portfolio, front-end, programming"
                />
                <link rel="shortcut icon" href="favicon.ico" />
            </Head>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div
                    className={`w-full h-full ${
                        theme === "dark" ? "bg-gray-900" : "bg-white"
                    }`}
                >
                    <div
                        ref={containerRef}
                        className={`grid justify-center max-w-6xl min-w-[350px] relative mx-auto p-5 pt-8 pl-8 font-normal ${
                            theme === "dark"
                                ? "bg-gray-900 text-white/90"
                                : "bg-white text-gray-900"
                        }`}
                    >
                        <header className="flex justify-center items-center flex-col mb-9 z-10">
                            <ThemeSwitch />
                            <Navbar />
                            <h1 className="text-5xl text-center font-header md:text-6xl mt-6 mb-[-2rem] md:mb-[-1rem]">
                                Dominik&apos;s Projects
                            </h1>
                        </header>
                        <div className="z-10">
                            <About
                                highlighted={aboutHighlighted()}
                                ref={aboutRef}
                            />
                            <Projects
                                highlighted={projectsHighlighted()}
                                ref={projectsRef}
                            />
                            <Skills
                                highlighted={skillsHighlighted()}
                                ref={skillsRef}
                            />
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
                </div>
            </ThemeContext.Provider>
        </>
    );
}
