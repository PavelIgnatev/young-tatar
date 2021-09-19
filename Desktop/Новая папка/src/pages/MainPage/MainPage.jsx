import React from 'react';
import classes from './MainPage.module.scss';
import { Rocket, Rocket1, Rocket2 } from '../../components/Icon';
import { Link } from 'react-router-dom';

const Card = ({ color, children, img }) => {
  return (
    <div style={{ background: color }} className={classes.card}>
      <div className={classes.img}>{img}</div>
      <div className={classes.children}>{children}</div>
    </div>
  );
};

export const MainPage = () => {
  return (
    <section className={classes.MainPage}>
      <div className={classes.title}>Учите татарский язык просто и эффективно</div>
      <div className={classes.subtitle}>Новый метод изучения родного языка</div>
      <div className={classes.wrapper}>
        <Card color="#E7E7E7" img={<Rocket2 />}>
          Быстрое обучения с использованием простого решения
        </Card>
        <Card color="#D0E5FF" img={<Rocket />}>
          Игровой формат получения новых знаний языка
        </Card>
        <Card color="#D5FFCE" img={<Rocket1 />}>
          Бесплатный сервис доступный каждому
        </Card>
      </div>
      <Link to="/category" className={classes.button}>
        Начать учиться
      </Link>
    </section>
  );
};
