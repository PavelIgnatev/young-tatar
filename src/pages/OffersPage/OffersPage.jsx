import React, { useEffect, useState } from 'react';
import classes from './OffersPage.module.scss';
import offers from '../../data/offers.json';
import { useParams } from 'react-router';
import classNames from 'classnames';
import { ErrorNotification, SuccessNotification } from '../../components/NotificationsService';
import { ToastContainer } from 'react-toastify';

export const OffersPage = () => {
  useEffect(() => {
    document.documentElement.scrollIntoView(true);
  }, []);

  const { id: page } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState(0);
  const [cardList, setCarslist] = useState(offers[page][id]['words']);

  const startWord = offers[page][id]['words'][offers[page][id]['words'].length - 1];

  let [carrentCard, setCarrentCard] = useState(null);

  function dragStartHandler(e, card) {
    setCarrentCard(card);
  }

  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dropHandler(e, card) {
    setCarslist(
      cardList.map((c) => {
        if (c.id === card.id && card.text === '____') {
          return { ...c, order: carrentCard.order };
        }
        if (c.id === carrentCard.id && card.text === '____') {
          return { ...c, order: card.order };
        }
        return c;
      }),
    );
  }

  const sortCard = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  async function ov() {
    let r = '';
    cardList.sort(sortCard).forEach( (card) => {
      if (card.text !== '____') r += card.text;
    });
    if (r === offers[page][id]['result'] && carrentCard) {
      SuccessNotification('Правильно!');
      await new Promise((res)=>setTimeout(res, 2500))
      setCarslist(offers[page][id]['words'])
      localStorage.setItem(`offers${page}`, (localStorage.getItem(`offers${page}`) ?? 0) + 1);
    } else ErrorNotification('Попробуйте снова!');
  }

  return (
    <>
      <section className={classes.OffersPage}>
        <div className={classes.title}>Перенесите слово туда, где оно уместно</div>
        <div className={classes.cardWrapper}>
          {cardList
            .sort(sortCard)
            .slice(0, cardList.length - 1)
            .map((card) => (
              <span
                onDragStart={(e) => dragStartHandler(e, card)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropHandler(e, card)}
                draggable={startWord.text === card.text ? true : false}
                key={card.id}
                className={classNames(classes.card, {
                  [classes.actives]: startWord.text === card.text,
                })}
              >
                {card.text}
              </span>
            ))}
        </div>
        {cardList.sort(sortCard)[cardList.length - 1].text === startWord.text && (
          <span
            onDragStart={(e) => dragStartHandler(e, cardList.sort(sortCard)[cardList.length - 1])}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, cardList.sort(sortCard)[cardList.length - 1])}
            draggable={true}
            key={cardList.sort(sortCard)[cardList.length - 1].id}
            className={classNames(classes.card, classes.pt, {
              [classes.active]:
                cardList.sort(sortCard)[cardList.length - 1].text === startWord.text,
            })}
          >
            {cardList.sort(sortCard)[cardList.length - 1].text}
          </span>
        )}
        <button onClick={ov} className={classes.button}>
          Проверить
        </button>
        <ToastContainer hideProgressBar autoClose={2500} />
      </section>
    </>
  );
};
