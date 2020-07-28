import React from "react";
import { Row, Divider, Typography} from "antd";

const { Title, Paragraph, Text } = Typography;

export default () => (
  <>
    <Row id="Trader" align="center">
      <Typography>
        <Title>Trading</Title>
        <Paragraph style={{ maxWidth: "1024px" }}>
          Since 2017, I have expressed a great interest in trading the fincial
          markets. I am fascinated by the pattern recognition skills required to
          spot potential formations on a chart.
        </Paragraph>
        <Paragraph style={{ maxWidth: "1024px" }}>
          In the beginning, I traded using all sorts of indicators like the <Text code>RSI</Text> or the <Text code>MACD</Text>
          My goal was the build a trading bot, but it took me almost a full year to realize that my lack of trading experience was a problem.
          So, I decided to forget about algo-trading for a moment, and focus on manual trading.
        </Paragraph>
        <Paragraph style={{ maxWidth: "1024px" }}>
            The biggest challenge I faced them was not about finding a winning system, but facing the <i>emotions</i> <b>fear</b> and <b>greed</b> .
            It can be experienced in the form of <i> revenge trading </i>, or killing winners too early out of fear of losing the profit.
        </Paragraph>
        <Paragraph style={{ maxWidth: "1024px" }}>
            Eventually, my practice became focused on pure price action reading. The idea is to look at a chart, and develop a hunch of
            which areas will be respected and tested by the market. The picture below was from <i>Jan 6, 2020</i>, the third day when I traded with real $$.
            In it, you can see a head and shoulder top reversing before it touches a prior resistance tuned support. 
            The pattern is just beautiful to spot as it forms.
            <br/>
            Do note that this is a 33ticks chart,  meaning that the bulk of the action happened in less than a few minutes. 
            This opens up the discussion on the <i>fractal</i> nature of the markets, but also about life.
        </Paragraph>
      </Typography>
      <br/>
      <img width="80%" src="trading.png" />
      <Divider style={{ margin: "100px 0",borderColor: "#d2d2d2" }} />
    </Row>
  </>
);
