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
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    about: '',
    avatar: '',
  });
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
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
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.likeCard(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }
  function handleCardDelete(card) {
    api.deleteCard(card)
      .then(_ => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }
  function handleUpdateAvatar(data) {
    api.setUserImage(data)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }
  function handleAddPlace(data) {
    api.addCard(data)
      .then((cardData) => {
        setCards([cardData, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        <EditProfilePopup isOpened={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

        <PopupWithForm name="confirm-deletion" title="Вы уверены?" buttonText="Да" />

        <AddPlacePopup isOpened={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;