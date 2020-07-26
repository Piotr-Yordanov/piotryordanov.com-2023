import React, { useState, useEffect } from 'react';
import { RadiusSettingOutlined, CodeOutlined } from '@ant-design/icons';
import { Anchor } from 'antd';
import './App.css';

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
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Anchor targetOffset={targetOffset} offsetTop={targetOffset}>
          <Link href="#music" title={<RadiusSettingOutlined />}/>
          <Link href="#code" title={<CodeOutlined/>}/>
        </Anchor>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 400 }}>
          <Skeleton active />
        </div>
        <div id="music" style={{ padding: 24, minHeight: 1380, backgroundColor: "red" }} />
        <div id="code" style={{ padding: 24, minHeight: 1380, backgroundCOlor: "black" }} />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App;