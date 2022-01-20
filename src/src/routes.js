import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ListaObras from './pages/ListaObras';

export default function Routes() {
  return (
    <Switch>
      <Route path="/listaobras" component={ListaObras} />
    </Switch>
  );
}
