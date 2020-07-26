import React, { useState, useEffect } from 'react';
import './App.less';
import { Hero, Header, Anchor } from './components/layout.jsx'
import { Trader, Coder, Entrepreneur, Meditator, Writer, Musician } from "./components/blocks.jsx"

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
          <Col span="2">
            <Anchor targetOffset={targetOffset} />
          </Col>
          <Col span="22">
            <Trader />
            <Coder />
            <Entrepreneur />
            <Meditator />
            <Writer />
            <Musician />
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App;