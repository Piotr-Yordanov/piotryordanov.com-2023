export const SectionIntroTitle = ({ title, content }) => {
    return <div class="text-center mb-20">
        <h1 class=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
            {title}
        </h1>
        <p class="text-base leading-relaxed lg:w-3/4 mx-auto">
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </p>
        <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
    </div>;

};
