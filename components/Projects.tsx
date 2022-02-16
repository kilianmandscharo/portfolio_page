import React from "react";
import Section from "./Section";

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <Section name="Projects">
            <div ref={ref}>
                <p>Runner</p>
                <p>Wortspiel</p>
                <p>Visualizing Algorithms</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </Section>
    );
});

export default Projects;
