import React from "react";
import { Row, Divider, Typography} from "antd";

const { Title, Paragraph, Text } = Typography;

export default () => (
  <>
    <Row id="Entrepreneur" align="center">
      <Typography>
        <Title>Startups</Title>
        <Paragraph style={{ maxWidth: "1024px" }}>
          I am currently the co-founder of <a href="https://sila.today" target="_blank">Sila</a>, an agency specialized in created websites and e-commerce stores.
        </Paragraph>
        <Paragraph style={{ maxWidth: "1024px" }}>
            My entrepreneurial journey goes back a long way, with my first startup co-founded in early 2013. The journey was not always easy, but it sure was quite rewarding.
            I have worked on a total of 7 different startups, all of which did not succeed.
        </Paragraph>
        <Paragraph style={{ maxWidth: "1024px" }}>
            However, I am currently working on a new one. 
        </Paragraph>
      </Typography>
      <Divider style={{ margin: "100px 0",borderColor: "#d2d2d2" }} />
    </Row>
  </>
);
