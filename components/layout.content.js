import { useState, useEffect } from 'react';
import Dots from './content.dots-triangle'
import Divider from './content.divider'
import Specialities from './content.specialities'
import Hobbies from './content.hobbies'

const Content = () => {
    return <div>
        <div className='relative mx-auto dark:text-white text-primary-default container-inner'>
            <div className='px-12 py-4'>
                <img src="https://www.centerforempathy.org/wp-content/uploads/2019/11/placeholder.png" alt='placeholder' />
            </div>
            <Divider />
            <Dots direction="left" />
        </div >
        <Specialities />
        <Divider />
        <Hobbies />
    </div>
}

export default Content