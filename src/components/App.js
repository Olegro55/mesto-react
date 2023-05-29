import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }, []);

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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
        <Footer />

        <EditProfilePopup isOpened={isEditProfilePopupOpen} onClose={closeAllPopups} /> 
        <EditAvatarPopup isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups} /> 

        <PopupWithForm name="confirm-deletion" title="Вы уверены?" buttonText="Да">
        </PopupWithForm>

        <AddPlacePopup isOpened={isAddPlacePopupOpen} onClose={closeAllPopups} /> 

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;