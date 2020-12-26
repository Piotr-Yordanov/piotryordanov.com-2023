import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import videos from './developper.playlist.data'
import Thumbs from './developper.playlist.thumbs'

const Title = () => (<div className='text-center'>
    <div className='mb-4 ml-4 text-3xl leading-snug'>
        How I made this website
    </div>
    <div className='text-lg font-normal'>
        I find portfolios to lack the ability to communicate <b>HOW</b> I work, especially that my previous startups are now dead, and a lot of my client work
        is proprietry code that I cannot demo.
        Instead, I decided to <b>stream</b> how I built this very site. On the one hand, you see me in action. On the other, you could learn a trick or two!
    </div>
</div>)

const Playlist = () => {
    const [selectedIndex, setIndex] = useState(0)
    const video = videos[selectedIndex]

    return <div class="container-inner mx-auto px-5 py-12 " >
        <Title />

        <div className='flex flex-col-reverse mt-16 lg:flex-row'>
            <div className='w-full mt-4 lg:w-1/4 lg:mt-0'>
                <Thumbs selectedIndex={selectedIndex} setIndex={setIndex} />
            </div>
            <div className='w-full lg:px-8 lg:w-3/4'>
                <YouTube
                    videoId={video.videoId}
                    opts={{
                        height: '420',
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