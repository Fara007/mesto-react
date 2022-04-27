import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm name='edit' title='Редактировать профиль' buttonText='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} >
          <input id="name-user" className="form__input form__input_user_name" type="text" name="info-name" minLength={2} maxLength={40} required />
          <span id="name-user-error" className="error" />
          <input id="job-user" className="form__input form__input_user_job" type="text" name="info-job" minLength={2} maxLength={200} required />
          <span id="job-user-error" className="error" />
        </PopupWithForm>
        <PopupWithForm name='add' title='Новое место' buttonText='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input id="name-card" className="form__input form__input_place_name" type="text" name="info-name" placeholder="Название" minLength={2} maxLength={30} required />
          <span id="name-card-error" className="error" />
          <input id="link-card" className="form__input form__input_place_link" type="url" name="info-link" placeholder="Ссылка на картинку" required />
          <span id="link-card-error" className="error" />
        </PopupWithForm>
        <PopupWithForm name='avatar' title='Обновить аватар' buttonText='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} >
          <input id="link-avatar" className="form__input" type="url" name="avatar" placeholder="Ссылка на картинку" required />
          <span id="link-avatar-error" className="error" />
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </>

  );
}

export default App;
