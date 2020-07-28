import React, { useState, useEffect } from 'react';
import './App.less';
import './App.css';
import { Hero, Header, Anchor } from './components/layout.jsx'
import { Trader, Coder, Entrepreneur, Meditator, Writer, Musician } from "./components/blocks.jsx"
import { HeartFilled } from "@ant-design/icons";


import { Layout, Row, Col } from 'antd';
const { Content, Footer } = Layout;


const App = () => {
  const [targetOffset, setTargetOffset] = useState(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 4);
  }, []);
  return (
    <Layout>
      <Header />
      <Hero />
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Row>
          <Col span="4" align="center">
            <Anchor targetOffset={targetOffset} />
          </Col>
          <Col span="16">
            <Trader />
            <Entrepreneur />
            <Coder />
            <Meditator />
            <Writer />
            <Musician />
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Piotr Yordanov ©2020, created with <HeartFilled style={{color: "Red"}}/></Footer>
    </Layout>
  );
};

export default App;