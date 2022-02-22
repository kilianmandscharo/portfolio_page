import { useContext } from "react";
import { ThemeContext } from "../pages";
import Contact from "./Contact";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="mb-8 flex justify-center">
            <ul className="flex flex-row text-[14px] sm:text-base justify-around gap-4 sm:gap-8">
                {["About", "Projects", "Technologies", "Contact"].map(
                    (name) => (
                        <li
                            key={name}
                            className={`${
                                theme === "dark"
                                    ? "hover:text-red-300"
                                    : "hover:text-red-400"
                            } transition-all ease-linear`}
                        >
                            <a href={`#${name.toLowerCase()}`}>{name}</a>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
};
export default Navbar;
