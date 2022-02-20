import Image from "next/image";
import { useState } from "react";
import ProjectLink from "./ProjectLink";

interface ProjectProps {
    name: string;
    img: string;
    description: string;
    highlighted: boolean;
    website?: string;
    github?: string;
}

const Project = ({
    name,
    img,
    highlighted,
    website,
    github,
    description,
}: ProjectProps) => {
    const [flip, setFlip] = useState(false);
    const [flipBack, setFlipBack] = useState(false);

    const handleClickFront = () => {
        if (flip) {
            return;
        }
        setFlip(true);
        setFlipBack(false);
    };
    const handleClickBack = () => {
        if (flipBack) {
            return;
        }
        setFlipBack(true);
        setFlip(false);
    };

    const animationsFront = () => {
        return `${
            flip ? "animate-flipOut pointer-events-none" : "animate-flipIn"
        } `;
    };

    const animationsBack = () => {
        return `${
            flip ? "animate-flipIn" : "animate-flipOut pointer-events-none"
        } `;
    };

    return (
        <div className="relative mx-auto max-w-[300px] max-h-[300px] shadow-lg">
            {/* Backside */}
            <div
                className={`flex flex-col absolute top-0 left-0 bottom-0 right-0 p-4 border-2 ${
                    highlighted
                        ? "bg-gray-800  border-gray-800"
                        : "bg-gray-800/50 border-gray-800/50"
                } hover:border-white/90 transition-colors ease-in rounded-md opacity-0 ${animationsBack()}`}
                onClick={handleClickBack}
            >
                <h3 className="text-xl sm:text-xl text-center my-2 text-red-300">
                    {name}
                </h3>
                <div className="text-base text-center mb-9">
                    ({description})
                </div>
                <div className="flex flex-col text-base gap-4 items-center justify-center">
                    {website && <ProjectLink name="website" link={website} />}
                    {github && <ProjectLink name="github" link={github} />}
                </div>
            </div>
            {/* Frontside */}
            <div
                className={`grid justify-center rounded-md transition-colors ease-in ${animationsFront()}`}
                onClick={handleClickFront}
            >
                <Image
                    src={img}
                    width="300"
                    height="300"
                    className="rounded-md sm:opacity-50 hover:opacity-90 transition-all ease-linear"
                    alt={`${name} project image`}
                />
            </div>
        </div>
    );
};

export default Project;
