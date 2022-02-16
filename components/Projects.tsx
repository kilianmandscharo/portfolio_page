import React from "react";
import Project from "./Project";
import Section from "./Section";

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <Section name="Projects">
            <div ref={ref}>
                <Project
                    name="Visualizing Algorithms"
                    description="A website for visualizing different algorithms, from pathfinding and sorting algorithms to the Game of Life and solving Sudokus with backtracking. Made with React and Typescript."
                    img="/algorithms.png"
                    link="https://visualize-algorithms.netlify.app/"
                />
                <Project
                    name="Wortspiel"
                    description="A word game based on the popular game WORDLE, but with German words. A new word is playable each day. Made with React, TypeScript and Next.js"
                    img="/wortspiel.png"
                    link="https://wortspiel.netlify.app/"
                />
                <Project
                    name="Runner App"
                    description="An app to record running activities. Runs can be visualized individually concerning altitude, speed and distance, or all at once sorted by date. Runs also can be exported as GPX or JSON. See the repository's readme for more screenshots. Made with React Native."
                    img="/runner.png"
                    link="https://github.com/kilianmandscharo/running_app"
                />
                <Project
                    name="Darts Optimizer"
                    description="A first try at calculating the optimal spot to aim for on a dart board, given a certain distribution radius. Made with Python, Numpy and Matplotlib."
                    img="/darts.png"
                    link="https://github.com/kilianmandscharo/darts_visualization"
                />
            </div>
        </Section>
    );
});

export default Projects;
