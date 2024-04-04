import React from 'react'
import Foto from '../images/New-img.png'
import Foto2 from '../images/mono.png'
import Foto3 from '../images/3DD-removebg-preview (2).png'
import Foto4 from '../images/labaratoria.png'
import Foto5 from '../images/robo.png'
import Foto6 from '../images/cross-platform-development.jpg'
import Foto7 from '../images/1674222492_pro-dachnikov-com-p-foto-shkolnie-parti-73-removebg-preview.png'
import Foto8 from '../images/icon/Laba.png'
import { Link } from "gatsby"


export default function Catalogcomponent() {
    return (
        <div>
            {/* Каталог  GSMektep*/}
            <div className='font-sizw-catalog'>
                <div className="bloc-81">
                    <div className="bacground2">
                        <div className="size-spisok blac">
                            <h1 className="left-3 color font-sizw-catalog">Каталог</h1>
                            <div className="flex-spicok">
                                <div className="flex-spisok small-1">
                                    <div className="max-80 auto-flex"><Link className="text-color-messege" to="/Interactiv">
                                        <img className="widht-100" alt="" src={Foto} />
                                        <p className="button-more color">Интерактивные панели и OPS</p>
                                        <p className="text-p font1rem2">Повышайте эффективность взаимодействия с нашими современными решениями.
                                        </p></Link>
                                    </div>
                                </div>
                                <div className="flex-spisok small-1">
                                    <div className="max-80 auto-flex"><Link className="text-color-messege" to="/Monoblock">
                                        <img className="widht-100" alt="" src={Foto2}></img>
                                        <p className="color">Моноблоки, ПК,  <br />планшеты</p>
                                        <p className="text-p font1rem2">Откройте для себя новые технологии, улучшающие производительность и комфорт использования.
                                        </p></Link>
                                    </div>
                                </div>
                                <div className="flex-spisok small-1">
                                    <div className="max-80 auto-flex"><Link className="text-color-messege" to="/Printer">
                                        <img className="widht-100" alt="" src={Foto3}></img>
                                        <p className="color">3D  <br /> принтеры</p>
                                        <p className="text-p font1rem2">Воплощайте свои идеи в реальность с передовыми 3D принтерами
                                        </p></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-spicok">
                                <div className="flex-spisok small-1">
                                    <div className="max-80 auto-flex"><Link className="text-color-messege" to="/Digitall">
                                        <img className="widht-100 " alt="" src={Foto4}></img>
                                        <p className="color">Цифровые лаборатории</p>
                                        <p className="text-p font1rem2">Исследуйте миры науки с передовыми цифровыми технологиями в лабораторной работе.
                                        </p></Link>
                                    </div>
                                </div>
                                <div className="flex-spisok small-1">
                                    <div className="max-80 auto-flex"><Link className="text-color-messege" to="/Sets">
                                        <img className="widht-100" alt="" src={Foto5}></img>
                                        <p className="color">Робототехнические наборы</p>
                                        <p className="text-p font1rem2">Погрузитесь в мир робототехники с нашими инновационными наборами и оборудование.
                                        </p></Link>
                                    </div>
                                </div>
                                <div className="flex-spisok small-1">
                                    <div className="max-80 auto-flex"><Link className="text-color-messege" to="/Equipment">
                                        <img className="widht-100" alt="" src={Foto8}></img>
                                        <p className="color">Лабораторное оборудование</p>
                                        <p className="text-p font1rem2">Поддержите обучение с помощью высококачественного лабораторного оборудования и демонстрационных приборов.
                                        </p></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-spicok">
                                <div className="flex-spisok small-1">
                                    <div className="max-80 auto-flex"><Link className="text-color-messege" to="/Software">
                                        <img className="widht-100" alt="" src={Foto6}></img>
                                        <p className="color">Программное обеспечение</p>
                                        <p className="text-p font1rem2">Оптимизируйте обучение с помощью современного программного обеспечения.
                                        </p></Link>
                                    </div>
                                </div>
                                <div className="flex-spisok small-1">
                                    <div className="max-80 auto-flex"><Link className="text-color-messege" to="/Furnituree">
                                        <img className="widht-110 laba" alt="" src={Foto7}></img>
                                        <p className="top-realitiv position-rel color">Учебная мебель</p>
                                        <p className="text-p position-rel  font1rem2">Создавайте удобные образовательные пространства с нашей функциональной учебной мебелью.
                                        </p></Link>
                                    </div>
                                </div>
                                <div className="flex-spisok small-1">
                                    <div className="max-80 auto-flex"><Link className="text-color-messege" to="/All">
                                        <p className="color font1rem">Весь ассортимент товаров можно посмотреть на сайте нажав на кнопку <span className="button-to">
                                            <Link className="text-color-messege" to="/All">Подробнее </Link>
                                        </span></p></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Consultation" ></div>
            </div>

        </div>
    )
}
