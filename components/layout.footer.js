import { useState, useEffect } from 'react';
import Grid from './footer.grid'

import { FiLinkedin, FiYoutube, FiTwitter } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTwitch } from 'react-icons/fa'
import { VscGithubAlt } from 'react-icons/vsc'

const Footer = () => {
    return <div className="w-full dark:bg-gray-700 bg-primary-default">
        <div className="max-w-screen-md mx-auto ">
            <div className="py-16 pb-8 text-center textl-xl">
                <h2 className="mb-8 text-2xl font-bold">Let's Get In Touch</h2>
                <div className='flex justify-center'>
                    <a className="mx-4" target="_blank" href="https://www.youtube.com/channel/UCd5BNKWR_5tnXCwzI2bKEtw">
                        <FiYoutube size={25} />
                    </a>
                    <a className="mx-4" target="_blank" href="https://www.instagram.com/piotr_yordanov">
                        <AiOutlineInstagram size={25} />
                    </a>
                    <a className="mx-4 mr-6" target="_blank" href="https://www.twitch.tv/tradingcarry">
                        <FaTwitch size={25} />
                    </a>

                    <a className="mx-4 ml-6" target="_blank" href="https://github.com/piotryordanov">
                        <VscGithubAlt size={25} />
                    </a>
                    <a className="mx-4" target="_blank" href="https://twitter.com/piotr_yordanov">
                        <FiTwitter size={25} />
                    </a>
                    <a className="mx-4" target="_blank" href="https://www.linkedin.com/in/piotr-yordanov">
                        <FiLinkedin size={25} />
                    </a>
                </div>
                <div className='mt-10 font-bold'>
                    Copyright 2020. All rights reserved.
                </div>
            </div>
            <div className="pb-4 overflow-x-hidden -mt-44">
                <Grid />
            </div>
        </div >
    </div >
}

export default Footer