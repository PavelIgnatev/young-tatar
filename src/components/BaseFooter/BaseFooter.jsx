import React from 'react';
import classes from './BaseFooter.module.scss';

export const BaseFooter = () => {
  return (
    <footer className={classes.BaseFooter}>
      <div className={classes.limitation}>
        <span className={classes.six}>6</span>
        <span className={classes.plus}>+</span>
      </div>
      <div className={classes.container}>
        <div
          className={classes.arrow}
          onClick={() => document.documentElement.scrollIntoView(true)}
        ></div>
        <div className={classes.wrapper}>
          <div className={classes.icon}>
            Young<span>&&</span>
            <span>Tatar</span>
          </div>

          <div>2021 © Все правsа защищены</div>
        </div>
      </div>
    </footer>
  );
};
