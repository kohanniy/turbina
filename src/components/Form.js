import React from 'react';

import Api from '../utils/Api';
import { CSSTransition } from 'react-transition-group';

const Form = function() {
  const [nameError, setNameError] = React.useState(true);
  const [mailError, setMailError] = React.useState(true);
  const [phoneError, setPhoneError] = React.useState(true);
  const [poemsError, setPoemsError] = React.useState(true);

  const [isSubmitDisabled, setSubmitDisabled] = React.useState(true);
  const [isFormSent, setFormSent] = React.useState(false);

  const [nameInput, setNameInput] = React.useState('');
  const [mailInput, setMailInput] = React.useState('');
  const [phoneInput, setPhoneInput] = React.useState('');
  const [poemsInput, setPoemsInput] = React.useState('');
  const [offerRadioInput, setOfferRadioInput] = React.useState(false);

  const updateButtonStatus = function() {
    if (offerRadioInput && nameError && mailError && phoneError && poemsError && nameInput !== '' && mailInput !== '' && phoneInput !== '' && poemsInput !== '') {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }

  React.useEffect(() => {
    updateButtonStatus();
  });

  const handleInputChange = function(e) {
    const target = e.target;
    switch (target.name) {
      case 'name':
        setNameInput(target.value);
        setNameError(target.validity.valid);
        updateButtonStatus();
        break;
      case 'email':
        setMailInput(target.value);
        setMailError(target.validity.valid);
        updateButtonStatus();
        break;
      case 'phone':
        setPhoneInput(target.value);
        setPhoneError(target.validity.valid);
        updateButtonStatus();
        break;
      case 'poems':
        setPoemsInput(target.value);
        setPoemsError(target.validity.valid);
        updateButtonStatus();
        break;
      case 'offer':
        setOfferRadioInput(!offerRadioInput);
        updateButtonStatus();
        break;
      default:
        console.log('Ошибка');
    }
  }

  const handleSubmit = function(e) {
    e.preventDefault();
    setFormSent(true);
    Api.sendForm({
      name: nameInput,
      email: mailInput,
      tel: phoneInput,
      poems: poemsInput
    })
      .then((r) => {
        console.log(r);
      });
  }

  return (
    <>
      <p className="form__description">
        Заполняя эту форму, вы становитесь частью проекта.
      </p>
      <div className="form">
        <form className="form__container" onSubmit={handleSubmit}>
          <input onChange={handleInputChange} value={nameInput} minLength={2} maxLength={50} required className={`form__input ${nameError ? '' : 'form__input_error'}`} type="text" name="name" placeholder="Имя и фамилия автора" />
          <CSSTransition in={!nameError} timeout={200} classNames="form__error-animation" unmountOnExit={true} mountOnEnter={true}>
            <span className={`form__input-error`}>{`Ошибка`}</span>
          </CSSTransition>
          <input onChange={handleInputChange} value={mailInput} minLength={2} maxLength={60} required className={`form__input ${mailError ? '' : 'form__input_error'}`} type="email" name="email" placeholder="Почта" />
          <CSSTransition in={!mailError} timeout={200} classNames="form__error-animation" unmountOnExit={true} mountOnEnter={true}>
            <span className={`form__input-error`}>{`Ошибка`}</span>
          </CSSTransition>
          <input onChange={handleInputChange} value={phoneInput} minLength={11} maxLength={11} required className={`form__input ${phoneError ? '' : 'form__input_error'}`} type="tel" name="phone" placeholder="Телефон" pattern="7^\[0-9]{3}^\[0-9]{3}[0-9]{2}[0-9]{2}"/>
          <CSSTransition in={!phoneError} timeout={200} classNames="form__error-animation" unmountOnExit={true} mountOnEnter={true}>
            <span className={`form__input-error`}>{`Ошибка`}</span>
          </CSSTransition>
          <textarea onChange={handleInputChange} value={poemsInput} minLength={22} maxLength={1028} required className={`form__input ${poemsError ? '' : 'form__input_error'}`} form="form" name="poems" placeholder="Стихи" />
          <CSSTransition in={!poemsError} timeout={200} classNames="form__error-animation" unmountOnExit={true} mountOnEnter={true}>
            <span className={`form__input-error`}>{`Ошибка`}</span>
          </CSSTransition>
          <div className="form__offer-container">
            <input onChange={handleInputChange} checked={offerRadioInput} id="offer" name="offer" className={`form__offer`} type="checkbox"/>
            <label htmlFor="offer" className={`form__offer-label ${offerRadioInput ? 'form__offer_active' : ''}`} />
            <p className="form__offer-text">Согласен с <a className="form__offer-link" href="../images/oferta.pdf">офертой</a></p>
          </div>
          <button type="submit" className={`form__submit ${isSubmitDisabled ? 'form__submit_disabled' : ''}`} disabled={isSubmitDisabled}>{ isFormSent ? 'Ура, форма отправлена!' : 'Отправить форму' }</button>
        </form>
        {/*<CSSTransition in={unknownError} timeout={200} classNames="form__error-animation" unmountOnExit={true} mountOnEnter={true}>*/}
        {/*  <span className={`form__input-error`}>{`Ошибка`}</span>*/}
        {/*</CSSTransition>*/}
      </div>
    </>
  )
}

export default Form;
