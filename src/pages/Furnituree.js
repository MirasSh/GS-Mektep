import React from 'react'
import Header from '../components/header'
import '../style/Tovar.css'
import '../style/footer.css'

import Items from '../components/Items'
import ShowFullItem from '../components/ShowFullItem';

import O from '../images/Tovar/png/110120_1-removebg-preview.png'
import O2 from '../images/Tovar/png/dc0346ac3e0e78d9d71f5dec5e28a94a-removebg-preview.png'
import O3 from '../images/Tovar/png/Work-removebg-preview.png'
import O4 from '../images/Tovar/png/68045769-removebg-preview.png'
import O5 from '../images/Tovar/png/f58207836ffcd353d4b2f45450d4b1aa-removebg-preview.png'
import O6 from '../images/Tovar/png/427_3-removebg-preview.png'
import O7 from '../images/Tovar/png/v5nuhbzqormx83dhu1o9dmyszg6mtor6-removebg-preview.png'
import O8 from '../images/Tovar/png/222-02-shkaf-detskij-5-dvernyj-81301-1-800x800-removebg-preview.png'
import O9 from '../images/Tovar/png/SHkaf-dlya-dokumentov-s-dverkami-removebg-preview.png'
import O10 from '../images/Tovar/png/1437-removebg-preview.png'


class Software extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: [
        {
          id: 90,
          title: 'СТОЛ УЧЕНИЧЕСКИЙ ',
          desc: 'Стол лабораторный для кабинетов химии, физики и биологии',
          image: O,
          more:'Указан размер одного стола. При необходимости столы могут ком- пановаться в один общий лабора- торный стол. Может быть изготов- лен как со стеллажом (надстрой- кой с полками), так и без него.'
        },
        {
          id: 91,
          title: 'СТУЛ УЧЕНИЧЕСКИЙ',
          desc: 'Стол лабораторный для кабинетов химии, физики и биологии',
          image: O2,
          more:'Указан размер одного стола. При необходимости столы могут ком- пановаться в один общий лабора- торный стол. Может быть изготов- лен как со стеллажом (надстрой- кой с полками), так и без него.'
        },
        {
          id: 92,
          title: 'СТОЛ ДЛЯ ПРЕПОДАВАТЕЛЯ УГЛОВОЙ ',
          desc: 'Стол лабораторный для кабинетов химии, физики и биологии',
          image: O3,
          more:'Указан размер одного стола. При необходимости столы могут ком- пановаться в один общий лабора- торный стол. Может быть изготов- лен как со стеллажом (надстрой- кой с полками), так и без него.'
        },
        {
          id: 93,
          title: 'СТУЛ ДЛЯ ПРЕПОДАВАТЕЛЯ',
          desc: 'Стол лабораторный для кабинетов химии, физики и биологии',
          image: O4,
          more:'Указан размер одного стола. При необходимости столы могут ком- пановаться в один общий лабора- торный стол. Может быть изготов- лен как со стеллажом (надстрой- кой с полками), так и без него.'
        },
        {
          id: 94,
          title: 'ШКАФ ПОЛУЗАКРЫТЫЙ ДЛЯ КНИГ И ДОКУМЕНТОВ',
          desc: 'Стол лабораторный для кабинетов химии, физики и биологии',
          image: O5,
          more:'Указан размер одного стола. При необходимости столы могут ком- пановаться в один общий лабора- торный стол. Может быть изготов- лен как со стеллажом (надстрой- кой с полками), так и без него.'
        },
        {
          id: 95,
          title: 'СТОЛ ОДНОТУМБОВЫЙ',
          desc: 'Стол лабораторный для кабинетов химии, физики и биологии',
          image: O6,
          more:'Указан размер одного стола. При необходимости столы могут ком- пановаться в один общий лабора- торный стол. Может быть изготов- лен как со стеллажом (надстрой- кой с полками), так и без него.'
        },
        {
          id: 96,
          title: 'СТУЛ ПОЛУМЯГКИЙ',
          desc: 'Стол лабораторный для кабинетов химии, физики и биологии',
          image: O7,
          more:'Указан размер одного стола. При необходимости столы могут ком- пановаться в один общий лабора- торный стол. Может быть изготов- лен как со стеллажом (надстрой- кой с полками), так и без него.'
        },
        {
          id: 97,
          title: 'ШКАФ ДЛЯ ОДЕЖДЫ',
          desc: 'Стол лабораторный для кабинетов химии, физики и биологии',
          image: O8,
          more:'Указан размер одного стола. При необходимости столы могут ком- пановаться в один общий лабора- торный стол. Может быть изготов- лен как со стеллажом (надстрой- кой с полками), так и без него.'
        },
        {
          id: 98,
          title: 'ШКАФ ЗАКРЫТЫЙ',
          desc: 'Стол лабораторный для кабинетов химии, физики и биологии',
          image: O9,
          more:'Указан размер одного стола. При необходимости столы могут ком- пановаться в один общий лабора- торный стол. Может быть изготов- лен как со стеллажом (надстрой- кой с полками), так и без него.'
        },
        {
          id: 99,
          title: 'ШКАФ ОТКРЫТЫЙ',
          desc: 'Стол лабораторный для кабинетов химии, физики и биологии',
          image: O10,
          more:'Указан размер одного стола. При необходимости столы могут ком- пановаться в один общий лабора- торный стол. Может быть изготов- лен как со стеллажом (надстрой- кой с полками), так и без него.'
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
                <h1 className="left-3 color font-sizw-catalog">Учебная мебель</h1>
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
export default Software

