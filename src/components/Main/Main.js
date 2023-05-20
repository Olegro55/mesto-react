function Main() {
    return (
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
    );
}

export default Main