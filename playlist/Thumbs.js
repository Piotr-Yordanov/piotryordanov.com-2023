import { useEffect } from 'react'
import classnames from 'classnames'
import Tabs from './Tabs'

const Thumbs = (props) => {
    const { data, selectedList, selectedIndex, setIndex } = props
    let thumbs = []
    const currentList = data[selectedList]
    const base = 'p-2 mb-2 bg-white border-2 border-solid rounded cursor-pointer dark:text-white dark:bg-gray-800'
    const baseBorder = 'dark:border-transparent border-gray-300'
    const hover = "transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"

    useEffect(() => {
        document.getElementById(`${currentList.name}`).scrollTop = 50 * selectedIndex;
    })


    currentList.media.forEach(({ type, thumb, img, videoId, title, author }, index) => {
        const border = index === selectedIndex ? 'border-green-500' : baseBorder
        let URL;
        switch (type) {
            case 'youtube':
                URL = `http://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`
                break;
            default:
                URL = thumb
        }

        const imgSRC = img !== undefined ? img : URL
        thumbs.push(
            <div
                id={`${data[selectedList].name}-${index}`}
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
        <div className='mb-2 text-center'>
            {currentList.thumbTitle}

        </div>
        <div className='w-full p-2 overflow-y-scroll max-h-96' id={`${data[selectedList].name}`} style={{ scrollBehavior: 'smooth' }}>
            {thumbs}
        </div>
    </div>
}

export default Thumbs