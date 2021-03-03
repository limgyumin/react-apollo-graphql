import React from "react";
import { Route, Switch } from "react-router-dom";
import * as Pages from "../pages";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Pages.Main />} />
        <Route path="/post/:idx" render={() => <Pages.Post />} />
        <Route path="/handle" render={() => <Pages.Handle />} />
      </Switch>
    </div>
  );
};

export default App;
