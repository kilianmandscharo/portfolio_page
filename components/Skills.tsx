import React from "react";
import { SegmentProps } from "./About";
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

const Skills = React.forwardRef<HTMLDivElement, SegmentProps>((props, ref) => {
    return (
        <Section highlighted={props.highlighted} name="Technologies">
            <div className="icon-grid sm:px-10" ref={ref}>
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
