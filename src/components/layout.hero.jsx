import React from "react";
import LazyHero from "react-lazy-hero";
import { Typography, Space, Row, Divider } from "antd";
import { RadarChartOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { Button } from "@blueprintjs/core";

const ProfilePic = styled.img`
  border-radius: 100px;
  width: 160px;
  height: 160px;
  object-fit: cover;
`;

const BTN = (props) => (
  <a href={"#" + props.text} style={{ textDecoration: "none" }}>
    <Button icon={props.icon} large={true} text={props.text} />
  </a>
);

const { Title } = Typography;
export default () => (
  <div id="hero">
    <LazyHero
      style={{ marginTop: "-60px" }}
      isFixed={true}
      parallaxOffset={100}
      opacity={0.9}
      minHeight="100vh"
      imageSrc="flatiron.jpg"
    >
      <ProfilePic src="avatar.jpg" />
      <Title marginBottom="40px">Piotr Yordanov</Title>
      <Divider orientation="center" style={{ color: "#999999" }}>
        <RadarChartOutlined />
      </Divider>

      <Row align="center">
        <Space align="center">
          <BTN icon="waterfall-chart" text="Trader" />
          <BTN icon="code" text="Coder" />
          <BTN icon="build" text="Entrepreneur" />
        </Space>
      </Row>
      <br />
      <br />
      <Row align="center">
        <Space>
          <BTN icon={<img src="meditation.svg" alt="meditation"/>} text="Meditator" />
          <BTN icon="edit" text="Writer" />
          <BTN icon="music" text="Musician" />
        </Space>
      </Row>
    </LazyHero>
  </div>
);
