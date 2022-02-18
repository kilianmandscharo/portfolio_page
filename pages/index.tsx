import Head from "next/head";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import About from "../components/About";
import AnimatedLines from "../components/AnimatedLines";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import useScroll from "../hooks/useScroll";

const ITEM_OFFSET = 62;

const Home = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [projectsYPosition, setProjectsYPosition] = useState(0);
    const [skillsYPosition, setSkillsYPosition] = useState(0);
    const [contactYPosition, setContactYPosition] = useState(0);
    const scrollY = useScroll();

    const containerRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

    useLayoutEffect(() => {
        const container: any = containerRef.current;
        setWidth(container.offsetWidth);
        setHeight(container.offsetHeight);

        const projects: any = projectsRef.current;
        setProjectsYPosition(projects.offsetTop - ITEM_OFFSET);

        const skills: any = skillsRef.current;
        setSkillsYPosition(skills.offsetTop - ITEM_OFFSET);

        const contact: any = contactRef.current;
        setContactYPosition(contact.offsetTop - ITEM_OFFSET);

        const handleResize = () => {
            const cRef: any = containerRef.current;
            const pRef: any = projectsRef.current;
            const sRef: any = skillsRef.current;
            const coRef: any = contactRef.current;
            if (cRef) {
                setWidth(cRef.offsetWidth);
                setHeight(cRef.offsetHeight);
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
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
                className="grid justify-center max-w-5xl min-w-[350px] relative mx-auto p-5 pt-8 pl-7 bg-neutral-900 text-white/90"
            >
                <header className="mb-8 z-10">
                    <Navbar />
                    <h1 className="text-5xl text-center">Hi, I'm Dominik</h1>
                </header>
                <div className="z-10">
                    <About />
                    <Projects ref={projectsRef} />
                    <Skills ref={skillsRef} />
                    <Contact ref={contactRef} />
                </div>
                <AnimatedLines
                    width={width}
                    height={height}
                    scrollY={scrollY}
                    projectsYPosition={projectsYPosition}
                    skillsYPosition={skillsYPosition}
                    contactYPosition={contactYPosition}
                />
            </div>
        </>
    );
};

export default Home;
