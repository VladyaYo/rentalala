import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";

import "./styles/style.css";

import Header from "./components/Header/Header";
import TopProfile from "./components/TopProfile/TopProfile";
import Footer from "./components/Footer/Footer";
import AboutTopProfile from './components/AboutTopProfile/AboutTopProfile';
// import Popup from "./components/Popup/Popup";

const App = () => {
    return  (
        <div>
            <Header/>
            <TopProfile/>
            <AboutTopProfile/>
            {/*<Popup type="registerForm"/>*/}
            {/*<Popup type="loginForm"/>*/}
            {/*<Popup type="registerClientForm"/>*/}
            <Footer/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
