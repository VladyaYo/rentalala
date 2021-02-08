import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "antd/dist/antd.css";
import "./styles/style.css";

import Header from "./components/Header/Header";
import ProfileArtist from "./components/Profiles/ArtistProfile/ProfileArtist";
import ClientProfile from "./components/Profiles/ClientProfile/ClientProfile";
import Footer from "./components/Footer/Footer";
import WaitingRoom from "./components/WaitingRoom/WaitingRoom";
import LandingMain from "./components/LandingMain/LandingMain";

const App = () => {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path="/profile-artist" component={ProfileArtist} />
          <Route path="/profile-client" component={ClientProfile} />
          <Route path="/waiting-room" component={WaitingRoom}/>
          <Route exact={true} path="/" component={LandingMain} />
        </Switch>
      <Footer/>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
