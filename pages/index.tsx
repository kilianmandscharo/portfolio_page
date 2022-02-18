import Head from "next/head";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import About from "../components/About";
import AnimatedLines from "../components/AnimatedLines";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import useScroll from "../hooks/useScroll";

const Home = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [projectsYPosition, setProjectsYPosition] = useState(0);
    const [skillsYPosition, setSkillsYPosition] = useState(0);
    const scrollY = useScroll();

    const containerRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);

    useLayoutEffect(() => {
        const container: any = containerRef.current;
        setWidth(container.offsetWidth);
        setHeight(container.offsetHeight);

        const projects: any = projectsRef.current;
        setProjectsYPosition(projects.offsetTop - 45);

        const skills: any = skillsRef.current;
        setSkillsYPosition(skills.offsetTop - 45);

        const handleResize = () => {
            const cr: any = containerRef.current;
            const pr: any = projectsRef.current;
            const sr: any = skillsRef.current;
            if (cr) {
                setWidth(cr.offsetWidth);
                setHeight(cr.offsetHeight);
            }
            if (pr) {
                setProjectsYPosition(pr.offsetTop - 45);
            }
            if (sr) {
                setSkillsYPosition(sr.offsetTop - 45);
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
                </div>
                <AnimatedLines
                    width={width}
                    height={height}
                    scrollY={scrollY}
                    projectsYPosition={projectsYPosition}
                    skillsYPosition={skillsYPosition}
                />
            </div>
        </>
    );
};

export default Home;
