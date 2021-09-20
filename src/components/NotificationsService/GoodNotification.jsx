import React from 'react';
import { toast } from 'react-toastify';
import { Notes } from '../Icon';
import classes from './NotificationsService.module.scss';

export function GoodNotification(content, options) {
  toast.error(
    <div className={classes.content}>
      <Notes className={classes.icon} /> {content}
    </div>,
    {
      position: toast.POSITION.TOP_CENTER,
      className: classes.good,
      ...options,
    },
  );
}
