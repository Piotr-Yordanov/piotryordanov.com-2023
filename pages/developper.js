import { useState, useEffect } from 'react';
import Header from '../components/layout.header'
import Intro from '../components/developper.intro'
import Playlist from '../components/developper.playlist'
import Portfolio from '../components/developper.portfolio'
import Footer from '../components/layout.footer'

import Divider from '../components/content.divider'

const Dev = () => {
    return <div className="bg-primary">
        <Header />

        <Intro />
        <Divider />

        <Playlist />
        <Divider />

        <Portfolio />
        <Footer />
    </div>
}

export default Dev