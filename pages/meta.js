import Head from 'next/head'
import { useState, useEffect } from 'react';

const props = {
    title: "Piotr Yordanov",
    desc: "Web Developer, CME Scalper, Meditator, Chess player, Musician!",
    canonical: "https://piotryordanov.com",
    twitter: "@Piotr_Yordanov"
}

const Meta = () => {
    return <Head>

        <title>{props.title}</title>
        <meta name="description" content={props.desc} />
        <link rel="icon" type="image/png" href="/flatiron.svg" />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content={props.title} />
        <meta itemProp="description" content={props.desc} />
        <meta itemProp="image" content={`${props.canonical}/sm_image.jpg`} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={`${props.canonical}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:site_name" content={props.title} />
        <meta property="og:description" content={props.desc} />
        <meta property="og:image" content={`${props.canonical}/sm_image.jpg`} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.desc} />
        <meta name="twitter:site" content={props.twitter} />
        <meta name="twitter:image" content={`${props.canonical}/sm_image.jpg`} />
        <meta name="twitter:creator" content={props.twitter} />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NSDQR05D2S"></script>
        <script
            dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { window.dataLayer.push(arguments) }
            gtag('js', new Date());

            gtag('config', 'G-NSDQR05D2S');
        `,
            }}
        />

    </Head>
}

export default Meta