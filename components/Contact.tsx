import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "../pages";
import { SegmentProps } from "./About";
import Section from "./Section";

const LOGOSIZE = 50;

const Contact = React.forwardRef<HTMLDivElement, SegmentProps>((props, ref) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Section highlighted={props.highlighted} name="Contact">
            <div
                ref={ref}
                className="min-h-[160px] flex justify-center gap-12 items-center"
            >
                <a
                    href="https://github.com/kilianmandscharo"
                    target="blank"
                    className={`flex items-center hover:opacity-70 ${
                        theme === "dark" ? "bg-white" : ""
                    } p-2 rounded-full`}
                >
                    <svg
                        width={LOGOSIZE}
                        height={LOGOSIZE}
                        viewBox="0 0 44 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M21.7173 -3.30786e-05C9.724 -3.30786e-05 0 9.72397 0 21.72C0 31.316 6.22267 39.456 14.8533 42.3293C15.94 42.528 16.336 41.8573 16.336 41.2813C16.336 40.7666 16.3173 39.4 16.3067 37.588C10.2653 38.9 8.99067 34.676 8.99067 34.676C8.00267 32.168 6.57867 31.5 6.57867 31.5C4.60667 30.152 6.728 30.1786 6.728 30.1786C8.908 30.3333 10.0547 32.4173 10.0547 32.4173C11.992 35.736 15.1387 34.7773 16.376 34.2226C16.5733 32.8186 17.1333 31.8613 17.7547 31.3186C12.932 30.7706 7.86133 28.9066 7.86133 20.584C7.86133 18.2133 8.708 16.2746 10.0973 14.756C9.87333 14.2066 9.128 11.9986 10.3093 9.00797C10.3093 9.00797 12.1333 8.42397 16.2827 11.2346C18.0147 10.7533 19.8733 10.512 21.72 10.504C23.564 10.512 25.4227 10.7533 27.1573 11.2346C31.304 8.42397 33.124 9.00797 33.124 9.00797C34.3093 11.9986 33.564 14.2066 33.34 14.756C34.732 16.2746 35.5733 18.2133 35.5733 20.584C35.5733 28.928 30.4947 30.764 25.656 31.3013C26.436 31.972 27.1307 33.2973 27.1307 35.324C27.1307 38.2266 27.104 40.5693 27.104 41.2813C27.104 41.8626 27.4947 42.5386 28.5973 42.3266C37.2213 39.448 43.4387 31.3133 43.4387 21.72C43.4387 9.72397 33.7133 -3.30786e-05 21.7173 -3.30786e-05Z"
                            fill="#1B1817"
                        />
                    </svg>
                </a>
                <a
                    href="mailto:domi.heller@gmx.de"
                    className={`hover:opacity-70 p-2 rounded-full ${
                        theme === "dark" ? "bg-white" : ""
                    }`}
                >
                    <svg
                        width={LOGOSIZE}
                        height={LOGOSIZE}
                        viewBox="0 0 64 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M47.9512 60C47.9512 60 47.3178 60.3667 46.0512 61.1C44.7845 61.9 42.9512 62.6667 40.5512 63.4C38.1512 64.2 35.2845 64.6 31.9512 64.6C24.9512 64.6 19.1512 63.1667 14.5512 60.3C10.0178 57.5 6.61784 53.7 4.35117 48.9C2.08451 44.1 0.951172 38.7 0.951172 32.7C0.951172 29.2333 1.55117 25.6333 2.75117 21.9C3.95117 18.1667 5.81784 14.7 8.35117 11.5C10.8845 8.23333 14.1512 5.6 18.1512 3.6C22.2178 1.6 27.0845 0.599996 32.7512 0.599996C37.8845 0.599996 42.3512 1.46666 46.1512 3.2C50.0178 4.86667 53.2178 7.16667 55.7512 10.1C58.3512 13.0333 60.2845 16.3333 61.5512 20C62.8845 23.6667 63.5512 27.4667 63.5512 31.4C63.5512 35.5333 62.8512 39.0667 61.4512 42C60.0512 44.8667 58.2512 47.0667 56.0512 48.6C53.9178 50.1333 51.6512 50.9 49.2512 50.9C47.7178 50.9 46.1845 50.5333 44.6512 49.8C43.1845 49.0667 41.8512 47.9333 40.6512 46.4C40.6512 46.4 40.3178 46.7333 39.6512 47.4C39.0512 48.0667 38.1178 48.7333 36.8512 49.4C35.5845 50.0667 33.9512 50.4 31.9512 50.4C29.6178 50.4 27.3512 49.8667 25.1512 48.8C23.0178 47.6667 21.2512 45.9 19.8512 43.5C18.4512 41.0333 17.7512 37.8333 17.7512 33.9C17.7512 30.9 18.1512 28.3667 18.9512 26.3C19.8178 24.2333 20.9845 22.5667 22.4512 21.3C23.9845 19.9667 25.7178 19 27.6512 18.4C29.5845 17.8 31.6512 17.5 33.8512 17.5C35.8512 17.5 37.7178 17.8 39.4512 18.4C41.1845 19 42.5512 19.6 43.5512 20.2C44.6178 20.8 45.1512 21.1 45.1512 21.1V42.7C45.4845 43.3 46.0178 43.8333 46.7512 44.3C47.5512 44.7667 48.4512 45 49.4512 45C50.5178 45 51.5845 44.6333 52.6512 43.9C53.7178 43.1 54.5845 41.7333 55.2512 39.8C55.9845 37.8 56.3512 35.0333 56.3512 31.5C56.3512 28.7 55.9178 25.8667 55.0512 23C54.2512 20.0667 52.9512 17.4 51.1512 15C49.3512 12.5333 46.9178 10.5667 43.8512 9.1C40.8512 7.56666 37.1512 6.8 32.7512 6.8C28.2178 6.8 24.1178 7.83333 20.4512 9.9C16.8512 11.9667 13.9845 14.9333 11.8512 18.8C9.71784 22.6667 8.65117 27.3 8.65117 32.7C8.65117 37.7 9.28451 41.8667 10.5512 45.2C11.8845 48.4667 13.6512 51.0667 15.8512 53C18.0512 54.9333 20.5512 56.3 23.3512 57.1C26.1512 57.9667 29.0845 58.4 32.1512 58.4C34.2845 58.4 36.2845 58.1333 38.1512 57.6C40.0845 57.0667 41.6512 56.5333 42.8512 56C44.0512 55.4667 44.6512 55.2 44.6512 55.2L47.9512 60ZM38.7512 24.6C38.7512 24.6 38.2512 24.4 37.2512 24C36.2512 23.6 35.0512 23.4 33.6512 23.4C30.8512 23.4 28.7512 24.2333 27.3512 25.9C26.0178 27.5667 25.3512 30.2667 25.3512 34C25.3512 37.6667 26.0845 40.3333 27.5512 42C29.0178 43.6667 30.6845 44.5 32.5512 44.5C34.2178 44.5 35.4845 44.2667 36.3512 43.8C37.2178 43.2667 37.8178 42.7667 38.1512 42.3C38.5512 41.8333 38.7512 41.6 38.7512 41.6V24.6Z"
                            fill="black"
                        />
                    </svg>
                </a>
            </div>
        </Section>
    );
});

export default Contact;
``;
