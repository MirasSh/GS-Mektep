import * as React from "react";
import { Link } from "gatsby";
import logo from "../images/Gg/GSmektep.svg";
import "../style/header.css";

const menuList = [
  {
    name: 'Главная',
    id: 1,
    link: '/'
  },
  {
    name: 'Каталог',
    id: 2,
    link: '/Catalog/'
  },
  {
    name: 'О нас',
    id: 3,
    link: '/About/'
  },
  {
    name: 'Контакты',
    id: 4,
    link: '/Contact/'
  },
];

const Header = ({ siteTitle }) => (
  <>
    <div className="">
      {/* Блок меню  */}
      <div className="menu-style">
        <div className="menu">
          <Link to="/"><img className="logo1" src={logo} alt="Логотип" /></Link>
          <div className="menu-pozition">
            {menuList.map((listMenu) => (
              <nav key={listMenu.id}>
                <Link to={listMenu.link}>{listMenu.name}</Link>
              </nav>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="header-top">
      {/* Блок меню  */}
      <div className="menu-style">
        <div className="menu">
          <Link to="/"><img className="logo1" src={logo} alt="Логотип" /></Link>
          <div className="menu-pozition">
            {menuList.map((listMenu) => (
              <nav key={listMenu.id}>
                <Link to={listMenu.link}>{listMenu.name}</Link>
              </nav>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Header;
