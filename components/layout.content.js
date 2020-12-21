import { useState, useEffect } from 'react';
import Dots from './content.dots-triangle'
const Content = () => {
    return <div className='container-inner mx-auto relative'>
        <Dots direction="left" />
        <Dots />

    </div >
}

export default Content