const Tabs = ({ selectedList, showTabs, data, setList }) => {
    let tabs = <div></div>;
    if (showTabs) {
        let tabsContent = [];
        data.forEach((entry, index) => {
            tabsContent.push(<div onClick={() => setList(index)}>{entry.tabHeader(index === selectedList)}</div>);
        });
        tabs = <div className='flex flex-row w-full mb-4 overflow-x-scroll'>
            {tabsContent}
        </div>;
    }
    return tabs;
};

export default Tabs