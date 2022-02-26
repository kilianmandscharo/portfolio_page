import { useContext, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { ThemeContext } from "../pages";

interface AnimatedLinesProps {
    width: number;
    height: number;
    scrollY: number;
    aboutYPosition: number;
    projectsYPosition: number;
    skillsYPosition: number;
    contactYPosition: number;
    bottomReached: boolean;
}

export default function AnimatedLines({
    width,
    height,
    scrollY,
    aboutYPosition,
    projectsYPosition,
    skillsYPosition,
    contactYPosition,
    bottomReached,
}: AnimatedLinesProps) {
    const [pathsAnimated, setPathsAnimated] = useState(false);
    const [show, setShow] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const lineColor = theme === "dark" ? "#9CA3AF" : "#1F2937";

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 300);
    }, []);

    const makeCircle = () => {
        return `a 5,5 0 0,0 0,20 a 5,5 0 0,0 0,-20 a 5,5 0 0,0 0,20`;
    };

    // Line calculations
    const generalOffset = 430;
    const extraOffset =
        scrollY > projectsYPosition - generalOffset
            ? scrollY > skillsYPosition - 390
                ? 492
                : 461
            : generalOffset;

    const line1XLength = 0;
    const line2XLength = width / 1.12 - 41;
    const line3XLength = width / 1.05 - 31.4159 - 45;

    const line1YLength = height - 34 + 5 * 37.1;
    const line2YLength = height - 80 + 5 * 37.1 + 31.4;
    const line3YLength = height - 100 + 5 * 37.1 + 2 * 31.4;

    const line1Length = line1XLength + line1YLength;
    const line2Length = line2XLength + line2YLength;
    const line3Length = line3XLength + line3YLength;

    const line1ExtraOffset = 179;
    const line2ExtraOffset = 144;
    const line3ExtraOffset = 167;

    const line1HaltingPoint =
        line1Length - line1XLength - line1ExtraOffset - generalOffset;
    const line2HaltingPoint =
        line2Length - line2XLength - line2ExtraOffset - generalOffset;
    const line3HaltingPoint =
        line3Length - line3XLength - line2ExtraOffset - generalOffset;

    const line1TotalOffset =
        line1Length - scrollY - line1ExtraOffset - extraOffset;
    const line2TotalOffset =
        line2Length - scrollY - line2ExtraOffset - line2XLength - extraOffset;
    const line3TotalOffset =
        line3Length - scrollY - line3ExtraOffset - line3XLength - extraOffset;

    // Initial line animations on load
    const delay = 0;
    const animationDuration = 1500;

    const { firstAnimatedValue } = useSpring({
        reset: true,
        from: { firstAnimatedValue: line1Length },
        to: { firstAnimatedValue: line1HaltingPoint },
        delay: delay,
        config: {
            duration: animationDuration,
        },
    });
    const { secondAnimatedValue } = useSpring({
        reset: true,
        from: { secondAnimatedValue: line2Length },
        to: {
            secondAnimatedValue: line2HaltingPoint,
        },
        delay: delay,
        config: {
            duration: animationDuration,
        },
    });
    const { thirdAnimatedValue } = useSpring({
        reset: true,
        from: { thirdAnimatedValue: line3Length },
        to: {
            thirdAnimatedValue: line3HaltingPoint,
        },
        delay: delay,
        config: {
            duration: animationDuration,
        },
        onRest: () => setPathsAnimated(true),
    });

    // Line animations on reaching bottom
    const animationDurationToBottom = 1000;

    const { firstAnimatedValueToBottom } = useSpring({
        reset: true,
        from: { firstAnimatedValueToBottom: line1TotalOffset },
        to: { firstAnimatedValueToBottom: 0 },
        delay: delay,
        config: {
            duration: animationDurationToBottom,
        },
    });
    const { secondAnimatedValueToBottom } = useSpring({
        reset: true,
        from: { secondAnimatedValueToBottom: line2TotalOffset },
        to: {
            secondAnimatedValueToBottom: 0,
        },
        delay: delay,
        config: {
            duration: animationDurationToBottom,
        },
    });
    const { thirdAnimatedValueToBottom } = useSpring({
        reset: true,
        from: { thirdAnimatedValueToBottom: line3TotalOffset },
        to: {
            thirdAnimatedValueToBottom: 0,
        },
        delay: delay,
        config: {
            duration: animationDurationToBottom,
        },
    });

    // For the paths to wrap around: V ${height - 64} a 20,20 0 0,0 20,20 h ${width - 85} a 5,5 0 0,0 20,0 a 5,5 0 0,0 -20,0

    return show ? (
        <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0"
        >
            <animated.path
                d={`M 17 34 ${makeCircle()} V${aboutYPosition} ${makeCircle()} V ${projectsYPosition} ${makeCircle()} V ${skillsYPosition} ${makeCircle()} V ${contactYPosition} ${makeCircle()}`}
                stroke={lineColor}
                strokeWidth="2"
                fill="transparent"
                strokeDasharray={line1Length}
                strokeDashoffset={
                    pathsAnimated
                        ? bottomReached
                            ? firstAnimatedValueToBottom
                            : line1TotalOffset
                        : firstAnimatedValue
                }
            />
            <animated.path
                d={`M ${
                    width / 1.12
                } 80 a 5,5 0 0,0 -20,0 a 5,5 0 0,0 20,0 a 5,5 0 0,0 -20,0 H 41 a 20,20 0 0,0 -20,20 V ${aboutYPosition} ${makeCircle()} V ${projectsYPosition} ${makeCircle()} V ${skillsYPosition} ${makeCircle()} V ${contactYPosition} ${makeCircle()}`}
                stroke={lineColor}
                strokeWidth="2"
                fill="transparent"
                strokeDasharray={line2Length}
                strokeDashoffset={
                    pathsAnimated
                        ? bottomReached
                            ? secondAnimatedValueToBottom
                            : line2TotalOffset
                        : secondAnimatedValue
                }
            />
            <animated.path
                d={`M ${
                    width / 1.05
                } 80 ${makeCircle()} v 30 a 20,20 0 0,1 -20,20 H 45 a 20,20 0 0,0 -20,20 V ${aboutYPosition} ${makeCircle()} V ${projectsYPosition} ${makeCircle()} V ${skillsYPosition} ${makeCircle()} V ${contactYPosition} ${makeCircle()}`}
                stroke={lineColor}
                strokeWidth="2"
                fill="transparent"
                strokeDasharray={line3Length}
                strokeDashoffset={
                    pathsAnimated
                        ? bottomReached
                            ? thirdAnimatedValueToBottom
                            : line3TotalOffset
                        : thirdAnimatedValue
                }
            />
        </svg>
    ) : (
        <div></div>
    );
}
