import React from 'react'
import Header from '../components/header'
import '../style/Tovar.css'
import '../style/footer.css'

import Items from '../components/Items'
import ShowFullItem from '../components/ShowFullItem';

import Printers from '../images/Tovar/zmorph_fab_front.png'
import Printers2 from '../images/Tovar/195545503_3d-printer-creality.png'

class Printer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: [
        {
          id: 1,
          title: 'ZMORPH FAB',
          more: 'Расширьте свои производственные возможности благодаря доступу к более чем 50 профессиональным материалам как для субтрактивного, так и для аддитивного производства.',
          image: Printers,
          desc:'От пластиковой нити для 3D-печати до мягких металлов и твердых пластиков.'
        },
        {
          id: 2,
          title: '3D принтер Creality Ender-3 Neo',
          more: '3D-принтер Creality Ender-3 Neo это новая улучшенная версия самой популярной бюджетной модели среди пользователей Creality Ender-3.В Ender-3 Neo появился цельнометаллический боуден-экструдер, автокалибровка CR-Touch собственной разработки Creality, гофрированный теплоотвод для лучшего рассеивания тепла и многое другое.',
          image: Printers2,
          desc:'Более простая и быстрая калибровка платформы CR Touch'
        }
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
                <h1 className="left-3 color font-sizw-catalog">3D принтеры</h1>
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
export default Printer
