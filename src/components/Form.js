import React from 'react';

import Api from '../utils/Api';
import { CSSTransition } from 'react-transition-group';

const Form = function() {
  const [nameError, setNameError] = React.useState('');
  const [mailError, setMailError] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');
  const [poemsError, setPoemsError] = React.useState('');
  const [offerRadioError, setOfferRadioError] = React.useState('');
  const [unknownError, setUnknownError] = React.useState('');
  const [buttonsStatus, setButtonsStatus] = React.useState('');

  const [nameInput, setNameInput] = React.useState('');
  const [emailInput, setEmailInput] = React.useState('');
  const [phoneInput, setPhoneInput] = React.useState('');
  const [poemsInput, setPoemsInput] = React.useState('');
  const [offerRadioInput, setOfferRadioInput] = React.useState(false);

  const updateButtonStatus = function() {
    if (nameError !== '' && mailError !== '' && phoneError !== '' && offerRadioError !== '' && poemsError !== '') {
      setButtonsStatus(true);
    } else {
      setButtonsStatus(false);
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
        if(!e.target.validity.valid) {
          setNameError(e.target.validationMessage);
        } else {
          setNameError('');
        }
        updateButtonStatus();
        break;
      case 'email':
        setEmailInput(target.value);
        if(!e.target.validity.valid) {
          setMailError(e.target.validationMessage);
        } else {
          setMailError('');
        }
        updateButtonStatus();
        break;
      case 'phone':
        setPhoneInput(target.value);
        if(!e.target.validity.valid) {
          setPhoneError(e.target.validationMessage);
        } else {
          setPhoneError('');
        }
        updateButtonStatus();
        break;
      case 'poems':
        setPoemsInput(target.value);
        if(!e.target.validity.valid) {
          setPoemsError(e.target.validationMessage);
        } else {
          setPoemsError('');
        }
        updateButtonStatus();
        break;
      case 'offer':
        setOfferRadioInput(!offerRadioInput);
        if(!e.target.validity.valid) {
          setOfferRadioError(e.target.validationMessage);
        } else {
          setOfferRadioError('');
        }
        updateButtonStatus();
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
    <>
      <p className="form__description">
        Заполняя эту форму, вы становитесь частью проекта.
      </p>
      <div className="form">
        <form className="form__container" id="form" onSubmit={handleSubmit}>
          <input onChange={handleInputChange} value={nameInput} minLength={4} maxLength={10} className={`form__input ${nameError !== '' ? 'form__input_error' : ''}`} type="text" name="name" placeholder="Имя и фамилия автора" />
          <CSSTransition in={nameError !== ''} timeout={1000} classNames="form__error-animation">
            <span className={`form__input-error`}>{`Текст`}</span>
          </CSSTransition>
          <input onChange={handleInputChange} value={emailInput} className={`form__input ${mailError !== '' ? 'form__input_error' : ''}`} type="email" name="email" minLength="3" placeholder="Почта" />
          <CSSTransition in={mailError !== ''} timeout={1000} classNames="form__error-animation" unmountOnExit={true} mountOnEnter={true}>
            <span className={`form__input-error`}>{mailError}</span>
          </CSSTransition>
          <input onChange={handleInputChange} value={phoneInput} className={`form__input ${phoneError !== '' ? 'form__input_error' : ''}`} type="tel" name="phone" minLength="3" placeholder="Телефон" />
          <CSSTransition in={phoneError !== ''} timeout={1000} classNames="form__error-animation" unmountOnExit={true} mountOnEnter={true}>
            <span className={`form__input-error`}>{phoneError}</span>
          </CSSTransition>
          <textarea onChange={handleInputChange} value={poemsInput} className={`form__input ${poemsError !== '' ? 'form__input_error' : ''}`} form="form" name="poems" minLength="3" placeholder="Стихи" />
          <CSSTransition in={poemsError !== ''} timeout={1000} classNames="form__error-animation" unmountOnExit={true} mountOnEnter={true}>
            <span className={`form__input-error`}>{poemsError}</span>
          </CSSTransition>
          <div className="form__offer-container">
            <input onChange={handleInputChange} checked={offerRadioInput} id="offer" name="offer" className={`form__offer`} type="checkbox"/>
            <label htmlFor="offer" className={`form__offer-label ${offerRadioInput ? 'form__offer_active' : ''}`} />
            <p className="form__offer-text">Согласен с <a className="form__offer-link" href="../images/oferta.pdf">офертой</a></p>
          </div>
        </form>
        <button className={`form__submit ${buttonsStatus ? 'form__submit_disabled' : ''}`} disabled={buttonsStatus} type="submit">Отправить</button>
        <CSSTransition in={unknownError !== ''} timeout={1000} classNames="form__error-animation" unmountOnExit={true} mountOnEnter={true}>
          <span className={`form__input-error`}>{nameError}</span>
        </CSSTransition>
      </div>
    </>
  )
}

export default Form;
