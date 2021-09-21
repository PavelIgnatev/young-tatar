import React from 'react';
import classes from './BaseCategory.module.scss';
import { Link } from 'react-router-dom';
import { declOfNum } from '../../helpers/declOfNum';

export const BaseCategory = ({
  to,
  title,
  subtitle,
  source,
  progress,
  time,
  background,
  color,
  success,
  word,
  offers
}) => {
  return (
    <Link
      to={to}
      className={classes.BaseCategory}
      style={{ background: background }}
    >
      <div className={classes.wrappers}>
        <div className={classes.source}>{source}</div>
        <div className={classes.wrapper}>
          <div className={classes.wrap}>
            <div className={classes.title}>{title}</div>
            <div className={classes.word} style={{ color: color }}>
              {word && declOfNum(word, ['слово', 'слова', 'слов'])}{offers && `${offers} пред`}
            </div>
          </div>
          <div className={classes.subtitle}>{subtitle} </div>
          <div className={classes.line}>
            <div
              className={classes.progress}
              style={{ width: `${progress}%`, background: color }}
            ></div>
          </div>
          <div className={classes.progresses} style={{ color: color }}>
            Работа выполнена на {progress}%
          </div>
          <div className={classes.time}>
            Времени ушло времени на работу:{' '}
            <span style={{ color: color }}>{declOfNum(time, ['минута', 'минуты', 'минут'])}</span>
          </div>
          <div className={classes.progress__ob}>
            Успешность выполнения: <span style={{ color: color }}>{success}%</span>
          </div>
          <button className={classes.button} style={{ color: color }}>
            {progress === 0
              ? 'Приступить к решению карточки'
              : progress === 100
              ? 'Решить карточку повторно'
              : 'Продолжить решать карточку'}
          </button>
        </div>
      </div>
    </Link>
  );
};
