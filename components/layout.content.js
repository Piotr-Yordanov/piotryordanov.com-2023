import { useState, useEffect } from 'react';
import Dots from './content.dots-triangle'
import Divider from './content.divider'
import Specialities from './content.specialities'
import Hobbies from './content.hobbies'

const Content = () => {
    return <div>
        <div className='dark:text-white text-primary-default container-inner mx-auto relative'>
            <div className='px-12 py-4'>
                <img src="https://www.centerforempathy.org/wp-content/uploads/2019/11/placeholder.png" alt='placeholder' />
            </div>
            <Divider />
            <Dots direction="left" />
        </div >
        <Specialities />
        <Divider />
        <Hobbies />
        <svg fill="currentColor" viewBox="0 0 1695 57" class="dark:text-gray-700 text-green-300"><path d="M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1c183.6-.1 344.5 7.3 482.8 22v34H0V23z"></path></svg>
    </div>
}

export default Content