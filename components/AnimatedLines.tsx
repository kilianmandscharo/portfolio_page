import { useState } from "react";
import { useSpring, animated } from "react-spring";

interface AnimatedLinesProps {
    width: number;
    height: number;
    scrollY: number;
    projectsYPosition: number;
}

const AnimatedLines = ({
    width,
    height,
    scrollY,
    projectsYPosition,
}: AnimatedLinesProps) => {
    const [pathsAnimated, setPathsAnimated] = useState(false);

    const makeCircle = () => {
        return `a 5,5 0 0,0 0,20 a 5,5 0 0,0 0,-20 a 5,5 0 0,0 0,20`;
    };

    const extraOffset =
        scrollY > 117 ? (scrollY > projectsYPosition - 30 ? 60 : 30) : 0;
    const thirdOffset = width / 1.05 - 31.4159 - 45;
    const secondOffset = width / 1.12 - 41;

    const { firstAnimatedValue } = useSpring({
        reset: true,
        from: { firstAnimatedValue: height },
        to: { firstAnimatedValue: height - 179 },
        delay: 200,
        config: {
            duration: 1000,
        },
    });
    const { secondAnimatedValue } = useSpring({
        reset: true,
        from: { secondAnimatedValue: height },
        to: { secondAnimatedValue: height - secondOffset - 70 },
        delay: 200,
        config: {
            duration: 1000,
        },
    });
    const { thirdAnimatedValue } = useSpring({
        reset: true,
        from: { thirdAnimatedValue: height },
        to: { thirdAnimatedValue: height - thirdOffset - 73 },
        delay: 200,
        config: {
            duration: 1000,
        },
        onRest: () => setPathsAnimated(true),
    });

    return (
        <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0"
        >
            <animated.path
                d={`M 17 34 ${makeCircle()} v 140 ${makeCircle()} V ${projectsYPosition} ${makeCircle()} V ${height}`}
                stroke="#A15DF6"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray={height}
                strokeDashoffset={
                    pathsAnimated
                        ? height - scrollY - 179 - extraOffset
                        : firstAnimatedValue
                }
            />
            <animated.path
                d={`M ${
                    width / 1.12
                } 80 H 41 a 20,20 0 0,0 -20,20 v 94 ${makeCircle()} V ${projectsYPosition} ${makeCircle()} V ${height}`}
                stroke="#6573EB"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray={height}
                strokeDashoffset={
                    pathsAnimated
                        ? height - scrollY - 70 - secondOffset - extraOffset
                        : secondAnimatedValue
                }
            />
            <animated.path
                d={`M ${
                    width / 1.05
                } 100 v 30 a 20,20 0 0,1 -20,20 H 45 a 20,20 0 0,0 -20,20 v 24 ${makeCircle()} V ${projectsYPosition} ${makeCircle()} V ${height}`}
                stroke="#5DBDF6"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray={height}
                strokeDashoffset={
                    pathsAnimated
                        ? height - scrollY - 73 - thirdOffset - extraOffset
                        : thirdAnimatedValue
                }
            />
        </svg>
    );
};

export default AnimatedLines;
