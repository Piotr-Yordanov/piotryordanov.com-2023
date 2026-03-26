import Header from '../components/layout.header'
import Intro from '../components/scalper.intro'
import Footer from '../components/layout.footer'
import Divider from '../components/content.divider'
import ReadMore from '../components/read.more'

const FinancePage = () => {
    return <div className="bg-primary">
        <Header />

        <Intro />
        <Divider />
        <ReadMore href="https://docs.piotryordanov.com/docs" />

        <Footer />
    </div>
}

export default FinancePage
