import React from "react";
import { SegmentProps } from "./About";
import Project from "./Project";
import Section from "./Section";

const Projects = React.forwardRef<HTMLDivElement, SegmentProps>(
    (props, ref) => {
        return (
            <Section highlighted={props.highlighted} name="Projects">
                <div ref={ref} className="projects-grid md:px-10">
                    <Project
                        name="Visualizing Algorithms"
                        description="TypeScript, React"
                        img="/algorithms.png"
                        website="https://visualize-algorithms.netlify.app/"
                        github="https://github.com/kilianmandscharo/visualize_algorithms"
                    />
                    <Project
                        name="Wortspiel"
                        description="TypeScript, React, Next"
                        img="/wortspiel.png"
                        website="https://wortspiel.netlify.app/"
                        github="https://github.com/kilianmandscharo/wortspiel"
                    />
                    <Project
                        name="Musikgym"
                        description="TypeScript, React, Next"
                        img="/notes.png"
                        website="https://musikgym.netlify.app/"
                        github="https://github.com/kilianmandscharo/music_training"
                    />
                    <Project
                        name="Runner App"
                        description="TypeScript, React Native"
                        img="/runner.png"
                        github="https://github.com/kilianmandscharo/running_app"
                    />
                    <Project
                        name="Darts Optimizer"
                        description="Python, Numpy, Matplotlib"
                        img="/darts.png"
                        github="https://github.com/kilianmandscharo/darts_visualization"
                    />
                    <Project
                        name="Snake"
                        description="C, ncurses"
                        img="/snake.png"
                        github="https://github.com/kilianmandscharo/snake"
                    />
                    <Project
                        name="Visualizing Algorithms 2"
                        description="Python, Tkinter"
                        img="/algorithms2.png"
                        github="https://github.com/kilianmandscharo/algovis"
                    />
                </div>
            </Section>
        );
    }
);

export default Projects;
