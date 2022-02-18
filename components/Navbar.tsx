import Contact from "./Contact";

const Navbar = () => {
    return (
        <nav className="mb-8 flex justify-center">
            <ul className="flex flex-row justify-around gap-6">
                {["About", "Projects", "Technologies", "Contact"].map(
                    (name) => (
                        <li className="hover:text-purple-800 transition-all ease-linear">
                            <a href={`#${name.toLowerCase()}`}>{name}</a>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
};
export default Navbar;
