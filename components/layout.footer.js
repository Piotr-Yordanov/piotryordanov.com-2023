import { useState, useEffect } from "react";
import Grid from "./footer.grid";

import { FiLinkedin, FiYoutube, FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitch } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className="mt-14">
      <svg fill="currentColor" viewBox="0 0 1695 57" className="dark:text-gray-700 text-primary-default">
        <path d="M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1c183.6-.1 344.5 7.3 482.8 22v34H0V23z"></path>
      </svg>
      <div className="w-full dark:bg-gray-700 bg-primary-default">
        <div className="max-w-screen-md mx-auto ">
          <div className="py-16 pb-8 text-center textl-xl">
            <h2 className="mb-8 text-2xl font-bold">Let's Get In Touch</h2>
            <div className="flex justify-center">
              <a className="mx-4" target="_blank" href="https://www.youtube.com/channel/UCd5BNKWR_5tnXCwzI2bKEtw">
                <FiYoutube size={25} />
              </a>
              <a className="mx-4" target="_blank" href="https://www.instagram.com/piotr_yordanov">
                <AiOutlineInstagram size={25} />
              </a>
              <a className="mx-4 mr-6" target="_blank" href="https://www.twitch.tv/tradingcarry">
                <FaTwitch size={25} />
              </a>

              <a className="mx-4 ml-6" target="_blank" href="https://github.com/piotryordanov">
                <VscGithubAlt size={25} />
              </a>
              <a className="mx-4" target="_blank" href="https://twitter.com/piotr_yordanov">
                <FiTwitter size={25} />
              </a>
              <a className="mx-4" target="_blank" href="https://www.linkedin.com/in/piotr-yordanov">
                <FiLinkedin size={25} />
              </a>
            </div>
            <div className="mt-10 font-bold">Copyright 2021. All rights reserved.</div>
          </div>
          <div className="pb-4 overflow-x-hidden -mt-44">
            <Grid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

