import classnames from 'classnames'
import Tabs from './Tabs'

const Thumbs = (props) => {
    const { data, selectedList, selectedIndex, setIndex } = props
    let thumbs = []
    const base = 'p-2 mb-2 bg-white border-2 border-solid rounded cursor-pointer dark:text-white dark:bg-gray-800'
    const baseBorder = 'dark:border-transparent border-gray-300'
    const hover = "transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    data[selectedList].media.forEach(({ img, src, videoId, title, author }, index) => {
        const border = index === selectedIndex ? 'border-green-500' : baseBorder
        const imgSRC = img !== undefined ? img : `http://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`
        thumbs.push(
            <div
                key={index}
                className={classnames(base, border, hover)}
                onClick={() => setIndex(index)}>
                <div className='flex flex-row hover:scale-50'>
                    <img className='h-12' width={100} src={imgSRC} alt={title} />
                    <div className='ml-2 text-black dark:text-gray-400'>
                        <div>
                            {title}
                        </div>
                        <div className='text-xs text-gray-500'>
                            {author}
                        </div>
                    </div>
                </div>
            </div>
        )
    })


    return <div className='flex flex-col'>
        <Tabs {...props} />
        <div className='w-full'>
            {thumbs}
        </div>
    </div>
}

export default Thumbs