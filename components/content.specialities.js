import { useState, useEffect } from 'react';
import Dots from './content.dots-triangle'
import Box from './content.specialities.box'


const Specialities = () => {
    return <div id="specialities" className='relative py-10 leading-relaxed text-2xl font-bold'>
        <Dots direction="left" />
        <div className='text-center font-bold text-5xl xl:text-6xl'>
            My Specialities
            <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-primary-default inline-flex"></div>
            </div>
        </div>
        <div className='flex flex-col'>
            <Box index={0} order={false} />
            <Box index={1} order={true} />
            <Box index={2} order={false} />
        </div>
    </div >
}

export default Specialities