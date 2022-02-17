import Head from "next/head";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import useScroll from "../hooks/useScroll";

const Home = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [projectsYPosition, setProjectsYPosition] = useState(0);
    const scrollY = useScroll();

    const projectsRef = useRef(null);
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const container: any = containerRef.current;
        setWidth(container.offsetWidth);
        setHeight(container.offsetHeight);

        const projects: any = projectsRef.current;
        setProjectsYPosition(projects.offsetTop - 45);

        const handleResize = () => {
            const cr: any = containerRef.current;
            const pr: any = projectsRef.current;
            if (cr) {
                setWidth(cr.offsetWidth);
                setHeight(cr.offsetHeight);
            }
            if (pr) {
                setProjectsYPosition(pr.offsetTop - 45);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const makeCircle = () => {
        return `a 5,5 0 0,0 0,20 a 5,5 0 0,0 0,-20 a 5,5 0 0,0 0,20`;
    };

    const extraOffset =
        scrollY > 117 ? (scrollY > projectsYPosition - 30 ? 60 : 30) : 0;

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
                className="grid justify-center max-w-4xl min-w-[350px] relative mx-auto p-5 pt-8"
            >
                <header className="mb-8 z-10">
                    <Navbar />
                    <h1 className="text-5xl text-center">Hi, I'm Dominik</h1>
                </header>
                <div className="z-10">
                    <About />
                    <Projects ref={projectsRef} />
                </div>
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0"
                >
                    <path
                        d={`M ${
                            width / 22.352
                        } 34 ${makeCircle()} v 140 ${makeCircle()} V ${projectsYPosition} ${makeCircle()} v 300`}
                        stroke="limegreen"
                        strokeWidth="2"
                        fill="transparent"
                        strokeDasharray={height}
                        strokeDashoffset={height - 179 - scrollY - extraOffset}
                    />
                    <path
                        d={`M ${width / 1.12} 80 h -${
                            width / 1.275
                        } a 20,20 0 0,0 -20,20 v 94 ${makeCircle()} V ${projectsYPosition} ${makeCircle()} v 300`}
                        stroke="#FC79FF"
                        strokeWidth="2"
                        fill="transparent"
                        strokeDasharray={height}
                        strokeDashoffset={
                            height -
                            scrollY -
                            70.4159 -
                            width / 1.275 -
                            extraOffset
                        }
                    />
                    <path
                        d={`M ${
                            width / 1.05
                        } 100 v 30 a 20,20 0 0,1 -20,20 h -${
                            width / 1.285
                        } a 20,20 0 0,0 -20,20 v 24 ${makeCircle()} V ${projectsYPosition} ${makeCircle()} v 300`}
                        stroke="#8FF8FF"
                        strokeWidth="2"
                        fill="transparent"
                        strokeDasharray={height}
                        strokeDashoffset={
                            height -
                            scrollY -
                            61.4159 -
                            width / 1.285 -
                            extraOffset
                        }
                    />
                </svg>
            </div>
        </>
    );
};

export default Home;
