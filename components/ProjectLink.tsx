interface ProjectLinkProps {
    name: string;
    link: string;
}

const ProjectLink = ({ name, link }: ProjectLinkProps) => {
    return (
        <a
            href={link}
            target="blank"
            className="hover:border-b border-black"
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            {name === "github" ? "Github" : "Website"}
        </a>
    );
};

export default ProjectLink;
