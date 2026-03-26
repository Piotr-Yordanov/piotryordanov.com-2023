const data = [{
    title: "Chess",
    url: "/strategy.svg",
    media: "https://player.twitch.tv/?video=855362068&muted=true",
    description: "I enjoy studying chess positions and using the game as a way to sharpen pattern recognition, patience, and long-term thinking.",
    type: "twitch"
}, {
    title: "Music Production",
    url: "/music.png",
    media: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/627780642&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    description: "I also produce music and explore sound design as a creative outlet outside of product, engineering, and markets.",
    type: "soundcloud"
}]

const Box = ({ index }) => {
    const { title, url, media, description, type } = data[index]
    const src = type === "twitch" && typeof window !== "undefined"
        ? `${media}&parent=${window.location.hostname}`
        : media

    return <div className='flex flex-col p-6 bg-white shadow-sm dark:bg-gray-900 rounded-2xl'>
        <div className='flex items-center justify-center mb-4'>
            <div className='p-2 mr-2'>
                <img height="50" width="50" src={url} alt={title} />
            </div>
            <div className='pt-1 ml-4 text-2xl font-semibold text-center'>
                {title}
            </div>
        </div>
        <p className='mb-6 text-base font-normal leading-relaxed text-center text-gray-600 dark:text-gray-300'>
            {description}
        </p>
        <iframe
            title={title}
            src={src}
            height="400"
            width="100%"
            scrolling="no"
            frameBorder="0"
            allowFullScreen />
    </div>
}

export default Box
