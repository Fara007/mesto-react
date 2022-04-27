import React from 'react';
import { api } from './utils/Api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState([]);
  const [userDescription, setUserDescription] = React.useState([]);
  const [userAvatar, setUserAvatar] = React.useState([]);

  React.useEffect(() => {
    api.getProfile()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err))
  }, [])

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => { console.log(err)})
    }, [])

   return (
    <main className="content page__content">
      <section className="profile page__profile">
        <img className="profile__avatar" src={userAvatar} alt="Аватар профиля." />
        <button type="button" className="profile__avatar-edit" onClick={props.onEditAvatar} />
        <div className="profile__info">
          <div className="profile__info-pole">
            <h1 className="profile__info-name" name="name"> {userName} </h1>
            <p className="profile__info-job" name="job">{userDescription}</p>
          </div>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Редактировать."
            onClick={props.onEditProfile}
          />
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить."
          onClick={props.onAddPlace}
        />
      </section>
      <section className="elements page__elements">
        {
          cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          ))
        }
      </section>
    </main>
  );
}

export default Main;