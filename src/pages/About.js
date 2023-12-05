import React from 'react'
import Header from '../components/header'
import Contacts from '../components/Contacts'

import Projects from '../components/Projects'
import Aboutcompany from '../components/About-company'
import WatsapComponent from '../components/WatsapComponent'
export default function About() {
    return (
        <>
            <Header />
            <Aboutcompany/>
            {/* GSMektep описаний проекта  */}
            <Projects />
            {/* Контакты */}
            <Contacts />
            <WatsapComponent/>
        </>
    )
}
