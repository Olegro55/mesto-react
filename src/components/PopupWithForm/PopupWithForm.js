function PopupWithForm(props) {

  return (
    <section className={`popup popup_${props.name} ${props.isOpened ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" aria-label="Закрыть" className="popup__close-icon"></button>
        <h2 className="popup__title"> {props.title} </h2>
        <form className="popup__form" name={`${props.name}_form`} noValidate>
          {props.children}
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;