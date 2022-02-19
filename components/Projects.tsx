import React from "react";
import { SegmentProps } from "./About";
import Project from "./Project";
import Section from "./Section";

const Projects = React.forwardRef<HTMLDivElement, SegmentProps>(
    (props, ref) => {
        return (
            <Section highlighted={props.highlighted} name="Projects">
                <div ref={ref} className="projects-grid sm:px-10">
                    <Project
                        name="Visualizing Algorithms"
                        description="TypeScript, React"
                        img="/algorithms.png"
                        highlighted={props.highlighted}
                        website="https://visualize-algorithms.netlify.app/"
                        github="https://github.com/kilianmandscharo/visualize_algorithms"
                    />
                    <Project
                        name="Wortspiel"
                        description="TypeScript, React,  Next"
                        img="/wortspiel.png"
                        highlighted={props.highlighted}
                        website="https://wortspiel.netlify.app/"
                        github="https://github.com/kilianmandscharo/wortspiel"
                    />
                    <Project
                        name="Runner App"
                        description="TypeScript, React Native"
                        img="/runner.png"
                        highlighted={props.highlighted}
                        github="https://github.com/kilianmandscharo/running_app"
                    />
                    <Project
                        name="Darts Optimizer"
                        description="Python, Numpy, Matplotlib"
                        highlighted={props.highlighted}
                        img="/darts.png"
                        github="https://github.com/kilianmandscharo/darts_visualization"
                    />
                    <Project
                        name="Snake"
                        description="C, ncurses"
                        highlighted={props.highlighted}
                        img="/snake.png"
                        github="https://github.com/kilianmandscharo/snake"
                    />
                    <Project
                        name="Visualizing Algorithms 2"
                        description="Python, Tkinter"
                        highlighted={props.highlighted}
                        img="/algorithms2.png"
                        github="https://github.com/kilianmandscharo/algovis"
                    />
                </div>
            </Section>
        );
    }
);

export default Projects;
