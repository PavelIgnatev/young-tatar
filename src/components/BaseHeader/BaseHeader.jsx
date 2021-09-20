import React from 'react';
import { Link, Route } from 'react-router-dom';
import classes from './BaseHeader.module.scss';

export const BaseHeader = () => {
  return (
    <header id="header" className={classes.BaseHeader}>
      <Link to="/category" className={classes.icon}>
        Young<span>&&</span>
        <span>Tatar</span>
      </Link>
      <Route
        exact
        path="/"
        render={() => (
          <Link to="/category" className={classes.button}>
            ПОПРОБОВАТЬ
          </Link>
        )}
      />
    </header>
  );
};
