import React from "react";
import Section from "./Section";

const About = () => {
    return (
        <Section name="About">
            <div className="sm:columns-2 gap-x-8">
                <p>
                    My name is Dominik Heller. I like writing software with a
                    main interest in front-end web development.
                </p>
                <p>
                    During the second semester of my Media Studies master's
                    program at the University of Regensburg I learned the basics
                    of HTML and CSS. Simultaneously approaching digital
                    computers from a theoretical perspective, learning about
                    their fundamental workings, early history and present as
                    well as future potential in the form of AI, kindled my
                    interest in programming even more. Thus it so happened, that
                    in the following semesters I took classes for programming in
                    C and Python, for data analysis and visualization, and
                    taught myself JavaScript and React. At the end of this
                    period, and therefore once again intertwining the practical
                    and theoretical, I earned a master's degree with a thesis
                    about learning machines, mostly focusing on the history of
                    Cybernetics and Deep Learning.
                </p>
                <p>
                    In this time and since then I have finished a few projects,
                    some of which I want to display on this page.
                </p>
            </div>
        </Section>
    );
};

export default About;
