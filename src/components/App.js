import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PopupWithForm from './PopupWithForm/PopupWithForm';
import ImagePopup from './ImagePopup/ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(0);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(0);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(0);

  function handleEditProfileClick() { console.log('brrrrrrrr'); setEditProfilePopupOpen(true) }
  function handleEditAvatarClick() { setEditAvatarPopupOpen(true) }
  function handleAddPlaceClick() { setAddPlacePopupOpen(true) }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} />
      <Footer />

      <PopupWithForm name="edit-profile" title="Редактировать профиль" isOpened={isEditProfilePopupOpen}>
        <fieldset className="popup__input">
          <input id="name-input" type="text" name="name" className="popup__item popup__item_type_name" placeholder="Ваше имя" minLength="2" maxLength="40" required />
          <span className="name-input-error popup__input-error"></span>
          <input id="about-input" type="text" name="about" className="popup__item popup__item_type_about" placeholder="О себе" minLength="2" maxLength="200" required />
          <span className="about-input-error popup__input-error"></span>
        </fieldset>
        <button type="submit" aria-label="Сохранить" className="popup__button">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="edit-profile-image" title="Обновить аватар" isOpened={isEditAvatarPopupOpen}>
        <fieldset className="popup__input">
          <input id="image-input" type="url" name="avatar" className="popup__item popup__item_type_image" placeholder="Ссылка на картинку" required />
          <span className="image-input-error popup__input-error"></span>
        </fieldset>
        <button type="submit" aria-label="Сохранить" className="popup__button">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="confirm-deletion" title="Вы уверены?">
        <button type="submit" aria-label="Да" className="popup__button">Да</button>
      </PopupWithForm>

      <PopupWithForm name="add-element" title="Новое место" isOpened={isAddPlacePopupOpen}>
        <fieldset className="popup__input">
          <input id="place-input" type="text" name="name" className="popup__item popup__item_type_place" placeholder="Название" minLength="2" maxLength="30" required />
          <span className="place-input-error popup__input-error"></span>
          <input id="photo-input" type="url" name="link" className="popup__item popup__item_type_photo" placeholder="Ссылка на картинку" required />
          <span className="photo-input-error popup__input-error"></span>
        </fieldset>
        <button type="submit" aria-label="Сохранить" className="popup__button">Создать</button>
      </PopupWithForm>

      <ImagePopup />
    </div>
  );
}

export default App;
