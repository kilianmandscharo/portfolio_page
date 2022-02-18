interface ProjectLinkProps {
    name: string;
    link: string;
}

const ProjectLink = ({ name, link }: ProjectLinkProps) => {
    return (
        <a
            href={link}
            target="blank"
            className="border border-white hover:opacity-70 p-2 rounded-lg"
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            {name === "github" ? "Github" : "Website"}
        </a>
    );
};

export default ProjectLink;
