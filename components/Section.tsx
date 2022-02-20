interface SectionProps {
    children: any;
    name: string;
    highlighted: boolean;
}

const Section = ({ children, name, highlighted }: SectionProps) => {
    return (
        <section
            id={name.toLowerCase()}
            className={`p-4 mb-12 pt-8 rounded-md`}
        >
            <div className="flex justify-around items-center mb-4">
                <div
                    className={`h-[1px] w-3/12 bg-white/90 ${
                        highlighted ? "bg-red-300" : "bg-white/90"
                    }`}
                />
                <h2
                    className={`text-3xl sm:text-4xl font-header text-center mx-2 ${
                        highlighted ? "text-red-300" : "text-white/90"
                    }`}
                >
                    {name}
                </h2>
                <div
                    className={`h-[1px] w-3/12 bg-white/90 ${
                        highlighted ? "bg-red-300" : "bg-white/90"
                    }`}
                />
            </div>
            <div className="text-[16px] sm:text-xl mt-8">{children}</div>
        </section>
    );
};

export default Section;
