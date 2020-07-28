import React from "react";
import LazyHero from "react-lazy-hero";
import { Typography, Space, Row, Divider } from "antd";
import { RadarChartOutlined } from "@ant-design/icons";
import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll'



import { Button } from "@blueprintjs/core";

const ProfilePic = styled.img`
  border-radius: 100px;
  width: 200px;;
  height: 200px;
  object-fit: cover;
  border-width: 4px;
  border-style: solid;
  border-color: #ffffff;
  box-shadow: 0 0 8px 3px #b8b8b8;
`;

const BTN = (props) => (
  <AnchorLink href={"#" + props.text}>
    <Button style={{fontSize: "22px"}} icon={props.icon} large={true} text={props.text}></Button>
  </AnchorLink>
);

const { Title } = Typography;
export default () => (
  <div id="hero">
    <LazyHero
      style={{top: "-70px"}}
      isFixed={true}
      color="#1f1f1f"
      parallaxOffset={300}
      opacity={0.7}
      minHeight="100vh"
      imageSrc="flatiron.jpg"
    >
      <ProfilePic src="avatar.jpg" />
      <br />
      <br />
      <Title style={{textShadow: "1px 1px black", color: "white"}} marginBottom="40px">Piotr Yordanov</Title>
      <Divider orientation="center" style={{ color: "#999999" }}>
        <RadarChartOutlined style={{fontSize:"32px", textShadow: "1px 1px black", color: "white"}}/>
      </Divider>
      <br />

      <Row align="center">
        <Space align="center">
          <BTN icon="waterfall-chart" text="Trader" />
          <BTN icon="build" text="Entrepreneur" />
          <BTN icon="code" text="Coder" />
        </Space>
      </Row>
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
