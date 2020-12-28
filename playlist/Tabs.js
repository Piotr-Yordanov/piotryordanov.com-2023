const Tabs = ({ selectedList, showTabs, data, setList, setIndex }) => {
    let tabs = <div></div>;
    if (showTabs) {
        let tabsContent = [];
        data.forEach((entry, index) => {
            tabsContent.push(<div onClick={() => { setIndex(0); setList(index) }}>{entry.tabHeader(index === selectedList)}</div>);
        });
        tabs = <div className='flex flex-row w-full mb-2 overflow-x-scroll'>
            {tabsContent}
        </div>;
    }
    return tabs;
};

export default Tabs