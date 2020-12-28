import PropTypes from 'prop-types';
import { useState } from 'react';
import YouTube from 'react-youtube';
import Thumbs from './Thumbs';
import { useEvent } from 'react-use';
import { useCallback } from 'react'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


const Media = ({ entry }) => {
    if (entry.img !== undefined) {
        return <Zoom>
            <img height={420} width="100%" src={entry.img} />
        </Zoom>
    } else {
        return <YouTube
            videoId={entry.videoId}
            opts={{
                height: '420',
                width: '100%',
                playerVars: {
                    autoplay: 0,
                },
            }} />
    }

}

const Playlist = (props) => {
    const [selectedIndex, setIndex] = useState(0);
    const [selectedList, setList] = useState(0);
    const video = props.data[selectedList].media[selectedIndex];

    // Keypress events for left and right in case of playlist
    const onKeyDown = useCallback(({ key }) => {
        const medias = props.data[selectedList].media
        if (key === 'ArrowRight') {
            if (selectedIndex < medias.length - 1) {
                setIndex((selectedIndex) => {
                    return selectedIndex + 1
                })
            }
        }
        else if (key === 'ArrowLeft') {
            if (selectedIndex > 0) {
                setIndex((selectedIndex) => {
                    return selectedIndex - 1
                })
            }
        }
    }, [selectedIndex]);
    useEvent('keydown', onKeyDown);



    return <div className='flex flex-col-reverse lg:flex-row'>
        <div className='w-full mt-4 lg:w-1/4 lg:mt-0'>
            <Thumbs {...props} selectedIndex={selectedIndex} selectedList={selectedList} setList={setList} setIndex={setIndex} />
        </div>
        <div className='w-full lg:px-8 lg:w-3/4 lg:my-auto'>
            <Media entry={video} />
        </div>
    </div>;
};

Playlist.defaultProps = {
    showTabs: false
};
Playlist.propTypes = {
    data: PropTypes.array,
    showTabs: PropTypes.bool
};

export default Playlist