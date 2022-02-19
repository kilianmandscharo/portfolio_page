import { useEffect, useState } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState([0, 0]);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return windowSize;
};
export default useWindowSize;
