function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  } 

  return (
    <div className="element">
      <img className="element__foto" alt={card.name} src={card.link} onClick={handleClick}/>
      <div className="element__bottom">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__like">
          <button type="button" aria-label="Лайк" className="element__heart" />
          <p className="element__like-counter"></p>
        </div>
      </div>
      <button type="button" aria-label="Удаление" className="element__delete" />
    </div>
  );
}

export default Card;