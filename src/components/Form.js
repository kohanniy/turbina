import React from 'react';

const Form = function() {
  return (
    <section className="form">
      <h2 className="form__title">Форма</h2>
      <form className="form__container" id="form">
        <input className="form__input" type="text" name="name" minLength="3" placeholder="Имя и фамилия автора" />
        <input className="form__input" type="email" name="email" minLength="3" placeholder="Почта" />
        <input className="form__input" type="tel" name="phone" minLength="3" placeholder="Телефон" />
        <textarea className="form__poems" form="form" name="poems" minLength="3" placeholder="Стихи" />
        <div className="form__offer-container">
          <input className="form__offer" type="radio" />
          <p className="form__offer-text">Согласен с <a className="form__offer-link" href="../images/cheat-sheet-branches-in-git-sprint-3.pdf">офертой</a></p>
        </div>
      </form>
      <button className="form__submit" type="submit">Отправить</button>
    </section>
  )
}

export default Form;
