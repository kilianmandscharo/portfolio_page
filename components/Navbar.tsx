const Navbar = () => {
    return (
        <nav className="mb-8">
            <ul className="flex flex-row justify-around">
                <li className="hover:text-green-600 transition-all ease-linear">
                    <a href="#about">About</a>
                </li>
                <li className="hover:text-green-600 transition-all ease-linear">
                    <a href="#projects">Projects</a>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
