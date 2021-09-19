import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CategoryIdPage } from './CategoryIdPage/CategoryIdPage';
import { CategoryPage } from './CategoryPage/CategoryPage';
import { MainPage } from './MainPage/MainPage';
import { OffersPage } from './OffersPage/OffersPage';

export const RouterPages = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/category" component={CategoryPage} />
      <Route exact path="/category/:id" component={CategoryIdPage} />
      <Route exact path="/offers/:id" component={OffersPage} />
    </Switch>
  );
};
