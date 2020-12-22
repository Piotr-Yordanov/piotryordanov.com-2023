import { useState, useEffect } from 'react';
import Dots from './content.dots-triangle'
import Box from './content.specialities.box'


const Specialities = () => {
    return <div id="specialities" className='relative py-10 text-2xl font-bold leading-relaxed'>
        <Dots direction="left" />
        <div className='text-5xl font-bold text-center xl:text-6xl'>
            My Specialities
            <div className="flex justify-center mt-6">
                <div className="inline-flex w-16 h-1 rounded-full bg-primary-default"></div>
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