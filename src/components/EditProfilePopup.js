import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpened, onClose }) {
  return (
    <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonText="Сохранить" isOpened={isOpened} onClose={onClose}>
      <fieldset className="popup__input">
        <input id="name-input" type="text" name="name" className="popup__item popup__item_type_name" placeholder="Ваше имя" minLength="2" maxLength="40" required />
        <span className="name-input-error popup__input-error"></span>
        <input id="about-input" type="text" name="about" className="popup__item popup__item_type_about" placeholder="О себе" minLength="2" maxLength="200" required />
        <span className="about-input-error popup__input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;