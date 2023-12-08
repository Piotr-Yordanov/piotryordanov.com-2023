import { useEffect, useState } from "react";
import Header from "../components/layout.header";
import Footer from "../components/layout.footer";

import Intro from "../components/about.intro";
import Divider from "../components/content.divider";

const Home = () => {
  return (
    <div className="bg-primary">
      <Header />
      <Intro />
      <Divider />

      <Footer />
    </div>
  );
};

export default Home;
