import { useState, useEffect } from 'react';
import data from './developper.portfolio.data'
import Title from './SectionTitle'

const Card = ({ url, img, title, description, stack }) => {
    return <a href={url} className='w-full lg:w-1/3' target="_blank">
        <div class="mx-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg my-4">
            <img class="w-full h-48 object-cover object-center" src={img} alt="avatar" />
            <div class="py-4 px-6">
                <h1 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">{title}</h1>
                <p class="py-2 text-lg text-gray-700 dark:text-gray-300">{description}</p>
                <div className='flex justify-center my-6'>
                    <div className='inline-flex w-16 h-1 bg-indigo-500 rounded-full'>
                    </div>
                </div>
                <div className='text-black dark:text-gray-400 '>
                    {stack}
                </div>
            </div>
        </div>
    </a>
}

const Portfolio = () => {
    let cards = []
    data.forEach((card) => {
        cards.push(<Card
            img={`/${card.title}.png`}
            {...card}
        />)
    })

    return <div className='mx-auto container-inner'>
        <Title
            title="Portfolio"
            content="A list of the projects I worked on"
        />
        <div className='flex flex-col flex-nowrap lg:flex-row lg:flex-wrap'>
            {cards}
        </div>
    </div>
}

export default Portfolio