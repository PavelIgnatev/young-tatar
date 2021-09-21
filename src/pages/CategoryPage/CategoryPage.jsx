import React from 'react';
import { BaseCategory } from '../../components/BaseCategory/BaseCategory';
import classes from './CategoryPage.module.scss';
import {
  Design,
  Group1,
  Group2,
  Group3,
  Rectangle1,
  Rectangle2,
  Rectangle3,
} from '../../components/Icon';
import data from '../../data/data.json';

export const CategoryPage = () => {
  document.documentElement.scrollIntoView(true);
  return (
    <section className={classes.CategoryPage}>
      <div className={classes.title}>Свайп-игры:</div>
      <div className={classes.wrapper}>
        <BaseCategory
          to="/category/1"
          title="Обращения"
          subtitle="Как отвечать на ежедневные разговоры и не терятся, когда с вами знакомятся"
          progress={Math.min(
            Number(((localStorage.getItem('progress1') / data[1].length) * 100).toFixed(0)),
            100,
          )}
          success={Math.min(
            Number(((localStorage.getItem('success1') / data[1].length) * 100).toFixed(0)),
            100,
          )}
          word={data[1].length}
          time="5"
          background="#E7E7E7"
          color="#89898A"
          source={<Group1 />}
        />
        <BaseCategory
          to="/category/2"
          title="Цвета радуги"
          subtitle="“Каждый охотник желает знать где сидит фазан” или цвета на татарском языке"
          progress={Math.min(
            Number(((localStorage.getItem('progress2') / data[2].length) * 100).toFixed(0)),
            100,
          )}
          success={Math.min(
            Number(((localStorage.getItem('success2') / data[2].length) * 100).toFixed(0)),
            100,
          )}
          word={data[2].length}
          background="#FFF3C9"
          color="#2A5083"
          time="10"
          source={<Group2 />}
        />
        <BaseCategory
          to="/category/3"
          title="Черты характера"
          subtitle="Как описать характер человека и сделать
        ему комплимент?"
          progress={Math.min(
            Number(((localStorage.getItem('progress3') / data[3].length) * 100).toFixed(0)),
            100,
          )}
          success={Math.min(
            Number(((localStorage.getItem('success3') / data[3].length) * 100).toFixed(0)),
            100,
          )}
          background="#FFDDD6"
          color="#2A5083"
          word={data[3].length}
          time="0"
          source={<Group3 />}
        />
        <BaseCategory
          to="/category/4"
          title="В путешествии"
          subtitle="Путешествуйте с комфортом, используя базовые зания татрского языка"
          progress={Math.min(
            Number(((localStorage.getItem('progress4') / data[4].length) * 100).toFixed(0)),
            100,
          )}
          success={Math.min(
            Number(((localStorage.getItem('success4') / data[4].length) * 100).toFixed(0)),
            100,
          )}
          word={data[4].length}
          background="#E7F9FF"
          color="#2684FF"
          time="0"
          source={<Rectangle1 />}
        />
        <BaseCategory
          to="/category/5"
          title="Свойства"
          subtitle="Как описывать событие и явление, предмет и человека?"
          progress={Math.min(
            Number(((localStorage.getItem('progress5') / data[5].length) * 100).toFixed(0)),
            100,
          )}
          success={Math.min(
            Number(((localStorage.getItem('success5') / data[5].length) * 100).toFixed(0)),
            100,
          )}
          time="0"
          word={data[5].length}
          background="#D5FFCE"
          color="#57CD43"
          source={<Rectangle2 />}
        />
        <BaseCategory
          to="/category/6"
          title="Согласие/отказ"
          subtitle="Как правильно извинится, согласится или
        отказаться?"
          progress={Math.min(
            Number(((localStorage.getItem('progress6') / data[6].length) * 100).toFixed(0)),
            100,
          )}
          success={Math.min(
            Number(((localStorage.getItem('success6') / data[6].length) * 100).toFixed(0)),
            100,
          )}
          word={data[6].length}
          time="0"
          background="#D0E5FF"
          color="#2A5083"
          source={<Rectangle3 />}
        />
      </div>
      <div className={classes.title}>Игры с предложениями:</div>
      <div className={classes.wrapper}>
        <BaseCategory
          to="/offers/1"
          title="Встреча с другом"
          subtitle="Проверьте свои навыки использования слов
          в разговре"
          progress={Math.min(
            Number(((localStorage.getItem('offers1') / 1) * 100).toFixed(0)),
            100,
          )}
          success={Math.min(Number(((localStorage.getItem('offers1') / 1) * 100).toFixed(0)), 100)}
          offers={1}
          time="0"
          background="#E7E7E7"
          color="#89898A"
          source={<Design />}
        />
      </div>
    </section>
  );
};
