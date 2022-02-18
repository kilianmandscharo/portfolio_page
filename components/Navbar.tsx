import Contact from "./Contact";

const Navbar = () => {
    return (
        <nav className="mb-8 flex justify-center">
            <ul className="flex flex-row justify-around gap-4 sm:gap-8">
                {["About", "Projects", "Technologies", "Contact"].map(
                    (name) => (
                        <li
                            key={name}
                            className="hover:text-violet-900 transition-all ease-linear"
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
