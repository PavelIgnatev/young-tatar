import React from 'react';
import { toast } from 'react-toastify';
import { Check } from '../Icon';
import classes from './NotificationsService.module.scss';

export function SuccessNotification(content, options) {
  toast.success(
    <div className={classes.content}>
      <Check className={classes.icon} /> {content}
    </div>,
    {
      position: toast.POSITION.TOP_RIGHT,
      className: classes.success,
      ...options,
    },
  );
}
