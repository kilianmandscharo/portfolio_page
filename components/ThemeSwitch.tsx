import { useContext, useState } from "react";
import { ThemeContext } from "../pages";

enum Position {
    dark,
    light,
}

export default function ThemeSwitch() {
    const [position, setPosition] = useState(Position.dark);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleClick = () => {
        setPosition(
            position === Position.dark ? Position.light : Position.dark
        );
        toggleTheme();
    };

    return (
        <div
            onClick={handleClick}
            className="absolute right-10 w-16 h-8 bg-gray-600 flex justify-around items-center rounded-full"
        >
            <div
                className={`bg-white absolute w-8 h-8 border-4  rounded-full ${
                    position === Position.dark
                        ? "animate-switchLeft border-red-300"
                        : "animate-switchRight border-red-400"
                }`}
            ></div>
            <Sun />
            <Moon />
        </div>
    );
}

function Moon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 190 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M55.6562 0.318133C37.1369 37.7092 43.4468 84.2752 74.5858 115.414C105.725 146.553 152.291 152.863 189.682 134.344C184.976 143.846 178.666 152.756 170.752 160.669C131.7 199.721 68.3834 199.721 29.3309 160.669C-9.72147 121.617 -9.72148 58.3001 29.3309 19.2477C37.2443 11.3343 46.154 5.02448 55.6562 0.318133Z"
                fill="#EEE48D"
            />
        </svg>
    );
}

function Sun() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M97.1101 2.36826C97.9257 -0.55779 102.074 -0.557791 102.89 2.36826L117.126 53.4445C117.659 55.3567 116.221 57.25 114.236 57.25H85.764C83.7789 57.25 82.3412 55.3567 82.8741 53.4445L97.1101 2.36826Z"
                fill="#FFEB39"
            />
            <path
                d="M197.632 97.1101C200.558 97.9257 200.558 102.074 197.632 102.89L146.555 117.126C144.643 117.659 142.75 116.221 142.75 114.236V85.764C142.75 83.7789 144.643 82.3412 146.555 82.8741L197.632 97.1101Z"
                fill="#FFEB39"
            />
            <path
                d="M171.079 166.993C172.572 169.638 169.638 172.572 166.993 171.079L120.81 145.029C119.081 144.054 118.759 141.699 120.162 140.295L140.295 120.162C141.699 118.759 144.054 119.081 145.03 120.81L171.079 166.993Z"
                fill="#FFEB39"
            />
            <path
                d="M166.993 29.1373C169.638 27.6449 172.572 30.5784 171.079 33.2241L145.03 79.4069C144.054 81.1359 141.699 81.458 140.295 80.0543L120.162 59.9216C118.759 58.5179 119.081 56.1625 120.81 55.1873L166.993 29.1373Z"
                fill="#FFEB39"
            />
            <path
                d="M29.1373 33.2241C27.6449 30.5784 30.5784 27.6449 33.2241 29.1373L79.4069 55.1873C81.1359 56.1625 81.458 58.5179 80.0543 59.9216L59.9216 80.0543C58.5179 81.458 56.1625 81.1359 55.1873 79.4069L29.1373 33.2241Z"
                fill="#FFEB39"
            />
            <path
                d="M33.2241 171.079C30.5784 172.572 27.6449 169.638 29.1373 166.993L55.1873 120.81C56.1625 119.081 58.5179 118.759 59.9216 120.162L80.0543 140.295C81.458 141.699 81.1359 144.054 79.4069 145.029L33.2241 171.079Z"
                fill="#FFEB39"
            />
            <path
                d="M102.89 197.632C102.074 200.558 97.9257 200.558 97.1102 197.632L82.8741 146.555C82.3412 144.643 83.7789 142.75 85.764 142.75H114.236C116.221 142.75 117.659 144.643 117.126 146.555L102.89 197.632Z"
                fill="#FFEB39"
            />
            <path
                d="M2.36826 102.89C-0.55779 102.074 -0.557791 97.9257 2.36826 97.1102L53.4445 82.8741C55.3567 82.3412 57.25 83.7789 57.25 85.764V114.236C57.25 116.221 55.3567 117.659 53.4445 117.126L2.36826 102.89Z"
                fill="#FFEB39"
            />
            <circle cx="100" cy="100" r="55" fill="#FFF8BD" />
        </svg>
    );
}
