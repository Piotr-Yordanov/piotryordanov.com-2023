import Link from 'next/link'
import { RiStockLine } from 'react-icons/ri'
import { Users } from 'lucide-react'
import { GiTechnoHeart } from 'react-icons/gi'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Dots from './content.dots-triangle'
import Button from './Button'

const MediaImage = ({ src, alt, zoomable = false }) => {
    const image = <img className="object-cover w-full h-72 rounded-2xl shadow-lg shadow-gray-300/40 transition duration-300 ease-out transform hover:scale-[1.03]" src={src} alt={alt} />

    if (!zoomable) return image

    return <Zoom>{image}</Zoom>
}

const data = [{
    title: "Agentic AI",
    url: "/AI",
    icon: <GiTechnoHeart />,
    description: "I build agentic AI systems that improve how technical teams operate, from implementation workflows and code review to internal tooling and decision support.",
    media: <MediaImage src="/agentic-workflow.png" alt="Agentic AI workflow" zoomable />
}, {
    title: "CTO",
    url: "/CTO",
    icon: <Users size={28} strokeWidth={2.2} />,
    description: <>
        Executive and hands-on CTO for a financial group spanning 6 companies, building products from scratch and scaling the teams and structure behind them.
        Grew the technology organization from <b>6 to 30</b> people across quant research, engineering, design, QA, DevOps, and product management.
    </>,
    pattern: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23a0aec0' fill-opacity='0.1' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1z")`,
    media: <MediaImage src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="Leadership and product team collaboration" />
}, {
    title: "Finance",
    url: "/finance",
    icon: <RiStockLine />,
    description: "Served as CTO inside a hedge-fund environment, combining technical depth, product judgment, and executive leadership across trading systems, research workflows, and team operations.",
    media: <MediaImage src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80" alt="Financial charts on a trading screen" />
}]

const Box = ({ index, order }) => {
    const { title, url, pattern, icon, media, description } = data[index]
    const row = order ? 'lg:flex-row-reverse' : 'lg:flex-row'
    const bg = !order ? 'dark:bg-gray-900  bg-white' : 'dark:bg-gray-800 bg-gray-100'
    const dots = !order ? <Dots /> : null

    return <div className={`${bg}`} style={{ backgroundImage: pattern ? pattern : null }}>
        <div className={`relative container-inner mx-auto w-full my-2 lg:my-8 p-2 lg:py-20 py:2 flex ${row} flex-col-reverse`}>
            {dots}
            <div className='w-full lg:w-1/2'>
                {media}
            </div>
            <div className='w-full mb-8 ml-4 lg:w-1/2 lg:my-auto'>
                <div className='flex p-4'>
                    <div className="inline-block pr-8 rounded-full fill-current ">
                        {icon}
                        <div className='mb-4 ml-4 text-3xl leading-snug'>
                            {title}
                        </div>
                        <div className='text-xl font-normal'>
                            {description}
                        </div>
                        <Link href={url}>
                            <div>
                                <Button text="More" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div >
        </div>
    </div >
}

export default Box
