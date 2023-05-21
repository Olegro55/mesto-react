function ImagePopup() {
  return (
    <section className="popup-image popup">
      <div className="popup-image__container">
        <img className="popup-image__foto" alt="#" />
        <p className="popup-image__text"></p>
        <button type="button" aria-label="Закрыть" className="popup__close-icon"></button>
      </div>
    </section>
  );
}

export default ImagePopup;