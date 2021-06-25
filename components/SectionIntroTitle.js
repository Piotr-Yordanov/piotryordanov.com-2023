export const SectionIntroTitle = ({ title, content }) => {
    return <div className="mb-20 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-10 tracking-tight  title-font sm:text-5xl sm:leading-none md:text-6xl">
            {title}
        </h1>
        <p className="mx-auto text-base leading-relaxed lg:w-3/4">
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </p>
        <div className="flex justify-center mt-6">
            <div className="inline-flex w-16 h-1 bg-indigo-500 rounded-full"></div>
        </div>
    </div>;

};
