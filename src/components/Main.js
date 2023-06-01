import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ cards, onEditProfile, onEditAvatar, onAddPlace, onCardClick, onLike }) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <img className="profile__image" alt="Фото пользователя" src={currentUser.avatar} />
                <button type="button" aria-label="Редактировать фото пользователя" className="profile__edit-image" onClick={onEditAvatar} />
                <div className="profile__info">
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <button type="button" aria-label="Редактировать профиль" className="profile__edit-button" onClick={onEditProfile} />
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button type="button" aria-label="Добавить" className="profile__add-button" onClick={onAddPlace} />
            </section>
            <section className="elements">
                {cards.map((card) => {
                    return (
                        <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onLike}/>
                    );
                })}
            </section>
        </main>
    );
}

export default Main