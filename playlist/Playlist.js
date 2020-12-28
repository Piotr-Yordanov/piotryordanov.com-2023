import PropTypes from 'prop-types';
import { useState } from 'react';
import YouTube from 'react-youtube';
import Thumbs from './Thumbs';

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



    return <div className='flex flex-col-reverse lg:flex-row'>
        <div className='w-full mt-4 lg:w-1/4 lg:mt-0'>
            <Thumbs {...props} selectedIndex={selectedIndex} selectedList={selectedList} setList={setList} setIndex={setIndex} />
        </div>
        <div className='w-full lg:px-8 lg:w-3/4'>
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