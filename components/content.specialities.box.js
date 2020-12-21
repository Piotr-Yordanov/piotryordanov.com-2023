import { useState, useEffect } from 'react';
import { RiStockLine } from 'react-icons/ri'
import { BiCodeAlt } from 'react-icons/bi'
import Dots from './content.dots-triangle'


const data = [{
    title: "CME Scalper",
    icon: <RiStockLine />,
    description: "I have discovered my passion for the financial markets in early 2017. The journey has proven to be one of the hardest and most humbling I have had to experience.",
    media: <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/kYugZ0hIczU"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
}, {
    title: "Web Developper",
    icon: <BiCodeAlt />,
    description: "I have over 10 years of experience building web apps, with a focus on front end design, and react in particular. Watch this video to see me live coding this very website!",
    media: <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/7DNgThin5h8"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
}, {
    title: "Meditator",
    icon: <img src="meditation.svg" width="30" height="30" />,
    description: "I have studied buddhist scripture in depth during my 5 years in Chiang Mai, Thailand. I also practiced various forms of meditation be is solo, or in retreats.",
    media: <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/7DNgThin5h8"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
}]

const Box = (index, order) => {
    const { title, icon, media, description } = data[index]
    const row = order ? 'xl:flex-row-reverse' : 'xl:flex-row'
    const bg = !order ? 'dark:bg-gray-900  bg-white' : 'dark:bg-gray-800 bg-gray-100'
    const dots = !order ? <Dots /> : null

    return <div className={`${bg}`} >
        <div className={`relative container-inner mx-auto w-full my-8 p-2 py-20 flex ${row} flex-col-reverse`}>
            {dots}
            <div className='xl:w-1/2 w-full'>
                {media}
            </div>
            <div className='xl:w-1/2  w-full ml-4 xl:my-auto  mb-8'>
                <div className='flex p-4'>
                    <div class="inline-block rounded-full pr-8 ">
                        {icon}
                        <div className='ml-4 mb-4 text-3xl leading-snug'>
                            {title}
                        </div>
                        <div className='text-xl font-normal'>
                            {description}
                        </div>
                    </div>
                </div>
            </div >
        </div>
    </div >
}

export default Box