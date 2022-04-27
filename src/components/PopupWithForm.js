import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${props.isOpen && "popup_opened"}`}
    >
      <div className="popup__overlay" />
      <div className="popup__content">
        <button
          className="popup__close-icon"
          type="button"
          aria-label="Закрыть."
          onClick={props.onClose}
        />
        <h2 className="popup__title">{props.title}</h2>
        <form
          className={`form form_${props.name}`}
          action="URL"
          name={`form_${props.name}`}
          noValidate=""
        >
          {props.children}
          <button
            type="submit"
            className="form__button form__button_edit_profile"
            name="submit"
            value="Сохранить"
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
