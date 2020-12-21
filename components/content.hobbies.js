import { useState, useEffect } from 'react';
import Dots from './content.dots-triangle'
import Box from './content.box'


const data = [{
    title: "",
    url: "/music.png",
    media: <iframe
        height="400"
        width="100%"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/627780642&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">

    </iframe>
}, {
    title: "",
    url: "/strategy.svg",
    media: <iframe
        src="https://player.twitch.tv/?channel=tradingcarry&parent=localhost&muted=true"
        height="400"
        width="100%"
        frameBorder="0"
        scrolling="no"
        allowFullscreen="true">
    </iframe>
}, {
    title: "",
    url: "/exercise.svg",
    img: "/meditating.jpg"
}]


const Specialities = () => {
    return <div className='container-inner mx-auto relative py-10'>
        <Dots />
        <Dots direction="left" />
        <div className='text-primary-default leading-relaxed text-2xl font-bold'>
            <div className='text-center font-bold text-4xl mb-8'>
                Hobbies
            </div>
            <div className='grid grid-cols-3 gap-5'>
                <div className='col-span-1'>
                    {Box(data[0])}
                </div>
                <div className='col-span-1'>
                    {Box(data[1])}
                </div>
                <div className='col-span-1'>
                    {Box(data[2])}
                </div>
            </div>
        </div>
    </div >
}

export default Specialities