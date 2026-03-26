import Header from "./layout.header";
import Intro from "./developper.intro";
import Divider from "./content.divider";
import ReadMore from "./read.more";
import Footer from "./layout.footer";

const CTOPage = () => {
  return (
    <div className="bg-primary">
      <Header />
      <Intro />
      <Divider />
      <ReadMore href="https://docs.piotryordanov.com/docs/cto-leadership" />
      <Footer />
    </div>
  );
};

export default CTOPage;
