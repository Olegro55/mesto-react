import React from 'react';
import logoPath from './images/logo.svg';

function App() {
  return (
<div className="page">
  <header className="header">
    <img className="header__logo" src={logoPath} alt="логотип" />
  </header>
  <main className="content">
    <section className="profile">
      <img className="profile__image" alt="Фото пользователя" />
      <button type="button" aria-label="Редактировать фото пользователя" className="profile__edit-image"></button>
      <div className="profile__info">
        <h1 className="profile__title"></h1>
        <button type="button" aria-label="Открыть попап" className="profile__edit-button"></button>
        <p className="profile__subtitle"></p>
      </div>
      <button type="button" aria-label="Добавить" className="profile__add-button"></button>
    </section>
    <section className="elements">
      <template id="cardTemplate">
        <div className="element">
          <img className="element__foto" alt="#" />
          <div className="element__bottom">
            <h2 className="element__text"></h2>
            <div className="element__like">
              <button type="button" aria-label="Лайк" className="element__heart"></button>
              <p className="element__like-counter"></p>
            </div>
          </div>
          <button type="button" aria-label="Удаление" className="element__delete"></button>
        </div>
      </template>
    </section>
  </main>
  <footer className="footer">
    <p className="footer__copyright">© 2020 Mesto Russia</p>
  </footer>

  <section className="popup popup_edit-profile">
    <div className="popup__container">
      <button type="button" aria-label="Закрыть" className="popup__close-icon"></button>
      <h2 className="popup__title">Редактировать профиль</h2>
      <form className="popup__form" name="edit-profile-form" noValidate>
        <fieldset className="popup__input">
          <input id="name-input" type="text" name="name" className="popup__item popup__item_type_name" placeholder="Ваше имя" minLength="2" maxLength="40" required />
          <span className="name-input-error popup__input-error"></span>
          <input id="about-input" type="text" name="about" className="popup__item popup__item_type_about" placeholder="О себе" minLength="2" maxLength="200" required />
          <span className="about-input-error popup__input-error"></span>
        </fieldset>
        <button type="submit" aria-label="Сохранить" className="popup__button">Сохранить</button>
      </form>
    </div>
  </section>

  <section className="popup popup_edit-profile-image">
    <div className="popup__container">
      <button type="button" aria-label="Закрыть" className="popup__close-icon"></button>
      <h2 className="popup__title">Обновить аватар</h2>
      <form className="popup__form" name="edit-profile-image-form" noValidate>
        <fieldset className="popup__input">
          <input id="image-input" type="url" name="avatar" className="popup__item popup__item_type_image" placeholder="Ссылка на картинку" required />
          <span className="image-input-error popup__input-error"></span>
        </fieldset>
        <button type="submit" aria-label="Сохранить" className="popup__button">Сохранить</button>
      </form>
    </div>
  </section>

  <section className="popup popup_confirm-deletion">
    <div className="popup__container">
      <button type="button" aria-label="Закрыть" className="popup__close-icon"></button>
      <h2 className="popup__title">Вы уверены?</h2>
      <form className="popup__form" name="confirm-deletion-form" noValidate>
        <button type="submit" aria-label="да" className="popup__button">Да</button>
      </form>
    </div>
  </section>

  <section className="popup popup_add-element">
    <div className="popup__container">
      <button type="button" aria-label="Закрыть" className="popup__close-icon"></button>
      <h2 className="popup__title">Новое место</h2>
      <form className="popup__form" name="add-element-form" noValidate>
        <fieldset className="popup__input">
          <input id="place-input" type="text" name="name" className="popup__item popup__item_type_place" placeholder="Название" minLength="2" maxLength="30" required />
          <span className="place-input-error popup__input-error"></span>
          <input id="photo-input" type="url" name="link" className="popup__item popup__item_type_photo" placeholder="Ссылка на картинку" required />
          <span className="photo-input-error popup__input-error"></span>
        </fieldset>
        <button type="submit" aria-label="Сохранить" className="popup__button">Создать</button>
      </form>
    </div>
  </section>

  <section className="popup-image popup">
    <div className="popup-image__container">
      <img className="popup-image__foto" alt="#" />
      <p className="popup-image__text"></p>
      <button type="button" aria-label="Закрыть" className="popup__close-icon"></button>
    </div>
  </section>
</div>
  );
}

export default App;
