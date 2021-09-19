import React, { useState } from 'react';
import classes from './CategoryIdPage.module.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import data from '../../data/data.json';
import {
  ActionAnimations,
  SwipeableList,
  SwipeableListItem,
} from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import BasicSwipeContent from '../../components/BasicSwipeContent/BasicSwipeContent';
import BasicListItem from '../../components/BasicListItem/BasicListItem';
import { useParams } from 'react-router-dom';
import { declOfNum } from '../../helpers/declOfNum';
import { GoodNotification } from '../../components/NotificationsService';
import { ToastContainer } from 'react-toastify';
import classNames from 'classnames';
import { Vector } from '../../components/Icon';

export const CategoryIdPage = () => {
  const { id: ids } = useParams();

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  const threshold = 0.25;

  let [i, setI] = useState(Math.round(getRandomArbitrary(0, data[ids].length - 1)));
  let [count, setCount] = useState(3);

  document.documentElement.scrollIntoView(true);

  const swipeRightOptions = (value) => {
    return {
      content: (
        <div className={classNames(classes.wrapper, classes.wrapper_red)} onClick={() => false}>
          <BasicSwipeContent label={value ?? 'не определено'} position="left" />
          <div className={classes.not}>Похоже, вам есть что подучить.</div>
          <button disabled={count === 0} className={classes.button} />
        </div>
      ),
      actionAnimation: ActionAnimations.REMOVE,
      action: async () => {
        document.getElementById('root').classList.add('overlay');
        await new Promise((res) => setTimeout(res, 3000));
        document.getElementById('root').classList.remove('overlay');
        setI(Math.round(getRandomArbitrary(0, data[ids].length - 1)));
        localStorage.setItem(
          `success${ids}`,
          Number(
            ((Number(localStorage.getItem(`success${ids}`)) < 0
              ? 1
              : Number(localStorage.getItem(`success${ids}`))) ?? 0) - 0.5,
          ),
        );
        setCount(3);
      },
    };
  };

  const swipeLeftOptions = (value) => {
    return {
      content: (
        <div className={classNames(classes.wrapper, classes.wrapper_green)}>
          <BasicSwipeContent label={value ?? 'не определено'} position="right" />
          <div className={classes.not}>Вы неплохо справляетесь, продолжайте в том же духе</div>
          <button disabled={count === 0} className={classes.button}>
            Мой ответ неверный
          </button>
        </div>
      ),
      actionAnimation: ActionAnimations.REMOVE,
      action: async () => {
        document.getElementById('root').classList.add('overlay');
        await new Promise((res) => setTimeout(res, 3000));
        document.getElementById('root').classList.remove('overlay');
        setI(Math.round(getRandomArbitrary(0, data[ids].length - 1)));
        localStorage.setItem(
          `progress${ids}`,
          Number((Number(localStorage.getItem(`progress${ids}`)) ?? 0) + 1),
        );
        localStorage.setItem(
          `success${ids}`,
          Number((Number(localStorage.getItem(`success${ids}`)) ?? 0) + 1),
        );
        setCount(3);
      },
    };
  };

  return (
      <div className={classes.CategoryIdPage}>
        <div className="animations-swipeable-list__container">
          <SwipeableList threshold={threshold}>
            {({ className, scrollStartThreshold, swipeStartThreshold, threshold }) => (
              <TransitionGroup className={className} enter exit>
                {data[ids].map(({ id, text }) => (
                  <CSSTransition classNames="my-node" key={id} timeout={0}>
                    <SwipeableListItem
                      key={id}
                      scrollStartThreshold={scrollStartThreshold}
                      swipeLeft={swipeLeftOptions(`${text} - ${data[ids][id]['translate']}`)}
                      swipeRight={swipeRightOptions(`${text} - ${data[ids][id]['translate']}`)}
                      swipeStartThreshold={swipeStartThreshold}
                      threshold={threshold}
                    >
                      {Number(id) === Number(i) && (
                        <>
                          <div className={classes.wrapper}>
                            <BasicListItem label={text} />
                            <Vector className={classes.vector} />
                            <Vector className={classNames(classes.rotate, classes.vector)} />
                            <div className={classes.not}>
                              {declOfNum(count, ['подсказка', 'подсказки', 'подсказок'])} доступно
                            </div>
                            <button
                              disabled={count === 0}
                              onClick={() => {
                                setCount(count - 1);
                                document.documentElement.scrollIntoView(true);
                                GoodNotification(data[ids][id]['offer']);
                              }}
                              className={classes.button}
                            >
                              Получить подсказку
                            </button>
                          </div>

                          <ToastContainer hideProgressBar />
                        </>
                      )}
                    </SwipeableListItem>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            )}
          </SwipeableList>
        </div>
      </div>
  );
};
