import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import thunk from "redux-thunk";
import IndexPage from "./pages/IndexPage";
import rootReducer from "./redux/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App(): ReactElement {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={IndexPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
