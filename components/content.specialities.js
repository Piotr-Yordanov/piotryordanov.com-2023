import { useState, useEffect } from 'react';
import Dots from './content.dots-triangle'
import Box from './content.specialities.box'


const Specialities = () => {
    return <div id="specialities" className='relative py-10 leading-relaxed text-2xl font-bold'>
        <Dots direction="left" />
        <div className='text-center font-bold text-5xl xl:text-6xl'>
            My Specialities
            </div>
        <div className='flex flex-col'>
            {Box(0)}
            {Box(1, true)}
            {Box(2)}
        </div>
    </div >
}

export default Specialities