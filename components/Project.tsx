import Image from "next/image";
import { useContext, useState } from "react";
import { ThemeContext } from "../pages";
import ProjectLink from "./ProjectLink";

interface ProjectProps {
    name: string;
    img: string;
    description: string;
    website?: string;
    github?: string;
}

export default function Project({
    name,
    img,
    website,
    github,
    description,
}: ProjectProps) {
    const [flip, setFlip] = useState(false);
    const [flipBack, setFlipBack] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

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
                    theme === "dark"
                        ? "bg-gray-800 border-gray-800 hover:border-white/90"
                        : "bg-gray-700 border-gray-700 hover:border-red-400"
                } transition-colors ease-in rounded-md opacity-0 ${animationsBack()}`}
                onClick={handleClickBack}
            >
                <h3 className="text-xl md:text-xl text-center my-2 text-red-300">
                    {name}
                </h3>
                <p className="text-base text-center mb-9 text-white/90">
                    ({description})
                </p>
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
                    className="rounded-md md:opacity-50 hover:opacity-90 transition-all ease-linear"
                    alt={`${name} project image`}
                />
            </div>
        </div>
    );
}
