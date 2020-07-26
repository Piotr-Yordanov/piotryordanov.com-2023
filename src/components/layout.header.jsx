import React from 'react';
import { MailOutlined } from '@ant-design/icons';
import {Row, Col, Layout, Menu} from 'antd'

const { Header} = Layout;

export default () => (
    <Header theme="light">
        <Row style={{ maxWidth: "1024px", margin: "auto" }}>
            <Col span={8}>
                <img src="flatiron.svg" width="16px" height="16px" alt="logo"/>
            </Col>
            <Col span={16} align="right">
                <Menu theme="light" mode="horizontal">
                    <Menu.Item key="story" >My Story</Menu.Item>
                    <Menu.Item key="contact" icon={<MailOutlined />}>Contact</Menu.Item>
                </Menu>
            </Col>
        </Row>
    </Header>

)