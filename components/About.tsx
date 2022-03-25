import React from "react";
import Section from "./Section";
import { react as AboutComponent } from "../content/pages/about.md";

export interface SegmentProps {
    highlighted: boolean;
}

const About = React.forwardRef<HTMLDivElement, SegmentProps>((props, ref) => {
    return (
        <Section name="About" highlighted={props.highlighted}>
            <div ref={ref} className="md:columns-2 gap-x-8 md:px-10">
                <AboutComponent />
                {/* <p className="pb-3">
                    My name is Dominik Heller. I like writing software with a
                    main interest in front-end web development.
                </p>
                <p className="pb-3">
                    During the second semester of my Media Studies master&apos;s
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
                    and theoretical, I earned a master&apos;s degree with a
                    thesis about learning machines, mostly focusing on the
                    history of Cybernetics and Deep Learning.
                </p>
                <p className="pb-3">
                    In this time and since then I have finished a few projects,
                    some of which I want to display on this page.
                </p> */}
            </div>
        </Section>
    );
});

export default About;
