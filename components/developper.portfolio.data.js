import { SiStyledComponents, SiReact, SiWordpress, SiTailwindcss } from 'react-icons/Si'
const size = 20

const sites = [{
    title: "Good Ghosting",
    url: "https://gg-landingpage.vercel.app",
    description: 'I built the MVP of this GitCoin KERNEL project using react and tailwind, in order to get signups to validate the MVP.',
    stack: <div className="flex flex-row">
        <SiReact size={size} />
        <SiTailwindcss size={size} className='ml-4' />
    </div>
}, {
    title: "Newsite",
    url: "/newsite/newsite.html",
    description: 'A retro looking personal website where I explored using fancy background image effects.',
    stack: <div className="flex flex-row">
        <SiReact size={size} />
        <SiStyledComponents size={size} className="ml-4" />
    </div>
}, {
    title: "Tech Blog",
    url: "https://website-ebon.vercel.app",
    description: 'A sample tech blog built from scratch using pure react and styled-components. No gatsby, or fancy mechanics.',
    stack: <div className="flex flex-row">
        <SiReact size={size} />
        <SiStyledComponents size={size} className='ml-4' />
    </div>
}, {
    title: "Sila",
    url: "/sila/sila.html",
    description: 'This was the wordpress landing page of a now defunct agency I cofounded in 2020.',
    stack: <div>
        <SiWordpress size={size} />
    </div>
}, {
    title: "Dekkenit Jeddeh",
    url: "https://dekkenitjeddeh.com/contact-us/",
    description: 'The first client of Sila: A store front for a shop in Beirut offering subsidized food.',
    stack: <div className="">
        <SiWordpress size={size} />
    </div>
}]

export default sites