import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpened, onClose }) {
    return (
        <PopupWithForm name="add-element" title="Новое место" buttonText="Создать" isOpened={isOpened} onClose={onClose}>
            <fieldset className="popup__input">
                <input id="place-input" type="text" name="name" className="popup__item popup__item_type_place" placeholder="Название" minLength="2" maxLength="30" required />
                <span className="place-input-error popup__input-error"></span>
                <input id="photo-input" type="url" name="link" className="popup__item popup__item_type_photo" placeholder="Ссылка на картинку" required />
                <span className="photo-input-error popup__input-error"></span>
            </fieldset>
        </PopupWithForm>
    );
}

export default AddPlacePopup;