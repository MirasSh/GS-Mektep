import React from 'react'
import Header from '../components/header'
import Contacts from '../components/Contacts'

import Catalogcomponent from '../components/Catalog-component'
import WatsapComponent from '../components/WatsapComponent'


export default function Catalog() {
  return (
    <div>
      <Header />
      {/* Каталог  GSMektep*/}
      <Catalogcomponent/>
      {/* пробел на сайте */}
      {/* Контакты */}
      <Contacts />
      <WatsapComponent/>
    </div>
  )
}
