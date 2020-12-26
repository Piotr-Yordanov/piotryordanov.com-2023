import { useState } from 'react';
import YouTube from 'react-youtube';
import Thumbs from './developper.playlist.thumbs';

export const Playlist = ({ data }) => {
    const [selectedIndex, setIndex] = useState(0);
    const video = data[selectedIndex];

    return <div className='flex flex-col-reverse lg:flex-row'>
        <div className='w-full mt-4 lg:w-1/4 lg:mt-0'>
            <Thumbs data={data} selectedIndex={selectedIndex} setIndex={setIndex} />
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
                }} />
        </div>
    </div>;
};
