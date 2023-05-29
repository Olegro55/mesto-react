import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick }) {

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `element__heart ${isLiked && 'element__heart_active'}` 
  );

  function handleClick() {
    onCardClick(card);
  } 

  return (
    <div className="element">
      <img className="element__foto" alt={card.name} src={card.link} onClick={handleClick}/>
      <div className="element__bottom">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__like">
          <button type="button" aria-label="Лайк" className={cardLikeButtonClassName} />
          <p className="element__like-counter"></p>
        </div>
      </div>
      {isOwn && <button type="button" aria-label="Удаление" className="element__delete" />}
    </div>
  );
}

export default Card;