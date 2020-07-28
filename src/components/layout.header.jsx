import React from 'react';
import { MailOutlined } from '@ant-design/icons';
import {Row, Col, Layout, Menu} from 'antd'
import {ReactComponent as ReactLogo} from './flatiron.svg';
import { withTheme } from 'styled-components';

const { Header} = Layout;

const Styles = {
    color: "white",
    fill: "white",
    textShadow: "1px 1px black"
}

export default () => (
  <Header theme="light">
    <Row style={{ maxWidth: "1024px", margin: "auto" }}>
      <Col span={8}>
          <ReactLogo width="30" style={{marginTop: "20px"}} style={Styles} />
      </Col>
      <Col span={16} align="right">
        <Menu theme="dark" mode="horizontal">
          <Menu.Item style={Styles} key="story">My Story</Menu.Item>
          <Menu.Item style={Styles} key="contact" icon={<MailOutlined />}>
            Contact
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </Header>
);