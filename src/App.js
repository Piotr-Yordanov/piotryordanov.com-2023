import React, { useState, useEffect } from 'react';
import { RadiusSettingOutlined, CodeOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';

import { Anchor } from 'antd';
import './App.css';
import Hero from "./Hero.js"

import { Layout, Menu, Skeleton } from 'antd';

const { Header, Content, Footer } = Layout;
const { Link } = Anchor;


const App = () => {
  const [targetOffset, setTargetOffset] = useState(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 4);
  }, []);
  return (
    <Layout>
      <Header theme="light">
        <Menu theme="light" mode="horizontal">
          <Menu.Item key="story" >My Story</Menu.Item>
          <Menu.Item key="contact" icon={<MailOutlined />}>Contact</Menu.Item>
        </Menu>
      </Header>
      <Hero />
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Anchor targetOffset={targetOffset} offsetTop={targetOffset}>
          <Link href="#hero" title={<HomeOutlined />}/>
          <Link href="#waterfall-chart" title={<RadiusSettingOutlined />}/>
          <Link href="#build" title={<CodeOutlined/>}/>
        </Anchor>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 400 }}>
          <Skeleton active />
        </div>
        <div id="waterfall-chart" style={{ padding: 24, minHeight: 1380, backgroundColor: "red" }} />
        <div id="build" style={{ padding: 24, minHeight: 1380, backgroundCOlor: "black" }} />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App;