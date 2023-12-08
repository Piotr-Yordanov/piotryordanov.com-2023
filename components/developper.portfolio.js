import { useState, useEffect } from "react";
import data from "./developper.portfolio.data";
import Image from "next/image";
import Title from "./SectionTitle";

const Card = ({ url, img, title, description, stack }) => {
  console.log(stack);
  return (
    <a href={url} className="w-full lg:w-1/3" target="_blank">
      <div className="mx-4 my-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="object-cover object-center w-full h-48">
          <Image src={img} width={302} height={192} layout="responsive" />
        </div>
        <div className="px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{title}</h1>
          <p className="py-2 text-lg text-gray-700 dark:text-gray-300">{description}</p>
          <div className="flex justify-center my-6">
            <div className="inline-flex w-16 h-1 bg-indigo-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </a>
  );
};

const Portfolio = () => {
  let cards = [];
  data.forEach((card) => {
    cards.push(<Card img={`/${card.title}.png`} {...card} />);
  });

  return (
    <div className="mx-auto container-inner">
      <Title title="Portfolio" content="A list of the projects I worked on" />
      <div className="flex flex-col flex-nowrap lg:flex-row lg:flex-wrap">{cards}</div>
    </div>
  );
};

export default Portfolio;

