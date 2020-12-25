import { useState, useEffect } from 'react';
import classnames from 'classnames'

const Card = ({ children }) => {
    return <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
        <div class="pattern-dots-md fill-current text-gray-600 gray-light">
            <div class="dark:text-white rounded dark:border-transparent border-solid bg-white border-2 border-light-blue-500   dark:bg-gray-800 p-4 transform translate-x-6 -translate-y-6  ">
                {children}
            </div>
        </div>
    </div>
}
const Icon = ({ bg, text, d }) => {
    return <div class={classnames("w-10 h-10 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0", bg, text)}>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d={d}></path>
        </svg>
    </div>
}
const CardContent = ({ title, content }) => {
    return <div class="flex-grow">
        <h2 class=" text-xl title-font font-medium mb-3">{title}</h2>
        <p class="leading-relaxed text-sm text-justify">
            {content}
        </p>
    </div>
}

const Content = () => {
    return <section class="">
        <div class="max-w-6xl mx-auto px-5 pb-12 pt-24">
            <div class="text-center mb-20">
                <h1 class=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Web Development</h1>
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    Computing is vast and languages are emerging almost anytime, I do my best to be up to the task to meet the needs of my clients and provide help to new developers.
                </p>
                <div class="flex mt-6 justify-center">
                    <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
                <Card>
                    <Icon
                        bg="bg-green-100"
                        text="text-green-500"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    <CardContent
                        title="Web Design"
                        content="Give taste 😍 color to applications, I do it to make your sites attractive 🎨. Before becoming a web designer, I was already familiar with color and drawing from a young age." />
                </Card>
                <Card>
                    <Icon
                        bg="bg-blue-100"
                        text="text-blue-500"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    <CardContent
                        title="Web Development"
                        content="Placeholder text" />
                </Card>
                <Card>
                    <Icon
                        bg="bg-yellow-100"
                        text="text-yellow-500"
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    <CardContent
                        title="Tech Lead"
                        content="Placeholder text" />
                </Card>
            </div >
        </div >
    </section >
}

export default Content