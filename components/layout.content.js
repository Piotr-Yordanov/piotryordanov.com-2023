import { useState, useEffect } from 'react';
import Dots from './content.dots-triangle'
import Divider from './content.divider'
import Specialities from './content.specialities'
import Hobbies from './content.hobbies'

const Content = () => {
    return <div>
        <div className='relative mx-auto dark:text-white text-primary-default container-inner'>
            <div className='px-12 py-20'>
                <div className='w-full mx-auto text-center lg:w-1/2'>
                    <img className="mx-auto rounded-full h-36" src="moi.jpg" alt='placeholder' />
                    <div className='p-4 text-black'>
                        <div className='text-3xl font-semibold dark:text-white'>
                            Hi, I'm Piotr Yordanov
                        </div>
                        <div className='mt-4 text-xl text-gray-500'>
                            Harry Piotr, without the scar 🧙
                        </div>
                    </div>
                </div>
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