import Head from "next/head";

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

            <div className="grid justify-center bg-green-700 max-w-4xl mx-auto p-4">
                <header className="mb-8">
                    <nav className="mb-8 text-white">
                        <ul className="flex flex-row justify-around">
                            <li className="hover:text-black transition-all ease-linear">
                                <a href="#content">About</a>
                            </li>
                            <li className="hover:text-black transition-all ease-linear">
                                <a href="#projects">Projects</a>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="text-5xl text-white text-center">
                        Hi, I'm Dominik
                    </h1>
                </header>
                <section id="about">
                    <div className="flex justify-around items-center">
                        <div className="h-1 w-3/12 bg-white" />
                        <h2 className="text-4xl text-white text-center mx-2">
                            About
                        </h2>
                        <div className="h-1 w-3/12 bg-white" />
                    </div>
                    <p>
                        My name is Dominik Heller. I like writing software with
                        a main interest in front-end web development.
                    </p>
                </section>
                <section id="projects">
                    <div className="flex justify-around items-center">
                        <div className="h-1 w-3/12 bg-white" />
                        <h2 className="text-4xl text-white text-center mx-2">
                            Projects
                        </h2>
                        <div className="h-1 w-3/12 bg-white" />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
