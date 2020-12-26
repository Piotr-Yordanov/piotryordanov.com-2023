export const SectionCardContent = ({ title, content }) => {
    return <div class="flex-grow">
        <h2 class=" text-xl title-font font-medium mb-3">{title}</h2>
        <p class="leading-relaxed text-sm text-justify">
            {content}
        </p>
    </div>;
};
