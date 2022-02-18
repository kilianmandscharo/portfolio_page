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
        <div className="max-w-sm bg-neutral-800 p-4 mb-4 sm:mb-0 rounded-lg">
            <div className="relative  mx-auto mb-8 max-w-[300px] max-h-[300px]">
                {/* Backside */}
                <div
                    className={`flex flex-col justify-center absolute top-0 left-0 bottom-0 right-0 bg-indigo-800 border-2 border-indigo-800 hover:border-white/90 transition-all ease-in rounded-md opacity-0 ${animationsBack()}`}
                    onClick={handleClickBack}
                >
                    <h3 className="text-xl sm:text-2xl text-center mb-12">
                        {name}
                    </h3>
                    <div className="flex flex-col gap-4 items-center justify-center">
                        {website && (
                            <ProjectLink name="website" link={website} />
                        )}
                        {github && <ProjectLink name="github" link={github} />}
                    </div>
                </div>
                {/* Frontside */}
                <div
                    className={`grid justify-center rounded-lg border-4 border-neutral-800 hover:border-indigo-500 transition-all ease-in ${animationsFront()}`}
                    onClick={handleClickFront}
                >
                    <Image
                        src={img}
                        width="300"
                        height="300"
                        className="rounded-md"
                        alt={`${name} project image`}
                    />
                </div>
            </div>

            <p className="mt-4 mb-6 text-[16px] text-center sm:text-xl">
                {description}
            </p>
        </div>
    );
};

export default Project;
