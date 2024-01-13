import React from "react";
import { Provider } from "react-redux";

import Editor from "./Editor";
import store from "./data/store";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Editor />
      </div>
    </Provider>
  );
};

export default App;
