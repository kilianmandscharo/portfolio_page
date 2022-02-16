import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import useDimensions from "../hooks/useDimensions";
import useScroll from "../hooks/useScroll";

const Home = () => {
    const containerRef = useRef(null);
    const [width, height] = useDimensions(containerRef);
    const scrollY = useScroll();

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
                className="grid justify-center max-w-4xl mx-auto p-4 pt-8"
            >
                <header className="mb-8">
                    <Navbar />
                    <h1 className="text-5xl text-center">Hi, I'm Dominik</h1>
                </header>
                <About />
                <Projects />
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0"
                >
                    <path
                        d={`M 13 30 v 160 a 5,5 0 0,0 0,20 a 5,5 0 0,0 0,-20 a 5,5 0 0,0 0,20 v 300`}
                        stroke="limegreen"
                        strokeWidth="2"
                        fill="transparent"
                        strokeDasharray={height}
                        strokeDashoffset={height - 150 - scrollY}
                    />
                    <path
                        d={`M 17 30 v 160 a 5,5 0 0,0 0,20 a 5,5 0 0,0 0,-20 a 5,5 0 0,0 0,20 v 300`}
                        stroke="#FC79FF"
                        strokeWidth="2"
                        fill="transparent"
                        strokeDasharray={height}
                        strokeDashoffset={height - 150 - scrollY}
                    />
                    <path
                        d={`M 21 30 v 160 a 5,5 0 0,0 0,20 a 5,5 0 0,0 0,-20 a 5,5 0 0,0 0,20 v 300`}
                        stroke="#8FF8FF"
                        strokeWidth="2"
                        fill="transparent"
                        strokeDasharray={height}
                        strokeDashoffset={height - 150 - scrollY}
                    />
                </svg>
            </div>
        </>
    );
};

export default Home;
