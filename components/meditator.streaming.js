import { useState, useEffect } from 'react';
import Playlist from '../playlist/Playlist'
import Title from './SectionTitle'
import streams from './meditator.streaming.data'

const Streaming = () => {
    console.log(streams);

    return <div id="streaming" className='mx-auto container-inner'>
        <Title
            title="Meditation, Mindfulness, Buddhism, and Equanimity"
            content="The topic has always fascinated me. I hope I can pass along some of my knowledge. After all, buddhism is all about suffering, and the end of suffering!"
        />
        <Playlist data={streams} />
    </div>
}

export default Streaming