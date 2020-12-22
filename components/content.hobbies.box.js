import { useState, useEffect } from 'react';


const data = [{
    title: "Chess",
    url: "/strategy.svg",
    media: <iframe
        src="https://player.twitch.tv/?video=842442503&parent=localhost&muted=true"
        height="400"
        width="100%"
        frameBorder="0"
        scrolling="no"
        allowFullScreen>
    </iframe>
}, {
    title: "Music Production",
    url: "/music.png",
    media: <iframe
        height="400"
        width="100%"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/627780642&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">

    </iframe>
}]

const Box = ({ index }) => {
    const { title, url, media } = data[index]
    return <div className='flex flex-col'>
        <div className='flex justify-center mb-4'>
            <div className='p-2 mr-2'>
                <img height="50" width="50" src={url} />
            </div>
            <div className='pt-3 ml-4'>
                {title}
            </div>
        </div>
        {media}
    </div>
}

export default Box