import { useContext } from "react";
import { ThemeContext } from "../pages";

interface ProjectLinkProps {
    name: string;
    link: string;
}

const ProjectLink = ({ name, link }: ProjectLinkProps) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <a
            href={link}
            target="blank"
            className="border border-white/90 hover:opacity-70 p-2 rounded-lg text-white/90"
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            {name === "github" ? "Github" : "Website"}
        </a>
    );
};

export default ProjectLink;
