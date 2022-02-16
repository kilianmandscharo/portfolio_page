import { useLayoutEffect, useState } from "react";

const useDimensions = (ref: any) => {
    const [dimensions, setDimensions] = useState([0, 0]);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                setDimensions([
                    ref.current.offsetWidth,
                    ref.current.offsetHeight,
                ]);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return dimensions;
};

export default useDimensions;
