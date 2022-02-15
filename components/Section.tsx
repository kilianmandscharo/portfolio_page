interface SectionProps {
    children: any;
    name: string;
}

const Section = ({ children, name }: SectionProps) => {
    return (
        <section id={name.toLowerCase()} className="text-white p-4 sm:p-8">
            <div className="flex justify-around items-center mb-4">
                <div className="h-[2px] w-3/12 bg-white" />
                <h2 className="text-4xl text-center mx-2 sm:mb-4">{name}</h2>
                <div className="h-[2px] w-3/12 bg-white" />
            </div>
            <div className="text-[16px] sm:text-xl sm:columns-2 gap-x-8">
                {children}
            </div>
        </section>
    );
};

export default Section;
