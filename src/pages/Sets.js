import React from 'react'
import Header from '../components/header'
import '../style/Tovar.css'
import '../style/footer.css'

import Items from '../components/Items'
import ShowFullItem from '../components/ShowFullItem';

import T1 from '../images/Tovar/237373010.jpg'
import T2 from '../images/Tovar/file_1565862390_57211147.jpg'
import T3 from '../images/Tovar/dd4b771a46fa67255b69ed3bf1f27ac1.jpg'
import T4 from '../images/Tovar/весы.jpg'
import T5 from '../images/Tovar/61mdwuvXQjL._AC_SL1500_-removebg-preview.png'
import T6 from '../images/Tovar/sosudy-soobshhayushhiesya.jpg'
import T7 from '../images/Tovar/vederko_arhimeda_ros-servis.png'
import T8 from '../images/Tovar/IMG_2663_enl.jpg'
import T9 from '../images/Tovar/-fcfQwfs.jpg'
import T10 from '../images/Tovar/58165e9e-d5f2-45d4-8539-637ac1fb876f.jpg'
import T11 from '../images/Tovar/1 (1).jpg'
import T12 from '../images/Tovar/254636966.jpg'
import T13 from '../images/Tovar/BS-WTHOOK1__10014.jpg'
import T14 from '../images/Tovar/9f08ad017997a17055da8f38426fc715.jpg'
import T15 from '../images/Tovar/30920d86357ea0fd9dc33c9ff8eab6dd.jpg'
import T16 from '../images/Tovar/70463.jpg'
import T17 from '../images/Tovar/lkdvlev.jpeg'
import T18 from '../images/Tovar/6654861450.jpg'
import T19 from '../images/Tovar/1dd41724e61c81cabd5351a56ac0e79b.jpg'
import T20 from '../images/Tovar/2470fec54041ec5e6720d6ee1f3ef824.jpeg'
import T21 from '../images/Tovar/file_1565926995_668067710.jpg'

class Sets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: [
        {
          id: 30,
          title: 'НАБОР ДЛЯ СОСТАВЛЕНИЯ ОБЪЕМНЫХ МОДЕЛЕЙ МОЛЕКУЛ',
          desc: 'Предназначен для электропитания демонстрационных установок.',
          image: T1,
          more: "Интервал регулируемых напряжений постоянного и переменного тока от 2V до 24V, 12 режимов переключения напряжения; Мак- симальный ток нагрузки 6А. Интервал регулируемых напряжений постоянного тока 6V, 9V, 12V. Максимальный ток нагрузки 1А. На- пряжения питания 220V, 50 Hz",

        },
        {
          id: 31,
          title: 'НАБОР МОДЕЛЕЙ КРИСТАЛЛИЧЕСКИХ РЕШЕТОК АЛМАЗА',
          desc: 'ГРАФИТА, ОКСИДА УГЛЕРОДА, ПОВАРЕННОЙ СОЛИ, ЙОДА, ЛЬДА, ОКСИДА КРЕМНИЯ, МЕДИ, ЖЕЛЕЗА, МАГНИЯ.',
          image: T2,

        },
        {
          id: 32,
          title: 'НАБОР ТЕЛ РАВНОГО ОБЪЕМА',
          desc: 'Предназначен для демонстрации неодинаковой плотности раз- личных веществ путем сравнения массы тел между собой.',
          image: T3,
          more: "Набор состоит из прямоугольных брусков из стали, алюминия и пласт- массы одинакового размера.",

        },
        {
          id: 33,
          title: 'ВЕСЫ ТЕХНИЧЕСКИЕ',
          desc: 'Весы технические демонстрационные служат для демонстрации устройства и действия рычажных весов ',
          image: T4,
          more: "применяют их в качестве чувствительного индикатора при сравнении масс тел, а также для взвешивания воздуха, углекислого газа, демонстрации архимедо- вой силы для газов и в других опытах.",

        },
        {
          id: 34,
          title: 'ВЕСЫ ЭЛЕКТРОННЫЕ',
          desc: 'Прибор предназначен для измерения массы тел до 1000 г при проведении опытов по физике и химии.',
          image: T5,
          more: "Технические характери- стики Допустимая нагрузка, г, не более 1000 Точность взвешива- ния, г, до 0,2 Рабочая температура, °С+10…+30 шт. 1 4. 9 Насос воздушный ручной Применяется в ряде опытов, когда требуется сравнительно небольшое разрежение или нагнетание воздуха. Насос поршневой двойного действия. Максимальное разрешение 40 мм рт. ст., нагнетание 4 ат.",

        },
        {
          id: 35,
          title: 'СОСУДЫ СООБЩАЮЩИЕСЯ',
          desc: 'Набор состоит из сосудов разной формы и диаметра на под- ставке. Все сосуды соединены между собой одной горизонталь- ной трубкой с отростком для установки прибора в подставку.',
          image: T6,

        },
        {
          id: 36,
          title: 'ВЕДЕРКО АРХИМЕДА',
          desc: 'Предназначено для демонстрации действия жидкости на погру- женное в нее тело.',
          image: T7,
          more: "Состоит из ведерка, цилиндра и пружинного динамометра.",
        },
        {
          id: 37,
          title: 'ШАР ПАСКАЛЯ',
          desc: 'Предназначен для проведения демонстрационных опытов по ги-дро- и аэростатике.',
          image: T8,
          more: "Прибор состоит из полого металлического шара с отверстиями, цилиндра, поршня со штоком и ручкой.",
        },
        {
          id: 38,
          title: 'ТРУБКА НЬЮТОНА',
          desc: 'Предназначена для демонстрации одновременного падения тел разной массы в разреженном воздухе.',
          image: T9,
          more: "Трубка изготовлена из тол- с того прозрачного стекла. Один конец трубки закрыт. На другом конце трубки закреплена пластмассовая оправа с краном. Вну- три трубки находятся: птичье перо, кусок пробки и свинцовая дро- бинка. Используется с насосом вакуумным.",
        },
        {
          id: 39,
          title: 'МОДЕЛЬ ЧЕТЫРЕХТАКТНОГО ДВИГАТЕЛЯ',
          desc: 'Предназначена для демонстрации работы двигателя внутреннего сгорания. ',
          image: T10,
          more: "Модель выполнена в виде разреза корпуса двигателя внутреннего сгорания. На корпусе смонтированы все детали дви- гателя, окраской выделены основные его части и показана кине- матическая схема взаимодействия между ними. С боковой сто- роны корпуса имеется рукоятка, с помощью которой приводится во вращение вал двигателя, соединенный с кривошипношатун- ным и распределительным механизмами.",
        },
        {
          id: 40,
          title: 'МАЯТНИК МАКСВЕЛЛА',
          image: T11,
          more: "Установка позволяет ознакомиться со сложным движением твер- дого тела, изучить закон сохранения энергии на примере движе- ния маятника Максвелла и демонстрировать переход потенци- альной энергии в кинетическую энергию и наоборот.",
        },
        {
          id: 41,
          title: 'ПИСТОЛЕТ',
          image: T12,
          more: "Предназначен для демонстрации движения тел, баллистический брошенных под разными углами к горизонту.",
        },
        {
          id: 42,
          title: 'ДЕМОНСТРАЦИОННЫЙ КОМПЛЕКТ ПО МЕХАНИКЕ',
          image: T13,
          title: 'НАБОР ГРУЗОВ С КРЮЧКАМИ',
          more:''
        },
        {
          id: 43,
          title: 'КОМПЛЕКТ ТЕЛЕЖЕК ЛЕГКОПОДВИЖНЫХ',
          image: T14,
          more: "Комплект тележек легкоподвижных должен позволять проведен- ние демонстраций по закономерностям взаимодействия тел, при-образованию энергии, относительности механического движения, моделированию поведения разомкнутых и замкнутых систем тел",
        },
        {
          id: 44,
          title: 'КАМЕРТОНЫ НА РЕЗОНИРУЮЩИХ ЯЩИКАХ МОЛОтОЧКОМ',
          desc: '',
          image: T15,
          more: "Предназначены для проведения демонстрационных опытов по акустике с использованием комплекта компьютерных изме- зрительных датчиков с регистратором данных. Представляют собой комплект из двух одинаково- вых камертонов с частотой 440 Hz, которые установлены на резо- нирующие ящики с одной открытой торцевой стенкой. В комплект входит молоточек для возбуждения камертонов.",
        },
        {
          id: 45,
          title: 'НАБОР ПРУЖИН РАЗЛИЧНОЙ ЖЕСТКОСТИ',
          disc:'Предназначен для демонстрации удлинения пружины от массы подвешиваемого груза.',
          image: T16,
          more: "В набор входят 5 пружин жесткостью: не менее 25, 15, 10, 5, 2,5 N/m.",
        },
        {
          id: 46,
          title: 'НАБОР ПРОВОЛОЧНЫХ КАРКАСОВ ',
          desc: '',
          image: T17,
          more: "Набор проволочных каркасов предназначен для определения ко- эффициента поверхностного натяжения жидкости с использова- нием комплекта компьютерных измерительных датчиков с реги- стратором данных (датчик силы). Состоит из динамометра - диа- пазон измерения 0-10 mN., чаши, 6 проволочных каркасов, метал- лического кольца на нитяном подвесе.",
        },
        {
          id: 47,
          title: 'КОМПЛЕКТ ПРИБОРОВ ДЛЯ ИЗУЧЕНИЯ ЭЛЕКТРОМАГНИТНЫХ ВОЛН',
          desc: '',
          image: T18,
          more: "Предназначен для проведения опытов по разделу «Электромаг-нитные колебания». В состав комплекта входят высокочастотный передатчик с частотой колебания не менее 11 GHz мощностью излучения не менее 10 mW, высокочастотный приемник, треу- угольная призма,три экрана на подставке, неоновая лампа на под- ставке, поглощающие тела.",
        },
        {
          id: 48,
          title: 'ПРИБОР ДЛЯ ДЕМОНСТРАЦИИ АТМОСФЕРНОГО ДАВЛЕНИЯ',
          desc: '',
          image: T19,
          more: "Установка позволяет ознакомиться со сложным движением твер- дого тела, изучить закон сохранения энергии на примере движе- ния маятника Максвелла и демонстрировать переход потенци- альной энергии в кинетическую энергию и наоборот.",
        },
        {
          id: 49,
          title: 'ПРИБОР ДЛЯ ДЕМОНСТРАЦИИ ТЕПЛОПРОВОДНОСТИ ТЕЛ',
          desc: '',
          image: T20,
          more: "Прибор представляет собой круглую металлическую пластину, в торец которой на равном расстоянии друг от друга вставлены пять одинаковых по размеру металлических стержней(стальной, алюминиевый и латунный). На каждом стержне имеются лунки для закрепления в них стержней с помощью пластилина.",
        },
        {
          id: 50,
          title: 'ТРУБКА ДЛЯ ДЕМОНСТРАЦИИ КОНВЕКЦИИ В ЖИДКОСТИ',
          desc: '',
          image: T21,
          more: "Предназначена для демонстрации явления конвекции жидкости при ее нагревании. Прибор представляет собой 0- образуются- кальянную трубку",
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
                <h1 className="left-3 color font-sizw-catalog">Робототехнические наборы и оборудование</h1>
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
export default Sets