import React from 'react'
import Header from '../components/header'
import '../style/Tovar.css'
import '../style/footer.css'

import Q from '../images/1.png'
import W from '../images/2.png'
import E from '../images/3.png'
import R from '../images/4.png'
import T from '../images/5.png'
import Y from '../images/6.png'

export default function Software() {
  return (
    <>
      <Header />
      <div className="size-spisok">
        <h1 className="left-3  tovar-text-size tovar-buttom blac">Программное обеспечение</h1>
      </div>
      <div className='tovar-buttom'>
          <div className='flex-tovar-new'>
            <div className='tovar-size'>
              <div className='flex-tovar'>
                <div>
                  <img className='tovar' alt='' src={Q}></img>
                </div>
                <div>
                  <p className='new-opisanie'>Моноблок av tech pro</p>
                </div>
              </div>
            </div>
            <div className='tovar-size'>
              <div className='flex-tovar'>
                <div>
                  <img className='tovar' alt='' src={W}></img>
                </div>
                <p className='new-opisanie'>Mонитор Acer</p>

              </div>
            </div>
            <div className='tovar-size'>
              <div className='flex-tovar'>
                <div>
                  <img className='tovar' alt='' src={E}></img>
                </div>
                <p className='new-opisanie'>Монитор Lg</p>

              </div>
            </div>
          </div>
        </div>
        <div className='tovar-buttom'>
          <div className='flex-tovar-new'>
            <div className='tovar-size'>
              <div className='flex-tovar'>
                <div>
                  <img className='tovar' alt='' src={R}></img>
                </div>
                <div>
                  <p className='new-opisanie'>Ноутбук hp 250</p>
                </div>
              </div>
            </div>
            <div className='tovar-size'>
              <div className='flex-tovar'>
                <div>
                  <img className='tovar' alt='' src={T}></img>
                </div>
                <p className='new-opisanie'>Ноутбук Acer Aspire</p>

              </div>
            </div>
            <div className='tovar-size'>
              <div className='flex-tovar'>
                <div>
                  <img className='tovar' alt='' src={Y}></img>
                </div>
                <p className='new-opisanie'>Lenovo ideapad s 145</p>

              </div>
            </div>
          </div>
        </div>
    </>
  )
}
