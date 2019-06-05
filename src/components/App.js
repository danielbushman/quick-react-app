import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import Sidebar from "./Sidebar.js";
import Main from "./Main.js";
import store from "../redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
