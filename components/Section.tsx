interface SectionProps {
    children: any;
    name: string;
}

const Section = ({ children, name }: SectionProps) => {
    return (
        <section id={name.toLowerCase()} className="p-4">
            <div className="flex justify-around items-center mb-4">
                <div className="h-[2px] w-3/12 bg-black" />
                <h2 className="text-4xl text-center mx-2">{name}</h2>
                <div className="h-[2px] w-3/12 bg-black" />
            </div>
            <div className="text-[16px] sm:text-xl">{children}</div>
        </section>
    );
};

export default Section;
