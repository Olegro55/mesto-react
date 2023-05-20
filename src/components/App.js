import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

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
