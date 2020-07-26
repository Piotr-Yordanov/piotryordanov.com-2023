import React from "react";
import { Row, Divider, Typography} from "antd";

const { Title, Paragraph, Text } = Typography;

export default () => (
  <>
    <Row id="Meditator" align="center">
      <Typography>
        <Title>Meditation</Title>
        <Paragraph style={{ maxWidth: "1024px" }}>
            I had studied Christian philosophy, but never found in it an answer to my problems.
            But, when I first read about Mindfulness meditation around <i>May 2017</i>, it was struck with how practical and scientific it was.
        </Paragraph>
        <Paragraph style={{ maxWidth: "1024px" }}>
            It wasn't until October 2018, that I attended my first silent Vipassana retreat in Chiang Mai, Thailand.
            Then, I did 4 solo weekend retreats at the same ashram. Then I did another Vipassana retreat right before christmas.
            These 3 months have had a tremendous impact both on my practice and apreciation of buddhism, but also on my life.
        </Paragraph>
      </Typography>
      <img src="monk-meditation.jpg"  height="512"/>
      <Divider style={{ margin: "100px 0",borderColor: "#d2d2d2" }} />
    </Row>
  </>
);
