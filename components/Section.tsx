import { useContext } from "react";
import { ThemeContext } from "../pages";

interface SectionProps {
    children: any;
    name: string;
    highlighted: boolean;
}

export default function Section({ children, name, highlighted }: SectionProps) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const hightlightedBg = theme === "dark" ? "bg-red-300" : "bg-red-400";
    const hightlightedText = theme === "dark" ? "text-red-300" : "text-red-400";
    const nonHighlightedBg = theme === "dark" ? "bg-white/90" : "bg-gray-900";
    const nonHighlightedText =
        theme === "dark" ? "text-white/90" : "text-gray-900";

    return (
        <section
            id={name.toLowerCase()}
            className={`p-4 mb-6 md:mb-12 pt-8 rounded-md`}
        >
            <div className="flex justify-around items-center mb-4">
                <div
                    className={`transition-colors ease-linear h-[1px] w-3/12 ${
                        highlighted ? hightlightedBg : nonHighlightedBg
                    }`}
                />
                <h2
                    className={`transition-colors ease-linear text-4xl md:text-5xl font-header text-center mx-2 ${
                        highlighted ? hightlightedText : nonHighlightedText
                    }`}
                >
                    {name}
                </h2>
                <div
                    className={`transition-colors ease-linear h-[1px] w-3/12 ${
                        highlighted ? hightlightedBg : nonHighlightedBg
                    }`}
                />
            </div>
            <div className="text-[16px] md:text-xl mt-8">{children}</div>
        </section>
    );
}
