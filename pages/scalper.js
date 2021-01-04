import { useState, useEffect } from 'react';
import Header from '../components/layout.header'
import Intro from '../components/scalper.intro'

import Algo from '../components/scalper.algo'
import Scalping from '../components/scalper.scalping'
import Streaming from '../components/scalper.streaming'
import Footer from '../components/layout.footer'

import Divider from '../components/content.divider'

const Dev = () => {
    return <div className="bg-primary">
        <Header />

        <Intro />
        <Divider />

        <Algo />
        <Divider />

        <Streaming />

        <Footer />
    </div>
}

export default Dev