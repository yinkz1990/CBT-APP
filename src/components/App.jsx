import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Display from "./Display";
import DisplayQuestion from "./DisplayQuestion";
import startPage from "./Startpage";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={startPage} />
            <Route path="/submit" component={Display} />
            <Route path="/examination" component={DisplayQuestion} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
