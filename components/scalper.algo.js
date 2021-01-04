import { useState, useEffect } from 'react';
import classnames from 'classnames'

import Playlist from '../playlist/Playlist'
import Image from 'next/image'
import platforms from './scalper.algo.data'
import Title from './SectionTitle'

const Algo = () => {
    platforms.forEach(({ name }, index) => {
        platforms[index].tabHeader = (selected) => {
            return <div className={classnames('mr-2 hover:mr-8 hover:filter-none ', selected ? 'filter-none' : 'filter-grayscale')}>
                <Image className="cursor-pointer rounded-2xl" width={36} height={36} src={`/platforms/${name}.png`} />
            </div>
        }

    })


    return <div id="algo" className='mx-auto container-inner'>
        <div className='w-full '>
            <Title
                title="Algo Trading"
                content="Since 2017, I have used my decade long experience in programming, to explore algorithmic trading on different platforms. Most of these examples are platforms specific custom indicators that I built to support my trading"
            />
            <Playlist showTabs={true} data={platforms} />
        </div>
    </div>
}

export default Algo