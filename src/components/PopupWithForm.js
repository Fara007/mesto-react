import React from "react";

function PopupWithForm({name, title, buttonText, children, isOpen, onClose}) {
  return (
    <div
      className={`popup popup_${name} ${isOpen && "popup_opened"}`}
    >
      <div className="popup__overlay" />
      <div className="popup__content">
        <button
          className="popup__close-icon"
          type="button"
          aria-label="Закрыть."
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form
          className={`form form_${name}`}
          action="URL"
          name={`form_${name}`}
          noValidate=""
        >
          {children}
          <button
            type="submit"
            className="form__button form__button_edit_profile"
            name="submit"
            value="Сохранить"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
