import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() { setEditProfilePopupOpen(true) }
  function handleEditAvatarClick() { setEditAvatarPopupOpen(true) }
  function handleAddPlaceClick() { setAddPlacePopupOpen(true) }
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }
  function handleCardClick(card) { setSelectedCard(card) }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>
      <Footer />

      <PopupWithForm name="edit-profile" title="Редактировать профиль" isOpened={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__input">
          <input id="name-input" type="text" name="name" className="popup__item popup__item_type_name" placeholder="Ваше имя" minLength="2" maxLength="40" required />
          <span className="name-input-error popup__input-error"></span>
          <input id="about-input" type="text" name="about" className="popup__item popup__item_type_about" placeholder="О себе" minLength="2" maxLength="200" required />
          <span className="about-input-error popup__input-error"></span>
        </fieldset>
        <button type="submit" aria-label="Сохранить" className="popup__button">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="edit-profile-image" title="Обновить аватар" isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__input">
          <input id="image-input" type="url" name="avatar" className="popup__item popup__item_type_image" placeholder="Ссылка на картинку" required />
          <span className="image-input-error popup__input-error"></span>
        </fieldset>
        <button type="submit" aria-label="Сохранить" className="popup__button">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="confirm-deletion" title="Вы уверены?">
        <button type="submit" aria-label="Да" className="popup__button">Да</button>
      </PopupWithForm>

      <PopupWithForm name="add-element" title="Новое место" isOpened={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__input">
          <input id="place-input" type="text" name="name" className="popup__item popup__item_type_place" placeholder="Название" minLength="2" maxLength="30" required />
          <span className="place-input-error popup__input-error"></span>
          <input id="photo-input" type="url" name="link" className="popup__item popup__item_type_photo" placeholder="Ссылка на картинку" required />
          <span className="photo-input-error popup__input-error"></span>
        </fieldset>
        <button type="submit" aria-label="Сохранить" className="popup__button">Создать</button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
