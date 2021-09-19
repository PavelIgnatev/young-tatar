import React from 'react';
import classes from './DataSwipeComponent.module.scss';

export const DataSwipeComponent = ({ title, subtitle, children }) => {
  return (
    <div className={classes.DataSwipeComponent}>
      <div className={classes.title}>{title}</div>
      <div className={classes.subtitle}>{subtitle}</div>
      <div className={classes.children}>{children}</div>
    </div>
  );
};
