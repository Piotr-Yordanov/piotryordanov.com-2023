import React from "react";
import { Row, Divider, Typography} from "antd";

const { Title, Paragraph, Text } = Typography;

export default () => (
  <>
    <Row id="Entrepreneur" align="center">
      <Typography>
        <Title>Entrepreneurship</Title>
        <Paragraph style={{ maxWidth: "1024px" }}>
            My entrepreneurial journey goes back a long way, with my first startup co-founded in early 2013. The journey was not always easy, but it sure was quite rewarding.
        </Paragraph>
      </Typography>
      <Divider style={{ margin: "100px 0",borderColor: "#d2d2d2" }} />
    </Row>
  </>
);
