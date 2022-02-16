import Image from "next/image";

interface ProjectProps {
    name: string;
    img: string;
    link: string;
    description: string;
}

const Project = ({ name, img, link, description }: ProjectProps) => {
    return (
        <div className="bg-green-300">
            <h3 className="mb-2 text-xl sm:text-2xl text-center">{name}</h3>
            <a href={link} target="blank" className="flex justify-center">
                <Image src={img} width="200" height="200" />
            </a>
            <p className="mt-4 mb-6 text-[16px] sm:text-xl">{description}</p>
        </div>
    );
};

export default Project;
