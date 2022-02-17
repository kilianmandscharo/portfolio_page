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
    const extraOffset =
        scrollY > 117 ? (scrollY > projectsYPosition - 30 ? 60 : 30) : 0;
    const makeCircle = () => {
        return `a 5,5 0 0,0 0,20 a 5,5 0 0,0 0,-20 a 5,5 0 0,0 0,20`;
    };
    const blueOffset = width / 1.05 - 31.4159 - 45;
    const purpleOffset = width / 1.12 - 41;

    return (
        <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0"
        >
            <path
                d={`M 17 34 ${makeCircle()} v 140 ${makeCircle()} V ${projectsYPosition} ${makeCircle()} v 300`}
                stroke="limegreen"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray={height}
                strokeDashoffset={height - 179 - scrollY - extraOffset}
            />
            <path
                d={`M ${
                    width / 1.12
                } 80 H 41 a 20,20 0 0,0 -20,20 v 94 ${makeCircle()} V ${projectsYPosition} ${makeCircle()} v 300`}
                stroke="#FC79FF"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray={height}
                strokeDashoffset={
                    height - scrollY - 70 - purpleOffset - extraOffset
                }
            />
            <path
                d={`M ${
                    width / 1.05
                } 100 v 30 a 20,20 0 0,1 -20,20 H 45 a 20,20 0 0,0 -20,20 v 24 ${makeCircle()} V ${projectsYPosition} ${makeCircle()} v 300`}
                stroke="#8FF8FF"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray={height}
                strokeDashoffset={
                    height - scrollY - 73 - blueOffset - extraOffset
                }
            />
        </svg>
    );
};

export default AnimatedLines;
