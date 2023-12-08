import { useState, useEffect } from "react";
import { SectionCard } from "./SectionCard";
import { SectionCardContent } from "./SectionCardContent";
import { SectionCardIcon } from "./SectionCardIcon";

import Button from "./Button";

const Scalping = () => (
  <svg className="h-8" enableBackground="new 0 0 511.951 511.951" viewBox="0 0 511.951 511.951" width="512" xmlns="http://www.w3.org/2000/svg">
    {" "}
    <g>
      <path d="m88.358 183.819h-21.678v-93.21c0-8.284-6.716-15-15-15s-15 6.716-15 15v93.21h-21.68c-8.284 0-15 6.716-15 15v112.478c0 8.284 6.716 15 15 15h21.68v21.682c0 8.284 6.716 15 15 15s15-6.716 15-15v-21.682h21.679c8.284 0 15-6.716 15-15v-112.478c-.001-8.284-6.716-15-15.001-15zm-15 112.478h-43.358v-82.478h43.358z" />
      <path d="m224.555 295.082h-21.679v-21.682c0-8.284-6.716-15-15-15s-15 6.716-15 15v21.682h-21.68c-8.284 0-15 6.716-15 15v73.356c0 8.284 6.716 15 15 15h21.68v22.904c0 8.284 6.716 15 15 15s15-6.716 15-15v-22.904h21.679c8.284 0 15-6.716 15-15v-73.356c0-8.284-6.716-15-15-15zm-15 73.357h-43.358v-43.356h43.358z" />
      <path d="m360.753 221.719h-21.679v-21.681c0-8.284-6.716-15-15-15s-15 6.716-15 15v21.681h-21.68c-8.284 0-15 6.716-15 15v73.356c0 8.284 6.716 15 15 15h21.679v96.268c0 8.284 6.716 15 15 15s15-6.716 15-15v-96.268h21.679c8.284 0 15-6.716 15-15v-73.356c.001-8.284-6.715-15-14.999-15zm-15 73.356h-43.358v-43.356h43.358z" />
      <path d="m496.951 112.29h-21.68v-21.682c0-8.284-6.716-15-15-15s-15 6.716-15 15v21.682h-21.679c-8.284 0-15 6.716-15 15v109.429c0 8.284 6.716 15 15 15h21.679v59.578c0 8.284 6.716 15 15 15s15-6.716 15-15v-59.578h21.68c8.284 0 15-6.716 15-15v-109.429c0-8.284-6.716-15-15-15zm-15 109.429h-43.358v-79.429h43.358z" />
    </g>{" "}
  </svg>
);
const Algo = () => (
  <svg className="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512">
    <g id="monitor-display-bitcoin">
      <path d="M59,7H41.21A10.982,10.982,0,0,0,22.79,7H5a3.009,3.009,0,0,0-3,3V45a3.009,3.009,0,0,0,3,3H27v6H21a1,1,0,0,0-1,1v5H18v2H46V60H44V55a1,1,0,0,0-1-1H37V48H59a3.009,3.009,0,0,0,3-3V10A3.009,3.009,0,0,0,59,7ZM32,4a9,9,0,1,1-9,9A9.014,9.014,0,0,1,32,4ZM42,56v4H22V56ZM29,54V48h6v6Zm31-9a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10A1,1,0,0,1,5,9H21.76A11,11,0,1,0,42.24,9H59a1,1,0,0,1,1,1Z" />
      <path d="M16,26H14V23H12v3H10a1,1,0,0,0-1,1V37a1,1,0,0,0,1,1h2v3h2V38h2a1,1,0,0,0,1-1V27A1,1,0,0,0,16,26ZM15,36H11V28h4Z" />
      <path d="M28,29H26V26H24v3H22a1,1,0,0,0-1,1V40a1,1,0,0,0,1,1h2v3h2V41h2a1,1,0,0,0,1-1V30A1,1,0,0,0,28,29ZM27,39H23V31h4Z" />
      <path d="M42,26H40V23H38v3H36a1,1,0,0,0-1,1V37a1,1,0,0,0,1,1h2v3h2V38h2a1,1,0,0,0,1-1V27A1,1,0,0,0,42,26ZM41,36H37V28h4Z" />
      <path d="M54,29H52V26H50v3H48a1,1,0,0,0-1,1V40a1,1,0,0,0,1,1h2v3h2V41h2a1,1,0,0,0,1-1V30A1,1,0,0,0,54,29ZM53,39H49V31h4Z" />
      <path d="M37,11a3.01,3.01,0,0,0-2-2.82V7H33V8H31V7H29V8H27v2h1v6H27v2h2v1h2V18h2v1h2V17.82A3.01,3.01,0,0,0,37,15a2.974,2.974,0,0,0-.78-2A2.974,2.974,0,0,0,37,11Zm-3,5H30V14h4a1,1,0,0,1,0,2Zm0-4H30V10h4a1,1,0,0,1,0,2Z" />
    </g>
  </svg>
);
const Streaming = () => (
  <svg className="h-8" viewBox="-16 0 512 512.00113" width="512pt" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="m262.84375 140.558594c-12.699219 12.671875-33.28125 12.671875-45.980469 0-12.695312-12.671875-12.695312-33.21875 0-45.890625 12.699219-12.671875 33.28125-12.671875 45.980469 0 12.695312 12.671875 12.695312 33.21875 0 45.890625zm0 0" />
      <path d="m307.257812 189.726562c-3.960937 0-7.921874-1.511718-10.9375-4.539062-6.03125-6.039062-6.019531-15.824219.019532-21.851562 12.238281-12.214844 18.976562-28.453126 18.976562-45.722657s-6.738281-33.507812-18.976562-45.722656c-6.039063-6.03125-6.050782-15.8125-.019532-21.855469 6.027344-6.039062 15.8125-6.050781 21.851563-.019531 18.089844 18.054687 28.050781 42.058594 28.050781 67.597656 0 25.535157-9.960937 49.542969-28.050781 67.597657-3.015625 3.011718-6.964844 4.515624-10.914063 4.515624zm0 0" />
      <path d="m342.210938 235.222656c-3.960938 0-7.921876-1.511718-10.9375-4.535156-6.03125-6.042969-6.019532-15.824219.019531-21.855469 24.414062-24.367187 37.863281-56.761719 37.863281-91.21875s-13.449219-66.851562-37.863281-91.21875c-6.039063-6.03125-6.050781-15.8125-.019531-21.855469 6.03125-6.039062 15.8125-6.050781 21.851562-.019531 30.265625 30.207031 46.9375 70.371094 46.933594 113.09375 0 42.722657-16.667969 82.890625-46.933594 113.097657-3.015625 3.007812-6.964844 4.511718-10.914062 4.511718zm0 0" />
      <path d="m172.371094 189.726562c-3.949219 0-7.898438-1.503906-10.917969-4.515624-18.089844-18.054688-28.050781-42.0625-28.050781-67.597657 0-25.539062 9.960937-49.542969 28.050781-67.597656 6.039063-6.03125 15.824219-6.023437 21.851563.019531 6.03125 6.039063 6.019531 15.824219-.019532 21.855469-12.238281 12.214844-18.976562 28.453125-18.976562 45.722656s6.738281 33.507813 18.976562 45.722657c6.039063 6.027343 6.050782 15.8125.019532 21.851562-3.015626 3.023438-6.976563 4.539062-10.933594 4.539062zm0 0" />
      <path d="m137.417969 235.222656c-3.953125 0-7.902344-1.503906-10.917969-4.515625-30.265625-30.207031-46.933594-70.371093-46.933594-113.09375 0-42.726562 16.667969-82.890625 46.933594-113.097656 6.039062-6.027344 15.824219-6.019531 21.851562.023437 6.03125 6.039063 6.019532 15.820313-.019531 21.851563-24.414062 24.367187-37.863281 56.761719-37.863281 91.21875s13.449219 66.855469 37.863281 91.222656c6.039063 6.03125 6.050781 15.8125.019531 21.855469-3.015624 3.023438-6.976562 4.535156-10.933593 4.535156zm0 0" />
      <path d="m443.480469 261.9375h-407.332031c-19.964844 0-36.148438 16.183594-36.148438 36.144531v177.769531c0 19.964844 16.183594 36.148438 36.148438 36.148438h407.328124c19.964844 0 36.148438-16.183594 36.148438-36.148438v-177.769531c0-19.960937-16.183594-36.144531-36.144531-36.144531zm-324.609375 203.683594h-56.933594c-8.53125 0-15.449219-6.917969-15.449219-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.449219-15.453125 8.535156 0 15.453125 6.917969 15.453125 15.453125v110.945313h41.480469c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125zm63.328125-15.453125c0 8.535156-6.917969 15.453125-15.453125 15.453125s-15.453125-6.917969-15.453125-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.453125-15.453125s15.453125 6.917969 15.453125 15.453125zm130.015625-121.929688-38.160156 126.394531c-.003907.011719-.007813.023438-.011719.035157-4.144531 14.144531-25.273438 13.796875-29.5625 0-.003907-.011719-.007813-.023438-.011719-.035157l-38.160156-126.394531c-2.464844-8.171875 2.15625-16.792969 10.328125-19.261719 8.164062-2.464843 16.792969 2.15625 19.257812 10.328126l23.367188 77.394531 23.367187-77.394531c2.46875-8.171876 11.089844-12.796876 19.261719-10.328126 8.167969 2.46875 12.792969 11.089844 10.324219 19.261719zm95.066406 35.320313c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.53125-6.917969 15.453125-15.453125 15.453125h-43.851562v40.25h52.175781c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125h-67.628907c-8.535156 0-15.453124-6.917969-15.453124-15.453125v-126.398438c0-8.53125 6.917968-15.453125 15.453124-15.453125h69.710938c8.53125 0 15.453125 6.917969 15.453125 15.453125 0 8.535157-6.921875 15.453125-15.453125 15.453125h-54.261719v24.335938zm0 0" />
    </g>
  </svg>
);

// <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
//   <SectionCard>
//     <SectionCardIcon bg="bg-green-100" text="text-green-500" SVG={Algo} />
//     <SectionCardContent
//       title="Resarch"
//       content="Every investor has a different risk tolerance and goals. Thus, they should choose a trading strategy that is uniquely tailord to their profile. I help you find the strategy that best matches what you are looking for, from Market making, HFT, to directional trading."
//     />
//   </SectionCard>
//   <SectionCard>
//     <SectionCardIcon bg="bg-blue-100" text="text-blue-500" SVG={Scalping} />
//     <SectionCardContent
//       title="Backtesting"
//       content="Trading strategies are not mean to win all the time, but it is a probablities game. With "
//     />
//   </SectionCard>
//   <SectionCard>
//     <SectionCardIcon bg="bg-yellow-100" text="text-yellow-500" SVG={Streaming} />
//     <SectionCardContent
//       title="Execution"
//       content="I originally wanted to record my trading in order to learn from my mistakes. This eventually morphed into a desire to stream the trading for educational and fun purposes."
//     />
//   </SectionCard>
// </div>
//
const SectionIntroTitle = ({ title, content }) => {
  return (
    <div className="mb-20 text-left">
      <h1 className="mb-4 text-center text-4xl font-extrabold leading-10 tracking-tight  title-font sm:text-5xl sm:leading-none md:text-6xl">
        {title}
      </h1>
      <p className="mx-auto text-base leading-relaxed lg:w-3/4">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </p>
      <div className="flex justify-center mt-6">
        <div className="inline-flex w-16 h-1 bg-indigo-500 rounded-full"></div>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <section className="">
      <div className="max-w-6xl px-5 pt-24 pb-12 mx-auto">
        <SectionIntroTitle
          title="Piotr Yordanov"
          content="Born and Raised in Lebanon, of Russian origins, <i>Piotr Yordanov</i> started his entreprenrial journey right after finishing his engineering studies at the American University of Beirut.
<br/>We filled in the role of CTO and full stack developper at multiple ventures, first in Lebanon, then in San Fransisco, and finally remotely.
<br/>In 2013, he crowdfuned 8,000$ to fund his participation in Draper University, a 7 weeks entrepreneurship program in Silicon Valley, where he bought his first bitcoin.
<br/>In 2015, he moved to South East Asia, and embraced the life of a digital nomad, working remotely for multiple startups.
<br/>In 2017, with the crypto bull market in sight, he got into trading, first by doing crypto arbitrage, then by trading altcoins, and finally by trading bitcoin futures.
<br/>This introduction to trading got him excited about the idea of automating trading strategies. So, he dived into studying technicaly analysis, and the financial market structures.
<br/>In 2018, he made his first move into algorithmic trading, by building an advanced backtesting enginer.
<br/>In 2020, he started working with various prop trading firms.
<br/>In 2022, he moved to France and pursued an MBA in financial markets in Paris.
<br/>In 2023, he moved to Dubai where he put all his years of experience to research, backtest, and build fully automated tradings strategies."
        />
      </div>
    </section>
  );
};

export default Content;
