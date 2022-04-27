import React from 'react';

function ImagePopup(props) {
    return (
      <div className={`popup popup_image ${props.card.name && "popup_opened"}`}>
        <div className="popup__overlay" />
          <figure className="figure">
            <button
            className="popup__close-icon"
            type="button"
            aria-label="Закрыть."
            onClick={props.onClose}
            />
          <img className="figure__image" src={props.card.link} alt={props.card.name} />
          <figcaption className="figure__subtitle">
            {props.card.name}
          </figcaption>
          </figure>
      </div>
    );
}

export default ImagePopup;