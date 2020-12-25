import videos from './developper.playlist.data'
import classnames from 'classnames'

const Thumbs = ({ selectedIndex, setIndex }) => {
    let thumbs = []
    const base = 'p-2 mb-8 bg-white border-2 border-solid rounded cursor-pointer dark:text-white dark:bg-gray-800'
    const baseBorder = 'dark:border-transparent border-light-blue-500'
    videos.forEach(({ videoId, title }, index) => {
        const border = index === selectedIndex ? 'border-green-500' : baseBorder
        thumbs.push(
            <div
                key={index}
                className={classnames(base, border)}
                onClick={() => setIndex(index)}>
                <div className='flex flex-row'>
                    <img width={100} src={`http://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`} alt={title} />
                    <div className='ml-2 text-black dark:text-gray-400'>
                        <div>
                            {title}
                        </div>
                        <div className='text-xs text-gray-500'>
                            Piotr Yordanov
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return <div className='flex'>
        <div className='w-full'>
            {thumbs}
        </div>
    </div>
}


export default Thumbs