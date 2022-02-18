import Contact from "./Contact";

const Navbar = () => {
    return (
        <nav className="mb-8 flex justify-center">
            <ul className="flex flex-row justify-around gap-6">
                <li className="hover:text-indigo-800 transition-all ease-linear">
                    <a href="#about">About</a>
                </li>
                <li className="hover:text-indigo-800 transition-all ease-linear">
                    <a href="#projects">Projects</a>
                </li>
                <li className="hover:text-indigo-800 transition-all ease-linear">
                    <a href="#technologies">Technologies</a>
                </li>
                <li className="hover:text-indigo-800 transition-all ease-linear">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
