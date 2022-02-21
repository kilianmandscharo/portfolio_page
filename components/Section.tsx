import { useContext } from "react";
import { ThemeContext } from "../pages";

interface SectionProps {
    children: any;
    name: string;
    highlighted: boolean;
}

const Section = ({ children, name, highlighted }: SectionProps) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const highlightedColor = theme === "dark" ? "red-300" : "red-400";
    const nonHighlightedColor = theme === "dark" ? "white/90" : "gray-900";

    return (
        <section
            id={name.toLowerCase()}
            className={`p-4 mb-12 pt-8 rounded-md`}
        >
            <div className="flex justify-around items-center mb-4">
                <div
                    className={`h-[1px] w-3/12 ${
                        highlighted
                            ? `bg-${highlightedColor}`
                            : `bg-${nonHighlightedColor}`
                    }`}
                />
                <h2
                    className={`text-3xl sm:text-4xl font-header text-center mx-2 ${
                        highlighted
                            ? `text-${highlightedColor}`
                            : `text-${nonHighlightedColor}`
                    }`}
                >
                    {name}
                </h2>
                <div
                    className={`h-[1px] w-3/12 ${
                        highlighted
                            ? `bg-${highlightedColor}`
                            : `bg-${nonHighlightedColor}`
                    }`}
                />
            </div>
            <div className="text-[16px] sm:text-xl mt-8">{children}</div>
        </section>
    );
};

export default Section;
