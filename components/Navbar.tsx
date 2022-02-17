import Contact from "./Contact";

const Navbar = () => {
    return (
        <nav className="mb-8 flex flex-row justify-evenly">
            <ul className="flex flex-row justify-around gap-6">
                <li className="hover:text-green-600 transition-all ease-linear">
                    <a href="#about">About</a>
                </li>
                <li className="hover:text-green-600 transition-all ease-linear">
                    <a href="#projects">Projects</a>
                </li>
            </ul>
            <Contact />
        </nav>
    );
};
export default Navbar;
