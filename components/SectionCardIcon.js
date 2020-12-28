import classnames from 'classnames';

export const SectionCardIcon = ({ bg, text, d, SVG }) => {
    const img = SVG !== undefined ?
        <SVG /> :
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d={d}></path>
        </svg>

    return <div className={classnames("w-12 h-12 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0", bg, text)}>
        {img}
    </div>;
};
