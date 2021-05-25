import React from 'react';
import { BrowserRouter,Switch,Route, Redirect } from 'react-router-dom'
import { Routes } from './Routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/">
            <Redirect to="/bangalore"/>
          </Route>
          {
            Routes.map(route => {
              return(
                <Route key={`${route.id}`} exact={true} path={route.path} component={route.component}/>
              );
            })
          }
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
