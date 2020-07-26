import React from "react";
import { Row, Divider, Typography} from "antd";

const { Title, Paragraph, Text } = Typography;

export default () => (
  <>
    <Row id="Coder" align="center">
      <Typography>
        <Title>Coding</Title>
        <Paragraph style={{ maxWidth: "1024px" }}>
            My first line of code was running:
            <Text code>color 2; tree;</Text> on a windows terminal, and pretending I hacked the matrix. 
            Ever since, my passion for computers grew. I installed <b>arch</b> linux on desktop, laptop and macs. 
            I tweaked every details of <b>vim</b> and my <b>~/.config</b>, and even went as far as controlling the fan of my computer from terminal!
        </Paragraph>
        <Paragraph style={{ maxWidth: "1024px" }}>
            But, simple hacks wasn't all I did. I invested time and energy to learn how to build web apps from the ground app.
            This came in quite handy in my entrepreneurial journey.
        </Paragraph>
        <Paragraph style={{ maxWidth: "1024px" }}>
            Today, I have over 10 years of experience building profressional web apps. I am also investing time to learn solidity development.
        </Paragraph>
      </Typography>
      <Divider style={{ margin: "100px 0",borderColor: "#d2d2d2" }} />
    </Row>
  </>
);
