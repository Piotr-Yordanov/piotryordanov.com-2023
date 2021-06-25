import { useState, useEffect } from 'react';
import Dots from './content.dots-triangle'
import Box from './content.hobbies.box'



const Specialities = () => {
    return <div id="hobbies" className='relative py-10 mx-auto container-inner'>
        <Dots direction="left" />
        <div className='text-2xl font-bold leading-relaxed'>
            <div className='mb-12 text-6xl font-bold text-center'>
                Hobbies
            </div>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
                <Box index={0} />
                <Box index={1} />
            </div>
        </div>
    </div>
}

export default Specialities