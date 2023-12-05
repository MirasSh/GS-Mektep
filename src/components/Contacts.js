import React from 'react';
import "../style/messege.css"
import Location from "../images/free-icon-location-5988775.png"



import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit, reset] = useForm("xaygzgar");

    if (state.succeeded) {
        return (
            <>
                <div className='bloc-bagraund' >
                <div className="widht-messege width15 ">
                    <p className="color-none">.</p>
                    <h2 className="about1 top-text20 top100 text-align">Сообщение отправлено!<br /> Вам перезвонят в ближайшее время</h2>

                    <div className="flex-contact">
                        <div className='widht-messege'>
                            <div>
                            </div>
                            <div className='text-size-contact'>
                                <h3 className='text-color-messege'>

                                    <a className='text-color-messege' href="tel:+77273178549"> + 7 (727) 317-85-49<br /></a>
                                    <a className='text-color-messege' href="tel:+77024813949"> + 7 (702) 481-39-49<br /></a>
                                    <a className='text-color-messege' href="tel:+77028053347"> + 7 (702) 805-33-47<br /></a>
                                    <a className='text-color-messege' href="tel:+77751676040"> + 7 (775) 167-60-40<br /></a>


                                </h3>
                            </div>
                            <div>
                                <div>
                                    <h1 className='text-color-messege'>
                                        <a className='new-class' href="mailto:info@goldenstar.kz">info@goldenstar.kz</a>
                                        <br />
                                        <a className='new-class' href="mailto:a.janat@hotmail.com">a.janat@hotmail.com</a>
                                    </h1>
                                </div>
                                <div>
                                    <h2 className='text-color-messege'> <img className='location' alt='' src={Location}></img> <a className='new-class' href='https://go.2gis.com/ef5eb4i'>Бокейханова 152</a> </h2>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
            </>
        );
    }

    return (
        <>
            <div className='bloc-bagraund' >
                <div className="widht-messege width15 ">
                    <p className="color-none">.</p>
                    <h2 className="about1 top-text20 top100">Наши контакты </h2>

                    <div className="flex-contact">
                        <form className='color-white widht-messege' onSubmit={async (e) => {
                            await handleSubmit(e);
                            // Сбросить поля формы при успешной отправке
                            if (state.succeeded) {
                                reset();
                            }
                        }}>
                            <div className="flex-text ">
                            </div>
                            <div className="flex-text">
                                <p id='Lol' className='buttom-contact'>.</p>

                                <h2 className='text-color-messege font'>Оставьте заявку наш менеджер свяжется с вами в кратчайшие сроки</h2>
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
                            <p className='buttom-contact'>.</p>
                        </form>
                        <div className='widht-messege'>
                            <div>
                            </div>
                            <div className='text-size-contact'>
                                <h3 className='text-color-messege'>

                                    <a className='text-color-messege' href="tel:+77273178549"> + 7 (727) 317-85-49<br /></a>
                                    <a className='text-color-messege' href="tel:+77024813949"> + 7 (702) 481-39-49<br /></a>
                                    <a className='text-color-messege' href="tel:+77028053347"> + 7 (702) 805-33-47<br /></a>
                                    <a className='text-color-messege' href="tel:+77751676040"> + 7 (775) 167-60-40<br /></a>


                                </h3>
                            </div>
                            <div>
                                <div>
                                    <h1 className='text-color-messege'>
                                        <a className='new-class' href="mailto:info@goldenstar.kz">info@goldenstar.kz</a>
                                        <br />
                                        <a className='new-class' href="mailto:a.janat@hotmail.com">a.janat@hotmail.com</a>
                                    </h1>
                                </div>
                                <div>
                                    <h2 className='text-color-messege'> <img className='location' alt='' src={Location}></img> <a className='new-class' href='https://go.2gis.com/ef5eb4i'>Бокейханова 152</a> </h2>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

function Contacts() {
    return (
        <ContactForm />
    );
}

export default Contacts;
