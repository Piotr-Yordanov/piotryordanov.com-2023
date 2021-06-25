export const SectionCardContent = ({ title, content, btn }) => {
    return <div className="flex-grow">
        <h2 className="mb-3 text-xl font-medium  title-font">{title}</h2>
        <p className="text-sm leading-relaxed text-justify">
            {content}
        </p>
        {btn}
    </div>;
};
