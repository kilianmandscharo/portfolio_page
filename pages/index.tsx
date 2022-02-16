import Head from "next/head";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Section from "../components/Section";

const Home = () => {
    return (
        <>
            <Head>
                <title>Dominik Heller</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className="grid justify-center bg-green-700 max-w-4xl mx-auto p-4 pt-8">
                <header className="mb-8">
                    <Navbar />
                    <h1 className="text-5xl text-white text-center">
                        Hi, I'm Dominik
                    </h1>
                </header>
                <About />
                <Projects />
            </div>
        </>
    );
};

export default Home;
