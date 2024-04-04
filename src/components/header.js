import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/Frame 6.svg"
import Kaz from "../images/Kaz.png"
import Ru from "../images/Ru.png"
import Ame from "../images/Ame.png"
import "../style/header.css"
import { Helmet } from "react-helmet"

const menuList = [
  {
    name: "Главная",
    id: 1,
    link: "/",
  },
  {
    name: "Каталог",
    id: 2,
    link: "/Catalog/",
  },
  {
    name: "О нас",
    id: 3,
    link: "/About/",
  },
  {
    name: "Контакты",
    id: 4,
    link: "/Contact/",
  },
]

const Header = ({ siteTitle }) => {
  const toggleMenu = () => {
    const menuPosition = document.querySelector(".menu-position")
    menuPosition.classList.toggle("show")
  }

  return (
    <>
      <div className="menu-style">
        <Helmet>
          <title>GSMektep</title>
          <link rel="icon" type="image/png" href={logo} sizes="16x16" />
          <link rel="icon" type="image/png" href={logo} sizes="32x32" />
        </Helmet>
        <div className="header-top center1">
          <div
            className="burger-menu-container"
            onClick={toggleMenu}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === "Space") {
                toggleMenu()
              }
            }}
            role="button"
            tabIndex="0"
          >
            {" "}
            <div className="burger-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          {/* Блок меню  */}
          <div className="menu center1">
            <Link to="/">
              <img className="logo1" src={logo} alt="Логотип" />
            </Link>

            <div className="menu-pozition">
              {menuList.map(listMenu => (
                <nav key={listMenu.id}>
                  <Link to={listMenu.link}>{listMenu.name}</Link>
                </nav>
              ))}
            </div>
            <div className="flex5 center1">
              <Link to="/">
                <img className="logo2" src={Kaz} alt="Логотип" />
              </Link>
              <Link to="/">
                <img className="logo2" src={Ru} alt="Логотип" />
              </Link>
              <Link to="/">
                <img className="logo2" src={Ame} alt="Логотип" />
              </Link>
            </div>
          </div>

          <div className="menu-position none">
            {menuList.map(listMenu => (
              <nav key={listMenu.id}>
                <Link to={listMenu.link}>{listMenu.name}</Link>
              </nav>
            ))}
          </div>
        </div>
      </div>
      <div className="menu-style">
        <Helmet>
          <title>GSMektep</title>
          <link rel="icon" type="image/png" href={logo} sizes="16x16" />
          <link rel="icon" type="image/png" href={logo} sizes="32x32" />
        </Helmet>
        <div className="center1">
          <div
            className="burger-menu-container"
            onClick={toggleMenu}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === "Space") {
                toggleMenu()
              }
            }}
            role="button"
            tabIndex="0"
          >
            {" "}
            <div className="burger-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          {/* Блок меню  */}
          <div className="menu center1">
            <Link to="/">
              <img className="logo1" src={logo} alt="Логотип" />
            </Link>

            <div className="menu-pozition">
              {menuList.map(listMenu => (
                <nav key={listMenu.id}>
                  <Link to={listMenu.link}>{listMenu.name}</Link>
                </nav>
              ))}
            </div>
            <div className="flex5 center1">
              <Link to="/">
                <img className="logo2" src={Kaz} alt="Логотип" />
              </Link>
              <Link to="/">
                <img className="logo2" src={Ru} alt="Логотип" />
              </Link>
              <Link to="/">
                <img className="logo2" src={Ame} alt="Логотип" />
              </Link>
            </div>
          </div>

          <div className="menu-position none">
            {menuList.map(listMenu => (
              <nav key={listMenu.id}>
                <Link to={listMenu.link}>{listMenu.name}</Link>
              </nav>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
