import { useContext } from "react";
import { ThemeContext } from "../pages";
import Contact from "./Contact";

export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="mb-8 flex justify-center">
            <ul className="flex flex-row text-[14px] md:text-lg justify-around mt-[2px] md:mt-[-2px] gap-4 md:gap-8">
                {["About", "Projects", "Technologies", "Contact"].map(
                    (name) => (
                        <li
                            key={name}
                            className={`${
                                theme === "dark"
                                    ? "hover:text-red-300"
                                    : "hover:text-red-400"
                            } transition-color ease-linear`}
                        >
                            <a href={`#${name.toLowerCase()}`}>{name}</a>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
}
