import { useEffect } from 'react';
import videos from './developper.playlist.data'
import Playlist from '../playlist/Playlist';
import Title from './SectionTitle'

const DevelopperPlaylist = () => {
    const data = [{ media: videos }]
    return <div className="px-5 py-12 mx-auto container-inner " >
        <Title
            title="How I made this website"
            content="I find portfolios to lack the ability to communicate <b>HOW</b> I work, especially that my previous startups are now dead, and a lot of my client work
                     is proprietry code that I cannot demo.
                     Instead, I decided to <b>stream</b> how I built this very site. On the one hand, you see me in action. On the other, you could learn a trick or two!"
        />
        <Playlist data={data} />

    </div>
}

export default DevelopperPlaylist