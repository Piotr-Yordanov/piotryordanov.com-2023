import { useState, useEffect } from 'react';
import Dots from './content.dots-triangle'
import Box from './content.box'

const data = [{
    title: "CME Scalper",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />,
    img: "https://www.centerforempathy.org/wp-content/uploads/2019/11/placeholder.png"
}, {
    title: "Web Developper",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
    img: "https://www.centerforempathy.org/wp-content/uploads/2019/11/placeholder.png"
}]


const Specialities = () => {
    return <div className='container-inner mx-auto relative py-10'>
        <div className='text-primary-default leading-relaxed text-2xl font-bold'>
            <Dots />
            <Dots direction="left" />
            <div className='text-center font-bold text-4xl mb-8'>
                My skills
            </div>
            <div className='grid grid-cols-2 gap-5'>
                <div className='col-span-1'>
                    {Box(data[0])}
                </div>
                <div className='col-span-1'>
                    {Box(data[1])}
                </div>
            </div>
        </div>
    </div >
}

export default Specialities