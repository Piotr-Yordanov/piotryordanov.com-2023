export const SectionCard = ({ children }) => {
    return <div className="flex flex-col p-10 mb-6 md:w-1/3 md:mb-0 ">
        <div className="text-gray-600 fill-current pattern-dots-md gray-light">
            <div className="p-4 transform translate-x-6 -translate-y-6 bg-white border-2 border-solid rounded dark:text-white dark:border-transparent border-light-blue-500 dark:bg-gray-800 ">
                {children}
            </div>
        </div>
    </div>;
};
