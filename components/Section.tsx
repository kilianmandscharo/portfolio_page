import { useContext } from "react";
import { ThemeContext } from "../pages";

interface SectionProps {
    children: any;
    name: string;
    highlighted: boolean;
}

const Section = ({ children, name, highlighted }: SectionProps) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const hightlightedBg = theme === "dark" ? "bg-red-300" : "bg-red-400";
    const hightlightedText = theme === "dark" ? "text-red-300" : "text-red-400";
    const nonHighlightedBg = theme === "dark" ? "bg-white/90" : "bg-gray-900";
    const nonHighlightedText =
        theme === "dark" ? "text-white/90" : "text-gray-900";

    return (
        <section
            id={name.toLowerCase()}
            className={`p-4 mb-12 pt-8 rounded-md`}
        >
            <div className="flex justify-around items-center mb-4">
                <div
                    className={`h-[1px] w-3/12 ${
                        highlighted ? hightlightedBg : nonHighlightedBg
                    }`}
                />
                <h2
                    className={`text-3xl sm:text-4xl font-header text-center mx-2 ${
                        highlighted ? hightlightedText : nonHighlightedText
                    }`}
                >
                    {name}
                </h2>
                <div
                    className={`h-[1px] w-3/12 ${
                        highlighted ? hightlightedBg : nonHighlightedBg
                    }`}
                />
            </div>
            <div className="text-[16px] sm:text-xl mt-8">{children}</div>
        </section>
    );
};

export default Section;
