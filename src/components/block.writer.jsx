import React from "react";
import { Row, Divider, Typography} from "antd";

const { Title, Paragraph, Text } = Typography;

export default () => (
  <>
    <Row id="Writer" align="center">
      <Typography>
        <Title>Writing</Title>
        <Paragraph style={{ maxWidth: "1024px" }}>
            I have always found an affinity with words, and using them to paint a complete picture of topics I am interested in.
            Writing has also had an incredible therapeutic role in my life. Along with mindfulness meditation, it helped me heal 
            deep trauma and wounds from childhood, family, country, and entreprenurship path.
            <br/>
            Today, I keep track of all information I gather in a <b>Second Brain</b> system.
        </Paragraph>
        <Paragraph style={{ maxWidth: "1024px" }}>
            Back in 2016, after I quit startups, I decided to try out a career as a writer. This lead to the release of short stories
            under the title of Tinderland. The following text the preamble from a fiction story I was writing.
            The idea was to serialized <i>Bedtime Stories</i> and share them with the public for entertainment.
            <br/>
            <br/>
        </Paragraph>
      </Typography>
      <img src="writing.png"  width="80%"/>
      <Divider style={{ margin: "100px 0",borderColor: "#d2d2d2" }} />
    </Row>
  </>
);
