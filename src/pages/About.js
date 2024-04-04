import React from "react"
import Header from "../components/header"
import Contacts from "../components/Contacts"
import Star from "../images/icon/starburst.png"
import Many from "../images/icon/icons.png"
import Iconmessege from "../images/icon/free-icon-dialogue-4542697.png"
import Docum from "../images/icon/free-icon-accept-5266833.png"

import Projects from "../components/Projects"
// import Aboutcompany from '../components/About-company'
import WatsapComponent from "../components/WatsapComponent"
export default function About() {
  return (
    <>
      <Header />
      <div>
        {/* О нашей компаний */}
        <div>
          <div className="bacground2  aboutbagrounds">
            <div className="size-spisok">
              <h1 className="left-3 top3 font-sizw-catalog">
                О нашей компаний
              </h1>
            </div>
          </div>
        </div>
        {/* Краткая информация */}
        <div>
          <div className="bloc-80 header90">
            <div className="about-us flex flexdirection2 ">
              <div className="size-spisok wiaht-100">
                <div className="bloc-80">
                  <h1 className="color font-sizw-about wrap">
                    Краткая информация
                  </h1>
                </div>
                <div className="bloc-80">
                  <div className="flex-text ">
                    <p className="top5 color smoll3">
                      «GS Mektep» — занимается поставкой инновационных товаров
                      для образовательных технологий, которая входит в группу
                      компании «ALTYN JULDYZ».
                      <br /> Мы продолжаем содействовать развитию нашей страны,
                      предоставляя высококачественные решения для
                      образовательных учреждений.
                      <br />В рамках этого направления, мы предлагаем широкий
                      ассортимент товаров, включая современные интерактивные
                      технологии, образовательное программное обеспечение,
                      учебную мебель и другие инновационные продукты.
                    </p>
                  </div>
                </div>
                <div className="bloc-80">
                  <div className="flex-text ">
                    <p className="top5 color smoll3">
                      Наши современные интерактивные технологии помогают сделать
                      учебный процесс более увлекательным и эффективным. Это
                      включает в себя интерактивные доски, обучающие приложения,
                      виртуальные лаборатории и другие инструменты, которые
                      стимулируют активное участие студентов в учебном процессе.
                    </p>
                  </div>
                </div>
              </div>
              <div className="top5 buttom">
                <div>
                  <div className="flex-spicok width15 flex-column">
                    <div className="blor-flex2">
                      <div className="blok-about2 adaptive50">
                        <div className="max-80 auto-flex ">
                          <img className="width20" alt="" src={Star}></img>
                          <p className="small5">
                            Лидер на рынке Казахстана по учебному оборудованию
                          </p>
                        </div>
                      </div>
                      <div className="blok-about2 adaptive50">
                        <div className="max-80 auto-flex">
                          <img className="width20" alt="" src={Many}></img>
                          <p className="small5">
                            Выгодные условия сотрудничества
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="blor-flex2">
                      <div className="blok-about2 adaptive50">
                        <div className="max-80 auto-flex">
                          <img
                            className="width20"
                            alt=""
                            src={Iconmessege}
                          ></img>
                          <p className="small5">Поддержка и консультация</p>
                        </div>
                      </div>
                      <div className="blok-about2 adaptive50">
                        <div className="max-80 auto-flex">
                          <img className="width20" alt="" src={Docum}></img>
                          <p className="small5">Юридическая поддержка</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ценности компании */}
        <div className="bloc-bagraund heght">
          <div className="widht-messege width15 color-white ">
            <div className="width90 margin-auto vh60">
              <h1 className="font-sizw-catalog left-3">Ценности компании</h1>

              <div className="about-us flexdirection2">
                <div className="margin-auto flex flex-widht">
                  <div className="container2 ">
                    <h1 className="one">1</h1>
                    <p className="padding10 fontsize05rem">
                      <b>Образование как приоритет:</b> Наша компания глубоко
                      уважает и ценит образование, рассматривая его как ключевой
                      элемент для развития личности и общества. Мы стремимся
                      предоставлять высококачественные образовательные ресурсы,
                      способствуя росту интеллекта и навыков обучающихся.
                    </p>
                  </div>
                  <div className="container2">
                    <h1 className="one">2</h1>
                    <p className="padding10 fontsize05rem">
                      <b>Создание комфортной образовательной среды:</b> Мы
                      стремимся к созданию учебных пространств, в которых каждый
                      ученик может максимально раскрыть свой потенциал. Наше
                      оборудование способствует созданию комфортной,
                      технологичной и вдохновляющей атмосферы, поддерживая
                      эффективный образовательный процесс.
                    </p>
                  </div>
                </div>
                <div className="margin-auto flex flex-widht">
                  <div className="container2 ">
                    <h1 className="one">3</h1>
                    <p className="padding10 fontsize05rem">
                      <b> Этичность и ответственность:</b> Мы действуем в
                      соответствии с высокими этическими стандартами. Наша
                      компания придерживается прозрачности в отношениях с
                      клиентами, партнерами и сотрудниками. Мы также осознаем
                      свою социальную ответственность и стремимся внедрять
                      образовательные практики, способствующие устойчивому
                      развитию.{" "}
                    </p>
                  </div>
                  <div className="container2">
                    <h1 className="one">4</h1>
                    <p className="padding10 fontsize05rem">
                      <b> Партнерство с образовательным сообществом:</b> Мы не
                      просто предоставляем оборудование, но и стремимся к
                      укреплению партнерских отношений с образовательными
                      учреждениями. Наша компания активно участвует в
                      инициативах, направленных на поддержку образования,
                      предоставляя не только техническую, но и организационную
                      поддержку для обеспечения успешного образовательного
                      процесса в школах.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Aboutcompany/> */}
      {/* GSMektep описаний проекта  */}
      <Projects />
      {/* Контакты */}
      <Contacts />
      <WatsapComponent />
      
    </>
  )
}
