import { useState, useEffect } from 'react';
import Header from '../components/layout.header'
import Intro from '../components/scalper.intro'
import Footer from '../components/layout.footer'

import Divider from '../components/content.divider'

const Dev = () => {
    return <div className="bg-primary">
        <Header />

        <Intro />
        <Divider />

        <Footer />
    </div>
}

export default Dev