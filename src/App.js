import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import { Routes } from './Routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
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
