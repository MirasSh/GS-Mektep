import React from 'react'
import Header from '../components/header'
import '../style/Tovar.css'
import '../style/footer.css'
import Q from '../images/1.png';
import W from '../images/2.png'
import E from '../images/3.png'

import Items from '../components/Items'
import ShowFullItem from '../components/ShowFullItem';


class Interactive extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      item:[
        {
          id: 1,
          title: 'Моноблок av tech pro',
          desc: 'i3 10100 3.60 GHz/ DDR4 8Gb/ SSD 256Gbi3 10100 3.60 GHz/ DDR4 8Gb/ SSD 256Gbi3',
          image: Q,
        },
        {
          id: 2,
          title: 'Товар 2',
          desc: 'i3 10100 3.60 GHz/ DDR4 8Gb/ SSD 256Gbi3 10100 3.60 GHz/ DDR4 8Gb/ SSD 256Gbi3',
          image: W,
        },
        {
          id: 3,
          title: 'Товар 3',
          desc: 'i3 10100 3.60 GHz/ DDR4 8Gb/ SSD 256Gbi3 10100 3.60 GHz/ DDR4 8Gb/ SSD 256Gbi3',
          image: E,
        },
        {
          id: 4,
          title: 'Товар 2',
          desc: 'i3 10100 3.60 GHz/ DDR4 8Gb/ SSD 256Gbi3 10100 3.60 GHz/ DDR4 8Gb/ SSD 256Gbi3',
          image: W,
        },
        {
          id: 5,
          title: 'Товар 3',
          desc: 'i3 10100 3.60 GHz/ DDR4 8Gb/ SSD 256Gbi3 10100 3.60 GHz/ DDR4 8Gb/ SSD 256Gbi3',
          image: E,
        },
        {
          id: 6,
          title: 'Товар 3',
          desc: 'i3 10100 3.60 GHz/ DDR4 8Gb/ SSD 256Gbi3 10100 3.60 GHz/ DDR4 8Gb/ SSD 256Gbi3',
          image: E,
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
                <h1 className="left-3 color font-sizw-catalog">Интерактивные панели, OPS, Аксессуары</h1>
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

export default Interactive


