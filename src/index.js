import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { Suspense } from 'react';
import ReactDOM from "react-dom";
import Preloader from "./components/01_uiElements/Preloader";

import App from './App'

class Index extends React.Component {

  render() {
    return (

      <Suspense fallback={(<Preloader />)}>
        <App />
      </Suspense>

    );
  }
}

ReactDOM.render(<Index />, document.getElementById("App"));


