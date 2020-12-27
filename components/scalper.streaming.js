import { useState, useEffect } from 'react';
import Playlist from '../playlist/Playlist'
import Title from './SectionTitle'
import streams from './scalper.streaming.data'

const Streaming = () => {
    const data = [{
        thumbTitle: "title",
        thumbHeader: [],
        media: streams
    }]
    return <div id="streaming" className='mx-auto container-inner'>
        <Title
            title="My live trading streams"
            content="Everyday at 8.30 am CT, I stream my trading on the CME futures markets. Enjoy!"
        />
        <Playlist data={data} />
    </div>
}

export default Streaming