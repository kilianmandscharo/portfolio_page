import Head from "next/head";
import Navbar from "../components/Navbar";
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
                <Section name="About">
                    <p>
                        My name is Dominik Heller. I like writing software with
                        a main interest in front-end web development.
                    </p>
                    <p>
                        During the second semester of my Media Studies master's
                        program at the University of Regensburg I learned the
                        basics of HTML and CSS. Simultaneously approaching
                        digital computers from a theoretical perspective,
                        learning about their fundamental workings, early history
                        and present as well as future potential in the form of
                        AI, kindled my interest in programming even more. Thus
                        it so happened, that in the following semesters I took
                        classes for programming in C and Python, for data
                        analysis and visualization, and taught myself JavaScript
                        and React. At the end of this period, and therefore once
                        again intertwining the practical and theoretical, I
                        earned a master's degree with a thesis about learning
                        machines, mostly focusing on the history of Cybernetics
                        and Deep Learning.
                    </p>
                    <p>
                        In this time and since then I have finished a few
                        projects, some of which I want to display on this page.
                    </p>
                </Section>
                <Section name="Projects">
                    <p>Runner</p>
                    <p>Wortspiel</p>
                    <p>Visualizing Algorithms</p>
                </Section>
            </div>
        </>
    );
};

export default Home;
