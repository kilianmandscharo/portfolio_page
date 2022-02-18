import React from "react";
import {
    CIcon,
    CSSIcon,
    GitIcon,
    HTMLIcon,
    JSIcon,
    NextIcon,
    PythonIcon,
    ReactIcon,
    TailwindIcon,
    TSIcon,
} from "./Logos";
import Section from "./Section";

const Skills = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <Section name="Technologies">
            <div id="logo-grid" ref={ref}>
                <HTMLIcon />
                <CSSIcon />
                <JSIcon />
                <TSIcon />
                <ReactIcon />
                <NextIcon />
                <TailwindIcon />
                <PythonIcon />
                <CIcon />
                <GitIcon />
            </div>
        </Section>
    );
});

export default Skills;
