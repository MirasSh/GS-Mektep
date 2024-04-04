import React from 'react'
import MainLogo1 from '../images/Gg/01.png'
import MainLogo2 from '../images/Gg/02.png'
import MainLogo3 from '../images/Gg/03.png'
import MainLogo4 from '../images/Gg/04-removebg-preview.png'
import MainLogo5 from '../images/Gg/05.png'
import MainLogo6 from '../images/Gg/06.png'
import MainLogo7 from '../images/Gg/cropped-Gsbuildingpng.png'
import MainLogo8 from '../images/logo-dark.svg'
import MainLogo9 from '../images/Gg/07-removebg-preview.png'

export default function Projects() {
    return (
        <div>
            <div>
                <div className="bacground2 width70 bloc-80">
                    <div className="size-spisok wiaht-100">
                        <h1 className="left-3 color font-sizw-catalog">Другие наши проекты</h1>
                        <div className="flex-spicok">
                            <div className="flex-column">
                                <div className="container2">
                                    <div className="widht-110">
                                        <a href="https://goldenstar.kz/">
                                            <img className="width64 widht-100" alt="" src={MainLogo8}></img>
                                        </a>
                                    </div>
                                    <div className="widht-110">
                                        <a href="https://aforma.kz/">
                                            <img className="width64 widht-100" alt="" src={MainLogo9}></img>
                                        </a>
                                    </div>
                                    <div className="widht-110">
                                        <a href="https://gsbuilding.kz/">
                                            <img className="width64 widht-100" alt="" src={MainLogo7}></img>
                                        </a>
                                    </div>
                                </div>
                                <div className="container2">
                                    <div className="widht-110">
                                        <a href="https://freshfish.kz/">
                                            <img className="width64 widht-100" alt="" src={MainLogo1}></img>

                                        </a>
                                    </div>
                                    <div className="widht-110">
                                        <a href="https://atekagro.kz/">
                                            <img className="width64 widht-100" alt="" src={MainLogo2}></img>

                                        </a>
                                    </div>
                                    <div className="widht-110">
                                        <a href="https://altyn-teke.kz/">
                                            <img className="width64 widht-100" alt="" src={MainLogo3}></img>
                                        </a>
                                    </div>
                                </div>
                                <div className="container2">
                                    <div className="widht-110">
                                        <a href="https://lakefarm.kz/">
                                            <img className="width64 widht-100" alt="" src={MainLogo4}></img>
                                        </a>
                                    </div>
                                    <div className="widht-110">
                                        <a href="https://premiumlamb.kz/">
                                            <img className="width64 widht-100" alt="" src={MainLogo5}></img>
                                        </a>
                                    </div>
                                    <div className="widht-110">
                                        <a href="https://gslogotip.kz/">
                                            <img className="width64 widht-100" alt="" src={MainLogo6}></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
