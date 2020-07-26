import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Typography } from 'antd';
import styled from 'styled-components';

import { Button, Icon } from "@blueprintjs/core";


import { black } from '@ant-design/colors';

const ProfilePic = styled.img`
    border-radius: 100px;
    width: 160px;
    height: 160px;
    object-fit: cover;
    margin-bottom: 40px;
`

const BTN = (props) =>
    <a href={"#" + props.icon} style={{"textDecoration": "none"}}>
        <Button icon={props.icon} large={true} text={props.text} style={{"marginRight": "20px"}}/>
    </a>


const { Title } = Typography;
export default () => (
    <LazyHero id="hero" style={{marginTop: "-60px"}} isFixed={true} parallaxOffset={100} opacity={0.9} minHeight="100vh" imageSrc="flatiron.jpg">
        <ProfilePic src="avatar.jpg"/>
        <Title >Piotr Yordanov</Title>
        <Title level={2} style={{color: "#4a4a4a"}}>Piotr Yordanov</Title>

        
        <BTN icon="waterfall-chart" text="Trader"/>
        <BTN icon="build" text="Coder" />
        <BTN icon="pen" text="Writer" />
        <BTN icon="music" text="Meditator" />
        <BTN icon="music" text="Meditator" />

    </LazyHero>
);