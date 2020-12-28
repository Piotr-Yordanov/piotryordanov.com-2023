import { useState, useEffect } from 'react';
import classnames from 'classnames'

import Playlist from '../playlist/Playlist'
import Image from 'next/image'
import platforms from './scalper.algo.data'

const Algo = () => {
    platforms.forEach(({ name }, index) => {
        platforms[index].tabHeader = (selected) => {
            return <div className={classnames('mr-4 hover:mr-8 hover:filter-none ', selected ? 'filter-none' : 'filter-grayscale')}>
                <Image className="cursor-pointer rounded-2xl" width={36} height={36} src={`/platforms/${name}.png`} />
            </div>
        }

    })


    return <div id="algo" className='mx-auto container-inner'>
        <div className='w-full '>
            <Playlist showTabs={true} data={platforms} />
        </div>
        Algo

    </div>
}

export default Algo