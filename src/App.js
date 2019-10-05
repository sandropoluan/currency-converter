import React from 'react';
import {Provider} from "react-redux";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import {store} from "./utils";
import './App.scss';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <Main/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
