import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "antd/dist/antd.css";
import "./styles/style.css";

import Header from "./components/Header/Header";
import ProfileArtist from "./components/Profiles/ProfileArtist/ProfileArtist";
import ClientProfile from "./components/Profiles/ClientProfile/ClientProfile";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/profile-artist" component={ProfileArtist} />
        <Route path="/profile-client" component={ClientProfile} />
      </Switch>

      <Footer />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
