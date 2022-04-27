function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element">
      <button
        className="element__delete-icon"
        type="button"
        aria-label="Удалить."
      />
      <img
        className="element__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="element__group">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button" aria-label="Лайк." />
          <span className="element__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
