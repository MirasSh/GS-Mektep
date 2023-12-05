import React from 'react';
import "../style/messege.css"
import Fotogtaf from "../images/snapedit_1700651540572-removebg-preview.png"

import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit, reset] = useForm("xaygzgar");

  if (state.succeeded) {
    return (
      <div className="widht-messege bloc-bagraund">
        <div className="flex-messege">
          <div className='color-white'>
            <h2 className='text-color-messege'>Сообщение отправлено!<br /> Вам перезвонят в ближайшее время</h2>
          </div>
          <img className="wiaht-40" alt="" src={Fotogtaf}></img>
        </div>
      </div>
    );
  }

  return (
    <div className="widht-messege">
      <p className="transparent top5">.</p>

      <div className="flex-messege">
        <form className='color-white wiaht-50' onSubmit={async (e) => {
          await handleSubmit(e);
          // Сбросить поля формы при успешной отправке
          if (state.succeeded) {
            reset();
          }
        }}>

          <div className="flex-text">

            <h2 className='text-color-messege'>Оставьте заявку, и наш менеджер свяжется с вами в кратчайшие сроки</h2>
          </div>
          <label htmlFor="name">Ваше имя</label>
          <input id="name" type="name" name="name" autoComplete="on" />

          <label htmlFor="email">Ваш Email адрес</label>
          <input id="email" type="email" name="email" autoComplete="on" />

          <label htmlFor="message">Введите сообщение</label>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <textarea id="message" name="message" />

          <button className='button1' type="submit" disabled={state.submitting}>
            Отправить
          </button>
        </form>
        <img className="wiaht-40" alt="" src={Fotogtaf}></img>
      </div>
    </div>
  );
}

function Messege() {
  return (
    <ContactForm />
  );
}

export default Messege;
