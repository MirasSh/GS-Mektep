import React from 'react'
import Header from '../components/header'
import '../style/Tovar.css'
import '../style/footer.css'

import Items from '../components/Items'
import ShowFullItem from '../components/ShowFullItem';

import A1 from '../images/Tovar/Windows_logo_Cyan_rgb_D.png'
import A2 from '../images/Tovar/icons8-ос-mac-500-removebg-preview.png'
import A3 from '../images/Tovar/Linux-Logo.png'
import A4 from '../images/Tovar/Webp.net-resizeimage-21.png'
import A5 from '../images/bird@2x.png'

class Equipment extends React.Component {
  constructor(prQ) {
    super(prQ)
    this.state = {
      item: [
        {
          id: 81,
          title: 'Microsoft Windows',
          desc: 'Используется на множестве устройств, включая персональные компьютеры, ноутбуки и серверы.',
          image: A1,
          more:'Windows — группа семейств коммерческих проприетарных операционных систем корпорации Microsoft, ориентированных на управление с помощью графического интерфейса. ',

        },
        {
          id: 82,
          title: 'macOS',
          desc: 'Интеграция с другими продуктами Apple, высокий уровень безопасности.',
          more:'macOS — проприетарная операционная система компании Apple. Является преемницей Mac OS 9. Семейство операционных систем macOS является вторым по распространённости для десктопа.',
          image: A2,

        },
        {
          id: 83,
          title: 'Linux',
          desc: 'Открытый исходный код, разработка сообществом.',
          image: A3,
          more: "Linux — семейство Unix-подобных операционных систем на базе ядра Linux, включающих тот или иной набор утилит и программ проекта GNU, и, возможно, другие компоненты.",

        },
        {
          id: 84,
          title: 'Roqed',
          desc: 'Позволяет вам создавать собственные слайд-шоу с использованием 3D-моделей',
          image: A4,
          more: "Roqed позволяет вам создавать собственные слайд-шоу с использованием 3D-моделей, дополняя ваши презентации интерактивными элементами и специальными вопросами для проверки знаний. ",

        },
        {
          id: 85,
          title: 'mozaBook',
          desc: 'Предназначенное для использования на интерактивных панелях в учебных классах',
          image: A5,
          more: "mozaBook - это программное обеспечение для презентаций, предназначенное для использования на интерактивных панелях в учебных классах.",

        },
      ],
      ShowFullItem: false,
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
                <h1 className="left-3 color font-sizw-catalog">Программное обеспечение</h1>
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
    this.setState({ fullItem: item })
    this.setState({ ShowFullItem: !this.state.ShowFullItem });
  }

}
export default Equipment
