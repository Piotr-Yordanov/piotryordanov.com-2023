import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import videos from './developper.playlist.data'
import Thumbs from './developper.playlist.thumbs'

const Title = () => (<div className='text-center'>
    <div className='mb-4 ml-4 text-3xl leading-snug'>
        How I made this website
    </div>
    <div className='text-xl font-normal'>
        I streamed how I built this website. Watch me create it from scratch.
    </div>
</div>)

const Playlist = () => {
    const [selectedIndex, setIndex] = useState(0)
    const video = videos[selectedIndex]

    return <div class="container-inner mx-auto px-5 py-12 " >
        <Title />

        <div className='flex flex-col mt-16 lg:flex-row'>
            <div className='w-full lg:w-1/4'>
                <Thumbs selectedIndex={selectedIndex} setIndex={setIndex} />
            </div>
            <div className='w-full px-8 lg:w-3/4'>
                <YouTube
                    videoId={video.videoId}
                    opts={{
                        height: '390',
                        width: '100%',
                        playerVars: {
                            autoplay: 0,
                        },
                    }}
                />
            </div>
        </div>
    </div>
}

export default Playlist