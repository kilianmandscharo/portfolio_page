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

const Skills = () => {
    return (
        <Section name="Skills">
            <div id="logo-grid">
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
};

export default Skills;
