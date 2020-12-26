export const SectionCard = ({ children }) => {
    return <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
        <div class="pattern-dots-md fill-current text-gray-600 gray-light">
            <div class="dark:text-white rounded dark:border-transparent border-solid bg-white border-2 border-light-blue-500   dark:bg-gray-800 p-4 transform translate-x-6 -translate-y-6  ">
                {children}
            </div>
        </div>
    </div>;
};
