import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import IndexPage from "./pages/IndexPage";
import rootReducer from "./redux/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App(): ReactElement {
  return (
    <Provider store={store}>
      <IndexPage />
    </Provider>
  );
}

export default App;
