import React from 'react'
import Header from '../components/header'
import '../style/Tovar.css'
import '../style/footer.css'

import Items from '../components/Items'
import ShowFullItem from '../components/ShowFullItem';

import Q1 from '../images/Tovar/61mdwuvXQjL._AC_SL1500_-removebg-preview.png'
import Q2 from '../images/Tovar/1530195425_1_mini7-removebg-preview.png'
import Q3 from '../images/Tovar/file_1565934014_871430537-removebg-preview.png'
import Q4 from '../images/Tovar/ge-catalog-priborylaboratornyeb-10089-420x508-removebg-preview.png'
import Q5 from '../images/Tovar/lupy-linzy-uvelichitelnye-stekla_eb02c187f914ca8_800x600.png'
import Q6 from '../images/Tovar/6101846899-removebg-preview.png'
import Q7 from '../images/Tovar/nabor_him_posudy_i_prinadlezhnostej_dlya_montazha_prostejshih_priborov_po_himii_nphl.png'
import Q8 from '../images/Tovar/aaaaaaaaaaaaaaaaaaaaabiol_new.jpg'


class Digitall extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: [
        {
          id: 20,
          title: 'ВЕСЫ ЭЛЕКТРОННЫЕ',
          desc: 'Габаритные размеры: не менее 190x138x28 mm00',
          image: Q1,
          more: "Диапазон взвешивания 0-200 д,погрешность 0,1g, размер чашки весов 115 mm. Питается от элемента питания напряжением 5V и от сети - 220V.",
        },
        {
          id: 21,
          title: 'СТОЛИКИ ПОДЪЕМНЫЕ',
          desc: 'Максимальная высота подъема: не менее 280 mm',
          image: Q2,
          more: "Предназначен для демонстрации приборов и монтажа элемент-то в различных установок на разной высоте. Размер рабочей поверхности поверхности столика: не менее 150x150 mm. ",

        },
        {
          id: 22,
          title: 'ШТАТИВ ЛАБОРАТОРНЫЙ',
          desc: 'Металлический штатив, используют при монтаже демонстрационных онных приборов и установок.',
          image: Q3,
          more: "В комплект входят: муфты - 5 шт., лапки - 3 шт., четырехпальчиковый зажим - 2 шт., кольца - 3 шт. разного диаметра, стойки - 3 шт. (2 длинных, 1 короткая), раз сдвижная платформа из двух частей",

        },
        {
          id: 23,
          title: 'МИКРОСКОП УЧЕБНЫЙ',
          desc: 'Увеличение 100 х - 640 х крат',
          image: Q4,
          more: "Имеет подвижный предметный столик, тубус с двумя сменными окулярами (10 х, 16 х); три объектива (4 х, 10 х, 40 х), расположена женные на вращающейся револьверной головке.",

        },
        {
          id: 24,
          title: 'ЛУПА',
          desc: 'Используется на уроках и при проведении наблюдений в природе БИНОКЛЬ',
          image: Q5,
          more: "Используется на экскурсиях при проведении наблюдений в природе роде",

        },
        {
          id: 25,
          title: 'МИКРОСКОП С ЭЛЕКТРОПОДСВЕТКОЙ',
          desc: 'Предназначен для наблюдения объектов в проходящем свете в светлом поле.',
          image: Q6,
          more: "В микроскопе используется зеркальный освети- тель естественного освещения. Может использоваться в различ- ных областях медицины и учебных учреждениях различного про- филя при проведении лабораторных работ.",

        },
        {
          id: 26,
          title: 'НАБОР ХИМИЧЕСКОЙ ПОСУДЫ',
          desc: 'И ПРИНАДЛЕЖНОСТЕЙ ДЛЯ ЛАБОРАТОРНЫХ РАБОТ ПО БИОЛОГИИ',
          image: Q7,

        },
        {
          id: 27,
          title: 'Биологическая микролаборатория',
          desc: 'Биологическая микролаборатория предназначена для проведения учащимися наблюдений, лабораторных и практических работ по школьному курсу биологии.',
          image: Q8,
          more: "Обеспечивает проведение 89 лабораторных работ, в том числе 68 работ по биологии и 21 работа по экологии в соответствии с требованиями учебных программ школьного курса, по разделам:растения, бактерии, грибы, лишайники; животные; человек и его здоровье;общие биологические закономерности; экологический практикум",

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
                <h1 className="left-3 color font-sizw-catalog">Цифровые лаборатории</h1>
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
export default Digitall
