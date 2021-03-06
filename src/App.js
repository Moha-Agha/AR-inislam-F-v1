import React, { Fragment } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./scss/App.scss";
import Navbar from "./components/01_uiElements/navbar/Navbar"
import Footer from "./components/01_uiElements/footer/Footer"
import Home from "./components/02_pages/Home"
import Section from "./components/02_pages/Section"
import Article from "./components/02_pages/Article"
import Logo from "./components/01_uiElements/Logo"
import SecondaryButton from "./components/01_uiElements/button/SecondaryButton"

function App() {
  return (
    <div className="container-app">
      <Router>

        <Navbar />

        <main >

          <div className="nav-mobile">
            <div><Logo /></div>
            <div>
              <SecondaryButton icon="aicon-whatsapp" />
              <SecondaryButton icon="aicon-language" />
            </div>
          </div>

          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/section" exact component={Section} />
            <Route path="/artical" exact component={Article} />
            <Route path="*" exact component={Home} />
          </Switch>

          <Footer />
        </main>

      </Router>
    </div>
  );
}

export default App;
