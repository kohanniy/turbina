import React from 'react';

import Api from '../utils/Api';

const Form = function() {
  // Создаем state переменные для каждого инпута
  const [nameInput, setNameInput] = React.useState('');
  const [emailInput, setEmailInput] = React.useState('');
  const [phoneInput, setPhoneInput] = React.useState('');
  const [poemsInput, setPoemsInput] = React.useState('');
  const [offerRadioInput, setOfferRadioInput] = React.useState(true);

  // Тут я обрабатываю для всех инпутов сразу, но если у вас 1-2 инпута, можете создать
  // фнкцию-обработчик для каждого инпута
  const handleInputChange = function(e) {
    const target = e.target;
    switch (target.name) {
      case 'name':
        setNameInput(target.value);
        break;
      case 'email':
        setEmailInput(target.value);
        break;
      case 'tel':
        setPhoneInput(target.value);
        break;
      case 'poems':
        setPoemsInput(target.value);
        break;
      case 'offer':
        setOfferRadioInput(target.checked);
        break;
      default:
        console.log('Ошибка');
    }
  }

  const handleSubmit = function(e) {
    Api.sendForm({
      name: nameInput,
      email: emailInput,
      tel: phoneInput,
      poems: poemsInput
    })
      .then((r) => {
        console.log(r);
      });
  }

  return (
    <div className="form">
      <form className="form__container" id="form" onSubmit={handleSubmit}>
        {/* В качестве значения укстанавливаете стейт, а в качестве обработчика изменения состояния */}
        {/* устанавливаете функцию-обработчик */}
        <input onChange={handleInputChange} value={nameInput} className="form__input" type="text" name="name" minLength="3" placeholder="Имя и фамилия автора" />
        <input onChange={handleInputChange} value={emailInput} className="form__input" type="email" name="email" minLength="3" placeholder="Почта" />
        <input onChange={handleInputChange} value={phoneInput} className="form__input" type="tel" name="phone" minLength="3" placeholder="Телефон" />
        <textarea onChange={handleInputChange} value={poemsInput} className="form__poems" form="form" name="poems" minLength="3" placeholder="Стихи" />
        <div className="form__offer-container">
          <input onChange={handleInputChange} checked={offerRadioInput} id="offer" name="offer" className="form__offer" type="checkbox"/>
          <label htmlFor="offer" className="form__offer-label" />
          <p className="form__offer-text">Согласен с <a className="form__offer-link" href="../images/oferta.pdf">офертой</a></p>
        </div>
      </form>
      <button className="form__submit" type="submit">Отправить</button>
    </div>
  )
}

export default Form;
