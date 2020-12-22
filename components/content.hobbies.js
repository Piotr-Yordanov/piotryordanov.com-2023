import { useState, useEffect } from 'react';
import Dots from './content.dots-triangle'
import Box from './content.hobbies.box'



const Specialities = () => {
    return <div id="hobbies" className='container-inner mx-auto relative py-10'>
        <Dots direction="left" />
        <div className='leading-relaxed text-2xl font-bold'>
            <div className='text-center font-bold text-6xl mb-12'>
                Hobbies
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <Box index={0} />
                <Box index={1} />
            </div>
        </div>
    </div>
}

export default Specialities