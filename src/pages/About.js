import React from 'react'
import Header from '../components/header'
import Contacts from '../components/Contacts'

import Projects from '../components/Projects'
// import Aboutcompany from '../components/About-company'
import WatsapComponent from '../components/WatsapComponent'
export default function About() {
    return (
        <>
            <Header />
            <div>
                <div>
                    <div className="bacground2  bloc-bagraund">
                        <div className="size-spisok">
                            <h1 className="left-3 top3 color font-sizw-catalog">О нашей компаний</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bloc-80">
                        <div>
                            <div className="size-spisok wiaht-100">
                                <div className="bloc-80">
                                    <div className="flex-text ">
                                        <p className="top5 color">GSMektep, занимается поставкой инновационных товаров для образовательных технологий.
                                            <br /> Мы продолжаем содействовать развитию нашей страны, предоставляя высококачественные решения для образовательных учреждений.
                                            <br />В рамках этого направления, мы предлагаем широкий ассортимент товаров, включая современные интерактивные
                                            технологии, образовательное программное обеспечение, учебную мебель и другие инновационные продукты.
                                        </p>
                                    </div>
                                    <div className="flex flex-text">
                                        <div className="width90">
                                        </div>
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
            <WatsapComponent/>
        </>
    )
}
