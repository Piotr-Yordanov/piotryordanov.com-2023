import Header from "./layout.header";
import AI from "./developper.ai";
import Divider from "./content.divider";
import ReadMore from "./read.more";
import Footer from "./layout.footer";

const AIPage = () => {
  return (
    <div className="bg-primary">
      <Header />
      <AI />
      <Divider />
      <ReadMore href="https://docs.piotryordanov.com/agentic-ai/overview" />
      <Footer />
    </div>
  );
};

export default AIPage;
