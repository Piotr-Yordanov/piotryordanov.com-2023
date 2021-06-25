import Link from "next/link"
import Toggle from "./theme.toggle"
import { GoogleFonts } from "next-google-fonts"
import { RiStockLine } from "react-icons/ri"
import { BiCodeAlt } from "react-icons/bi"
import { FaChess } from "react-icons/fa"
import Meditation from "./MeditationSVG"
import { useState, useEffect } from "react"
import classnames from "classnames"

const data = [
  {
    url: "/scalper",
    icon: <RiStockLine />,
    title: "scalper",
  },
  {
    url: "/developper",
    icon: <BiCodeAlt />,
    title: "developper",
  },
  {
    url: "/meditator",
    icon: <Meditation />,
    title: "meditator",
  },
  {
    url: "/#hobbies",
    icon: <FaChess />,
    title: "hobbies",
  },
]

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  useEffect(() => {
    setActiveLink(location.pathname.split("/")[1])
  })

  let links = []

  data.forEach(({ icon, url, title }) => {
    const active = title == activeLink ? "text-blue-500" : ""

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
    )
  })
  return (
    <div>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;700&display=swap" />
      <div className="border-t-8 border-primary-default">
        <nav className="container flex flex-wrap items-center justify-between py-8 mx-auto">
          <div>
            <Link href="/">
              <div className="text-2xl font-bold uppercase cursor-pointer ">
                <div className="inline-block mr-2 text-primary-default">
                  Piotr
                </div>
                Yordanov
              </div>
            </Link>
          </div>
          <div className="flex flex-row flex-wrap items-center w-full mt-4 font-bold uppercase lg:mt-0 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto ">
            {links}
            <div key={0}>
              <Toggle />
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header

