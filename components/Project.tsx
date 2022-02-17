import Image from "next/image";
import { useState } from "react";
import ProjectLink from "./ProjectLink";

interface ProjectProps {
    name: string;
    img: string;
    description: string;
    website?: string;
    github?: string;
}

const Project = ({ name, img, website, github, description }: ProjectProps) => {
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
        return `${flip ? "animate-flipOut" : ""} ${
            flipBack ? "animate-flipIn" : ""
        } ${flip ? "pointer-events-none" : ""}`;
    };

    const animationsBack = () => {
        return `${flip ? "animate-flipIn" : ""} ${
            flipBack ? "animate-flipOut" : ""
        } ${!flip ? "pointer-events-none" : ""}`;
    };

    return (
        <div className="max-w-sm">
            <h3 className="mb-2 text-xl sm:text-2xl text-center">{name}</h3>
            <div className="relative h-[300px] w-[300px] mx-auto">
                {/* Frontside */}
                <div
                    className={`grid justify-center rounded-lg hover:shadow-xl ${animationsFront()}`}
                    onClick={handleClickFront}
                >
                    <Image
                        src={img}
                        width="300"
                        height="300"
                        className="rounded-lg"
                    />
                </div>
                {/* Backside */}
                <div
                    className={`flex flex-col gap-4 items-center justify-center absolute top-0 left-0 bottom-0 right-0 opacity-1 bg-yellow-300 opacity-0 ${animationsBack()}`}
                    onClick={handleClickBack}
                >
                    {website && <ProjectLink name="website" link={website} />}
                    {github && <ProjectLink name="github" link={github} />}
                </div>
            </div>
            <p className="mt-4 mb-6 text-[16px] text-center sm:text-xl">
                {description}
            </p>
        </div>
    );
};

export default Project;
