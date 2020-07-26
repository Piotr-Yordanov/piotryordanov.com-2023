import React from 'react';
import { Icon} from "@blueprintjs/core";


import { Anchor } from 'antd';

const { Link } = Anchor;
export default (props) => (
    <Anchor targetOffset={props.targetOffset} offsetTop={props.targetOffset} style={{maxWidth:"50px"}}>
        <Link href="#hero" title={<Icon icon="home"/>}/>
        <Link href="#Trader" title={<Icon icon="waterfall-chart" />} />
        <Link href="#Entrepreneur" title={<Icon icon="build" />} />
        <Link href="#Coder" title={<Icon icon="code" />} />
        <Link href="#Meditator" title={<img src="meditation.svg" alt="meditation"/>} />
        <Link href="#Writer" title={<Icon icon="edit" />} />
        <Link href="#Musician" title={<Icon icon="music" />} />
    </Anchor>
)