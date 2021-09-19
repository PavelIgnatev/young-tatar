import React from 'react';
import { toast } from 'react-toastify';
import { Error } from '../Icon';
import classes from './NotificationsService.module.scss';

export function ErrorNotification(content, options) {
  toast.error(
    <div className={classes.content}>
      <Error className={classes.icon} /> {content}
    </div>,
    {
      position: toast.POSITION.TOP_RIGHT,
      className: classes.error,
      ...options,
    },
  );
}
