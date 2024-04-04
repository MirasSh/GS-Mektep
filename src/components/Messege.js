import React from "react"
import "../style/messege.css"
import Company1 from "../images/snapedit_1700651540572-removebg-preview.png"

import { useForm, ValidationError } from "@formspree/react"

function ContactForm() {
  const [state, handleSubmit, reset] = useForm("xaygzgar")

  if (state.succeeded) {
    return (
      <div className="widht-messege bloc-bagraund">
        <div className="flex-messege">
          <div className="color-white">
            <h2 className="text-color-messege2">
              Сообщение отправлено!
              <br /> Вам перезвонят в ближайшее время
            </h2>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="widht-messege">
      <div className="flex-messege">
        <form
          className="color-white wiaht-550"
          onSubmit={async e => {
            await handleSubmit(e)
            // Сбросить поля формы при успешной отправке
            if (state.succeeded) {
              reset()
            }
          }}
        >
          <div className="flex-text">
            <h2 className="text-color-messege2 font1remreal">
              Оставьте заявку, и наш менеджер свяжется с вами в кратчайшие сроки
            </h2>
          </div>
          <label className="rem07" htmlFor="name">
            Ваше имя
          </label>
          <input id="name" type="name" name="name" autoComplete="on" />

          <label className="rem07" htmlFor="email">
            Ваш Email адрес
          </label>
          <input id="email" type="email" name="email" autoComplete="on" />

          <label className="rem07" htmlFor="message">
            Введите сообщение
          </label>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <textarea id="message" name="message" />

          <button className="button1" type="submit" disabled={state.submitting}>
            Отправить
          </button>
        </form>
        <img className="" alt="" src={Company1}></img>
      </div>
    </div>
  )
}

function Messege() {
  return <ContactForm />
}

export default Messege
