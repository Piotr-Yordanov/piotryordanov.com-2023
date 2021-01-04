import { useState, useEffect } from 'react';


const data = [{
    title: "Chess",
    url: "/strategy.svg",
    media: `https://player.twitch.tv/?collection=K2wg3hmQVRYVNw&muted=true`,
}, {
    title: "Music Production",
    url: "/music.png",
    media: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/627780642&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
}]

const Box = ({ index }) => {
    const { title, url, media } = data[index]
    const [frontReady, setReady] = useState(false)
    useEffect(() => {
        setReady(true)
    })

    if (!frontReady)
        return null

    const src = `${media}&parent=${location.hostname}`
    return <div className='flex flex-col'>
        <div className='flex justify-center mb-4'>
            <div className='p-2 mr-2'>
                <img height="50" width="50" src={url} />
            </div>
            <div className='pt-3 ml-4'>
                {title}
            </div>
        </div>
        <iframe
            src={src}
            height="400"
            width="100%"
            scrolling="no"
            frameBorder="0"
            allowFullScreen />
    </div>
}

export default Box