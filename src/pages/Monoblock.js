import React from 'react'
import Header from '../components/header'
import '../style/Tovar.css'
import '../style/footer.css'
import img from '../images/Tovar/tonk-aio2700-06.jpg';
import img2 from '../images/Tovar/tonk-aio2400-09.png';
import img3 from '../images/Tovar/tonk-aio2401-07.png';
import img4 from '../images/Tovar/product_image_82595_1222018.png';
import img5 from '../images/Tovar/product_image_83749_1225749.jpg';
import img6 from '../images/Tovar/c0a09cf71ee10741ed89d0ccc779b027.jpeg';
import img7 from '../images/Tovar/5pmn0iqlv2l0pwv3z26isfabjcdvn5mx.png';
import img8 from '../images/Tovar/e7k52k7sofus77issybfnoth41f8uh7n.jpg';
import img9 from '../images/Tovar/6e5a37da4677243cfd580051bbdc4830.jpg';
import img10 from '../images/Tovar/ftjd9n5hhvgur7xwui9wyt9ngtb46h15.png';
import img11 from '../images/Tovar/8hpcmcs7klq8278s1na7b2haxlr9sfad.png';
import img12 from '../images/Tovar/xg3wi5x5eurn8arolo8g6sy3bl4q91ld.jpg';



import Lenova5 from '../images/Tovar/lenovai3-removebg-preview.png';
import Lenova3 from '../images/Tovar/c-removebg-preview.png';
import Lenova4 from '../images/Tovar/Acer_Aspire_3_A315-removebg-preview.png';
import Planshet from '../images/Tovar/4JEaHjaLeawkpZRCCWzIVjdn3nMd0OI3p7OVBwy5.jpg.png';
import Planshet2 from '../images/Tovar/52.jpg';
import Planshet3 from '../images/Tovar/jHDhAGuDbrjYDEOf8wdGIGX0kpkgbg4r7ooETGyO.jpg.png';





import Items from '../components/Items'
import ShowFullItem from '../components/ShowFullItem';


class Monoblock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      item:[
        {
          id: 120,
          title: 'Моноблок HP 34 inch All-in-One ',
          desc: ' i9-12900 / 64GB / No 2nd | 1TB M.2 SSD TLC ',
          image: img4,
          more: "34.0AiOIDSBUDT / 34.0 inch AR WUHD (5120x2160) LED UWVA 500 bnt LCD Panel / i9-12900 / 64GB / No 2nd | 1TB M.2 SSD TLC / W11 ProHighEnd / 1yw | 3Y Service Upgrade / NVIDIARTX 3060 MaxQ 6 GB.",
        },
        {
          id: 121,
          title: 'HP 5V9L0EA HP ',
          desc: 'EliteOne 870 27NT G9 AiO i7-12700 16GB/512 Win11Pro',
          image: img7,
          more: "HP 5V9L0EA HP EliteOne 870 27NT G9 AiO i7-12700 16GB/512 Win11Pro 870 G9 AiO NT FHD RCTO / i7-12700 / 16GB DDR5 / 512GB M.2 SSD TLC / W11 Pro / 3Y Service Upgrade | 1yw / 655 Wrless kbd&mouse Combo / Height Adjust Stand 24 / No MCR / Corp-Ready | LBL TCO / Intel AX211 Wi-Fi 6E Vpro 160 MHz BT 5.3 WW WLAN / 5MP Camera",
        },
        {
          id: 122,
          title: 'HP All-in-One ProOne 440 G9 ',
          desc: ' Intel Core i7-12700T (3.4 ГГц), RAM 16 ГБ, SSD 512, Intel UHD Graphics 770, Windows ',
          image: img5,
          more: "Расширенные интеллектуальные функции этого моноблока помогают уменьшить нежелательный фоновый шум и адаптироваться к окружающему освещению. ",
        },
        {
          id: 123,
          title: 'Lenovo V30a 24IIL 23.8 11LA0055RU ',
          desc: ' USB 2.0   USB 3.x  Ethernet (LAN / RJ45)  HDMI    2 порта ',
          image: img6,
          more: "34.0AiOIDSBUDT / 34.0 inch AR WUHD (5120x2160) LED UWVA 500 bnt LCD Panel / i9-12900 / 64GB / No 2nd | 1TB M.2 SSD TLC / W11 ProHighEnd / 1yw | 3Y Service Upgrade / NVIDIARTX 3060 MaxQ 6 GB.",
        },
        {
          id: 124,
          title: 'X-Game Walkiria Q500 PRO',
          desc: 'FHD/ Core i3-10100T/ 8 GB DDR4/ 512 GB SSD/ Dos',
          image: img8,
          more: "Моноблоки X-GAME - все что нужно для учебы работы и отдыха в элегантном корпусе. Данное решение подойдет людям, желающим совместить мощность и функциональность настольного ПК с компактностью. Богатый функционал, отличная производительность и безупречное качество вот отличительные черты продукции компании. Превосходное сочетание формы и функциональности идеально впишется в любое пространство.",
        },
        {
          id: 125,
          title: 'Lenovo V50a-24IMB AIO, 23.8" FHD',
          desc: 'Core i5-10400T/ 8 GB/ 256 GB SSD/ Win10 Pro',
          image: img9,
          more: "Моноблок Lenovo V50a на базе процессора Intel Core 10-го поколения с внушительным ресурсом памяти и большим хранилищем данных обеспечивает производительность, достаточную для решения любых задач. Моноблок имеет несколько сертификатов в сфере экологической безопасности, помогая вам экономить на счетах за электроэнергию.",
        },
        {
          id: 126,
          title: 'HP 6D433EA HP 205 G8 All-in-One 23.8',
          desc: 'R5-5500U 16GB/512 Win11Pro Gray',
          image: img10,
          more: "HP 6D433EA HP 205 G8 All-in-One 23.8 R5-5500U 16GB/512 Win11Pro Gray 205G824AiOBU-R5-5500UIDS / 23.8 inch AG FHD (1920x1080) LED UWVA IPS 250 LCD Panel / 16GB DDR4 / 512GB M.2 SSD Value / W11 Pro / 1yw / 125 BLKkbd / 125mouse / Realtek 8852BE Wi-Fi 6 BT 5.3 WW WLAN / RTF Card / Iron Gray with 5MP WebCam ID / Sea and Rail",
        },
        {
          id: 127,
          title: 'ASUS A3202WBAK-BA105M Black/21.45 FHD',
          desc: 'I5-1235U/8GB/512GB PCIE G3 SSD/WiFi6+BT5.3/720p HD/90W/WL kbms/No OS',
          image: img11,
          more: "Моноблок ASUS A3202WBAK-BA105M Black/21.45 FHD/I5-1235U/8GB/512GB PCIE G3 SSD/WiFi6+BT5.3/720p HD/90W/WL kbamp;ms/No OS",
        },
        {
          id: 128,
          title: 'HP 200 G4 AiO [6D417EA] 21.5" FHD',
          desc: 'Core i5-1235U/ 8 GB/ 512 GB SSD/ DOS',
          image: img12,
          more: 'Недорогой моноблок HP 200 22 с минималистичным дизайном прекрасно подойдет для любого офиса. Мощные процессоры Intel помогут быстро справляться с повседневными задачами, а экран с диагональю 21,5" имеет достаточный размер для совместной работы с коллегами.',
        },
        {
          id: 129,
          title: 'Моноблок TONK AIO2700',
          desc: 'Intel i5-12500, 16Gb RAM, 512Gb SSD, 5Mp camera, WiFi+BT',
          image: img,
          more: "TONK AIO2700-  Моноблок “все в одном” (AIO) с 27-дюймовым LED-дисплеем, поддерживающим разрешение Full HD (FHD), оснащен процессором с сокетом LGA1700 (H610 чипсет).",
        },
        {
          id: 130,
          title: 'Моноблок TONK AIO2401',
          desc: 'Intel i5-12456U, 8Gb RAM, 256Gb SSD, 2Mp camera, WiFi+BT',
          image: img3,
          more: "TONK AIO2401 –  Моноблок “все в одном” (AIO) с 23,8-дюймовым LED-дисплеем, поддерживающим разрешение Full HD (FHD), оснащен процессором с сокетом LGA1700 (H610 чипсет).",
        },
        {
          id: 131,
          title: 'Моноблок TONK AIO2400',
          desc: 'Intel i3-12100, 8Gb RAM, 256Gb SSD, 2Mp camera, WiFi+BT',
          image: img2,
          more: "TONK AIO2400 –  Моноблок “все в одном” (AIO) с 23,8-дюймовым LED-дисплеем, поддерживающим разрешение Full HD (FHD), оснащен процессором с сокетом LGA1700 (H610 чипсет).",
        },
        {
          id: 132,
          title: 'Ноутбук Lenovo IdeaPad 3',
          desc: 'i5 1235U / 8ГБ / 512SSD / 15.6 / Win11',
          image: Lenova5,
          more: 'Ноутбук Lenovo IP3 15,6"FHD/Ryzen 5-5500U/8GB/256GB/Dos (82KU00C3RK)',
        },
        {
          id: 133,
          title: 'Ноутбук Asus ExpertBook B1 B1500',
          desc: 'i5 1235U / 8ГБ / 512SSD / 15.6 / Win11',
          image: Lenova3,
          more: "Диагональ экрана, дюйм - 15.6  Разрешение экрана - 1920x1080  Процессор - Celeron  Частота процессора, ГГц - 1.8  Количество ядер - 2",
        },
        {
          id: 134,
          title: 'Ноутбук Acer Aspire 3 A315-56',
          desc: 'Ноутбук Acer Aspire 3 A315-56 (15.6 FHD/ Core i3 1005G1/ 8Gb DDR4-3200/ 512Gb SSD/ Intel UHD/noOD/ DOS) ',
          image: Lenova4,
          more: "Диагональ экрана, дюйм - 15.6  Разрешение экрана - 1920x1080  Процессор - Core i3  Частота процессора, ГГц - 1.2  Количество ядер - 2",
        },
        {
          id: 135,
          title: "Galaxy Tab S9 11 5G 256GB ",
          desc: " Wi-Fi 64GB - Silver (MK2L3RK/A)",
          image: Planshet,
          more: " Galaxy Tab S9  реагирует быстрее в любой ситуации: когда вы отправляете сообщения, ищете контент в интернете или используете одновременно несколько приложений.",
        },
        {
          id: 136,
          title: "Apple iPad Pro 4 -й Gen",
          desc: ' 128 ГБ, Wi-Fi, 12.9in - серый серебристый',
          image: Planshet2,
          more: "Дисплей 8,7 дюйма │ Вес 366 г │ Металлический корпус Широкий 8,7-дюймовый дисплей для ярких впечатлений от фильмов и игр. Тонкая рамка позволила увеличить экран без изменения размеров планшета. Благодаря компактному эргономичному корпусу планшет очень удобно держать в руках, даже работая и играя часами.",
        },
        {
          id: 137,
          title: 'Планшет Samsung Galaxy Tab S9+ 12.4 256GB Graphite ',
          desc: ' алюминий/ 8 ядер/256 ГБ/3.3 ГГц/Qualcomm Snapdragon 8 Gen 2',
          image: Planshet3,
          more: "Диагональ экрана, дюйм - 15.6  Разрешение экрана - 1920x1080  Процессор частота процессора, ГГц - 1.2  Количество ядер - 2",
        },
      ],
      ShowFullItem:false,
      fullItem: {}
    }
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <>
        <Header />
        <div className='font-sizw-catalog'>
          <div className="bloc-80">
            <div className="bacground2">
              <div className="size-spisok blac">
                <h1 className="left-3 color font-sizw-catalog">Моноблоки, ПК,планшеты</h1>
              </div>
            </div>
          </div>
        </div>

        <Items onShowItem={this.onShowItem} item={this.state.item} />
        {this.state.ShowFullItem && <ShowFullItem item={this.state.fullItem} onShowItem={this.onShowItem} />}
      </>
    )
  } 
  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({ ShowFullItem: !this.state.ShowFullItem });
  }
}

export default Monoblock


