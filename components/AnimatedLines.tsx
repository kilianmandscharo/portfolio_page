import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

interface AnimatedLinesProps {
    width: number;
    height: number;
    scrollY: number;
    aboutYPosition: number;
    projectsYPosition: number;
    skillsYPosition: number;
    contactYPosition: number;
}

const AnimatedLines = ({
    width,
    height,
    scrollY,
    aboutYPosition,
    projectsYPosition,
    skillsYPosition,
    contactYPosition,
}: AnimatedLinesProps) => {
    const [pathsAnimated, setPathsAnimated] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 300);
    }, []);

    const makeCircle = () => {
        return `a 5,5 0 0,0 0,20 a 5,5 0 0,0 0,-20 a 5,5 0 0,0 0,20`;
    };

    const extraOffset =
        scrollY > projectsYPosition - 430
            ? scrollY > skillsYPosition - 390
                ? 492
                : 461
            : 430;
    const secondOffset = width / 1.12 - 41;
    const thirdOffset = width / 1.05 - 31.4159 - 45;

    const line1Length = height - 34 + 5 * 37.1 + 190;
    const line2Length = height - 80 + 5 * 37.1 + secondOffset + 31.4 + 175;
    const line3Length = height - 100 + 5 * 37.1 + thirdOffset + 31.4 * 2 + 175;

    const delay = 0;
    const animationDuration = 2000;

    const { firstAnimatedValue } = useSpring({
        reset: true,
        from: { firstAnimatedValue: line1Length },
        to: { firstAnimatedValue: line1Length - 179 - 430 },
        delay: delay,
        config: {
            duration: animationDuration,
        },
    });
    const { secondAnimatedValue } = useSpring({
        reset: true,
        from: { secondAnimatedValue: line2Length },
        to: { secondAnimatedValue: line2Length - secondOffset - 144 - 430 },
        delay: delay,
        config: {
            duration: animationDuration,
        },
    });
    const { thirdAnimatedValue } = useSpring({
        reset: true,
        from: { thirdAnimatedValue: line3Length },
        to: { thirdAnimatedValue: line3Length - thirdOffset - 167 - 430 },
        delay: delay,
        config: {
            duration: animationDuration,
        },
        onRest: () => setPathsAnimated(true),
    });

    return show ? (
        <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0"
        >
            <animated.path
                d={`M 17 34 ${makeCircle()} V${aboutYPosition} ${makeCircle()} V ${projectsYPosition} ${makeCircle()} V ${skillsYPosition} ${makeCircle()} V ${contactYPosition} ${makeCircle()} V ${
                    height - 90
                } ${makeCircle()}`}
                stroke="#A15DF6"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray={line1Length}
                strokeDashoffset={
                    pathsAnimated
                        ? line1Length - scrollY - 179 - extraOffset
                        : firstAnimatedValue
                }
            />
            <animated.path
                d={`M ${
                    width / 1.12
                } 80 a 5,5 0 0,0 -20,0 a 5,5 0 0,0 20,0 a 5,5 0 0,0 -20,0 H 41 a 20,20 0 0,0 -20,20 V ${aboutYPosition} ${makeCircle()} V ${projectsYPosition} ${makeCircle()} V ${skillsYPosition} ${makeCircle()} V ${contactYPosition} ${makeCircle()} V ${
                    height - 90
                } ${makeCircle()} `}
                stroke="#6573EB"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray={line2Length}
                strokeDashoffset={
                    pathsAnimated
                        ? line2Length -
                          scrollY -
                          144 -
                          secondOffset -
                          extraOffset
                        : secondAnimatedValue
                }
            />
            <animated.path
                d={`M ${
                    width / 1.05
                } 80 ${makeCircle()} v 30 a 20,20 0 0,1 -20,20 H 45 a 20,20 0 0,0 -20,20 V ${aboutYPosition} ${makeCircle()} V ${projectsYPosition} ${makeCircle()} V ${skillsYPosition} ${makeCircle()} V ${contactYPosition} ${makeCircle()} V ${
                    height - 90
                } ${makeCircle()}`}
                stroke="#5DBDF6"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray={line3Length}
                strokeDashoffset={
                    pathsAnimated
                        ? line3Length -
                          scrollY -
                          167 -
                          thirdOffset -
                          extraOffset
                        : thirdAnimatedValue
                }
            />
        </svg>
    ) : (
        <div></div>
    );
};

export default AnimatedLines;
