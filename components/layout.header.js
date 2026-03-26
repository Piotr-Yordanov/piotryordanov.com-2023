import Link from "next/link";
import { RiStockLine } from "react-icons/ri";
import { GiTechnoHeart } from "react-icons/gi";
import { BiCodeAlt } from "react-icons/bi";
import { useState, useEffect } from "react";

const data = [
  {
    key: "ai",
    url: "/AI",
    icon: <GiTechnoHeart />,
    title: "AI",
  },
  {
    key: "cto",
    url: "/CTO",
    icon: <BiCodeAlt />,
    title: "cto",
  },
  {
    key: "finance",
    url: "/finance",
    icon: <RiStockLine />,
    title: "finance",
  },
  {
    key: "about",
    url: "/about",
    icon: <GiTechnoHeart />,
    title: "about",
  },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    setActiveLink(location.pathname.split("/")[1].toLowerCase());
  });

  let links = [];

  data.forEach(({ key, icon, url, title }) => {
    const active = key == activeLink ? "text-blue-500" : "";

    links.push(
      <div className="mr-4" key={title}>
        <Link href={url}>
          <div className={active}>
            <div className="text-sm cursor-pointer fill-current lg:text-sm text-copy-primary hover:text-green-500">
              {icon}
              <div className="ml-4">{title}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div>
      <div className="border-t-8 border-primary-default">
        <nav className="container flex flex-wrap items-center justify-between py-8 mx-auto">
          <div>
            <Link href="/">
              <div className="text-2xl font-bold uppercase cursor-pointer ">
                <div className="inline-block mr-2 text-primary-default">Piotr</div>
                Yordanov
              </div>
            </Link>
          </div>
          <div className="flex flex-row flex-wrap items-center w-full mt-4 font-bold uppercase lg:mt-0 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto ">
            {links}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
