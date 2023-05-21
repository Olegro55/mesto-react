import React from 'react';
import Card from './Card';
import api from '../utils/api';

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {

    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo().then(({ name, about, avatar }) => {
            setUserName(name);
            setUserDescription(about);
            setUserAvatar(avatar);
        });
    }, []);

    React.useEffect(() => {
        api.getInitialCards().then((cards) => {
            setCards(cards);
        });
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <img className="profile__image" alt="Фото пользователя" src={userAvatar} />
                <button type="button" aria-label="Редактировать фото пользователя" className="profile__edit-image" onClick={onEditAvatar} />
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button type="button" aria-label="Редактировать профиль" className="profile__edit-button" onClick={onEditProfile} />
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button type="button" aria-label="Добавить" className="profile__add-button" onClick={onAddPlace} />
            </section>
            <section className="elements">
                {cards.map((card) => {
                    return (
                        <Card key={card._id} card={card} onCardClick={onCardClick}/>
                    );
                })}
            </section>
        </main>
    );
}

export default Main