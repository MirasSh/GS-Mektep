import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Header from "./header"
import Messege from "./Messege"
import Contacts from "./Contacts"
import "../style/layout.css"
import "../style/Adaptation.css"

// импорт лого
import Company1 from "../images/company/a837e83904c5a74c820fc24572b83e51-1.png"
import Company2 from "../images/company/Acer_logo_logotype_emblem-2048x490.png"
import Company3 from "../images/company/Asus-Logo-2048x1152.png"
import Company4 from "../images/company/avtech_logo-600x148.png"
import Company5 from "../images/company/cooltool_logo-1.png"
import Company6 from "../images/company/8z9kangg32oy395zvthxwq2cofcc9t9h.png"
import Company7 from "../images/company/lego-logo-png-9-300x300.png"
import Company8 from "../images/company/logo_horizontal-2c76d65ddf-600x214.png"
import Company9 from "../images/company/logo_p1-600x213.png"
import Company10 from "../images/company/logo_roqed-600x128.png"
import Company11 from "../images/company/logo5.png"
import Company12 from "../images/company/logo-gigo-1.png"
import Company13 from "../images/company/modular-robotics-Cubelets_black-600x158.png"
import Company14 from "../images/company/zmorph_logo-1-1.png"
import Company15 from "../images/company/zspace-600x167.png"
import Projects from "./Projects"

import Star from "../images/icon/starburst.png"
import Many from "../images/icon/icons.png"
import Iconmessege from "../images/icon/free-icon-dialogue-4542697.png"
import Docum from "../images/icon/free-icon-accept-5266833.png"
import Aboutcompany from "./About-company"
import Catalogcomponent from "./Catalog-component"
import WatsapComponent from "./WatsapComponent"

const Slide = () => (
  <div className="bag">
    <div className="bloc-80 width70">
      <div className="body-width">
        <div className="size-spisok">
          <div className="text-main">
            <h1 className="margin20">GSMektep </h1>
          </div>
          <div className="about-us">
            <div>
              <div>
                <h5 className="text-small color2 width70">
                  Ваш партнер в образовании от Группы компаний AltynJuldyz.
                  Лидер среди поставщиков для образовательных учреждений в
                  Казахстане.
                </h5>
              </div>
            </div>
            <div className="image-container"></div>
          </div>
          <div>
            <button className="button-atom top-atom ">
              <a className="text-dairection" href="#Consultation">
                ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)
const Slide2 = () => (
  <div className="bag">
    <div className="bloc-80 width70">
      <div className="body-width">
        <div className="size-spisok">
          <div className="text-main">
            <h1 className="margin20">GSMektep </h1>
          </div>
          <div className="about-us">
            <div>
              <div>
                <h5 className="text-small color2 width70">
                  Сіздің білім беру серіктесіңіз AltynJuldyz компания тобының,
                  Қазақстандағы білім беру мекемелері үшін жеткізушілер арасында
                  басшысы.
                </h5>
              </div>
            </div>
            <div className="image-container"></div>
          </div>
          <div>
            <button className="button-atom top-atom ">
              <a className="text-dairection" href="#Consultation">
                КЕҢЕС АЛУ
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)
const Slide3 = () => (
  <div className="bag">
    <div className="bloc-80 width70">
      <div className="body-width">
        <div className="size-spisok">
          <div className="text-main">
            <h1 className="margin20">GSMektep </h1>
          </div>
          <div className="about-us">
            <div>
              <div>
                <h5 className="text-small color2 width70">
                  Your partner in education from the AltynJuldyz Group of
                  Companies. The leader among suppliers for educational
                  institutions in Kazakhstan.
                </h5>
              </div>
            </div>
            <div className="image-container"></div>
          </div>
          <div>
            <button className="button-atom top-atom ">
              <a className="text-dairection" href="#Consultation">
                CONSULTATION
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  pauseOnHover: false,
}
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        {/* Header проекта */}
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        {/* Начало сайта */}
        <Slider {...settings}>
          <Slide />
          <Slide2 />
          <Slide3 />
        </Slider>
        {/* Сотрудничество с нами */}
        <div className="top5 buttom">
          <div>
            <div className="flex-spicok2 width15">
              <div className="blok-about">
                <div className="max-80 auto-flex ">
                  <img className="width20" alt="" src={Star}></img>
                  <p className="rem09">Мирас</p>
                </div>
              </div>
              <div className="blok-about">
                <div className="max-80 auto-flex">
                  <img className="width20" alt="" src={Many}></img>
                  <p>Выгодные условия сотрудничества</p>
                </div>
              </div>
              <div className="blok-about">
                <div className="max-80 auto-flex">
                  <img className="width20" alt="" src={Iconmessege}></img>
                  <p>Поддержка и консультация</p>
                </div>
              </div>
              <div className="blok-about">
                <div className="max-80 auto-flex">
                  <img className="width20" alt="" src={Docum}></img>
                  <p className="">Юридическая поддержка</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Каталог  GSMektep*/}
        <Catalogcomponent />
        {/* Сообщение  */}
        <div className="bloc-bagraund">
          <div className="bloc-80">
            <Messege />
          </div>
        </div>
        {/* Поизводители  GSMektep*/}
        <div>
          <div className="bacground2 bloc-80">
            <div className="size-spisok">
              <h1 className="left-3 top5 color font-sizw-catalog">
                Производители
              </h1>
              <div className="flex-spicok">
                <div className="flex-column">
                  <div className="container2">
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company1}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company2}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company3}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company5}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company4}
                      ></img>
                    </div>
                  </div>
                  <div className="container2">
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company6}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company7}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company8}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company9}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company10}
                      ></img>
                    </div>
                  </div>
                  <div className="container2">
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company11}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company12}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company13}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company14}
                      ></img>
                    </div>
                    <div className="widht-110">
                      <img
                        className="width15 widht-100"
                        alt=""
                        src={Company15}
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* О нашей компаний */}
        <Aboutcompany />
        {/* Блок Наши другие проекты*/}
        <Projects />
        <p className="color-none bacground2 super bloc-80"></p>
        {/* Пробел и ватсап */}
        <WatsapComponent />
        {/* Контакты */}
        <Contacts />
      </div>
    </>
  )
}

export default Layout
