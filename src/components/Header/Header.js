import React from 'react';
import classnames from 'classnames';
import { Button, Input, Menu, Dropdown  } from 'antd';
import { DownOutlined } from '@ant-design/icons';


import Logo from '../../components/Logo/Logo'
import './style.css'
import {BrowserRouter as Router, Link} from "react-router-dom";
import Popup from "../Popup/Popup";



const { Search } = Input;

const onSearch = value => console.log(value);

const lang = (
    <Menu>
        <Menu.Item>
            <a rel="noopener noreferrer" href="#en">
                En
            </a>
        </Menu.Item>
        <Menu.Item>
            <a rel="noopener noreferrer" href="#de">
               De
            </a>
        </Menu.Item>
        <Menu.Item>
            <a rel="noopener noreferrer" href="#ru">
                Ru
            </a>
        </Menu.Item>
    </Menu>
);

const user = (
    <Menu>
        <Menu.Item>
            <Popup type="registerForm"/>

        </Menu.Item>
        <Menu.Item>
            <Popup type="registerClientForm"/>
        </Menu.Item>
        <Menu.Item>
            <Popup type="loginForm"/>
        </Menu.Item>
        <Menu.Item danger>
            <a rel="noopener noreferrer" href="#ru">
                Log Out
            </a>
        </Menu.Item>
    </Menu>
);
const mainMenu = (
    <Menu>
        <Menu.Item>
            <a rel="noopener noreferrer" href="/artist-profile">
                ArtistProfile
            </a>
        </Menu.Item>
        <Menu.Item>
            <a rel="noopener noreferrer" href="user/profile">
                UserProfile
            </a>
        </Menu.Item>
        <Menu.Item danger>
            <a rel="noopener noreferrer" href="#ru">
                ArtistProfile
            </a>
        </Menu.Item>
    </Menu>
);

const Header = ({ className, mode }) => {

    const classNames = classnames(
        'header',
        {
            [`header--${mode}`]:Boolean(mode),
        },
        className
    );
    return (
        <header
            className={classNames}
        >
            <div className="container">
                <div className="side">
                    <Link to="/"><Logo/></Link>
                    <ul className="mainMenu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/profile-artist">Artist Profile</Link>
                        </li>
                        <li>
                            <Link to="/profile-client">Client profile</Link>
                        </li>
                    </ul>
                    <Search className="search" placeholder="Search for..." onSearch={onSearch} />

                </div>
                <div className="side">
                    <Dropdown className="dropDown" overlay={lang}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            En <DownOutlined />
                        </a>
                    </Dropdown>
                    <Dropdown className="dropDown" overlay={user}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0.25C8.23438 0.25 6.59375 0.695312 5.07812 1.58594C3.60938 2.44531 2.44531 3.60938 1.58594 5.07812C0.695312 6.59375 0.25 8.23438 0.25 10C0.25 11.7656 0.695312 13.4062 1.58594 14.9219C2.44531 16.3906 3.60938 17.5547 5.07812 18.4141C6.59375 19.3047 8.23438 19.75 10 19.75C11.7656 19.75 13.4062 19.3047 14.9219 18.4141C16.3906 17.5547 17.5547 16.3906 18.4141 14.9219C19.3047 13.4062 19.75 11.7656 19.75 10C19.75 8.23438 19.3047 6.59375 18.4141 5.07812C17.5547 3.60938 16.3906 2.44531 14.9219 1.58594C13.4062 0.695312 11.7656 0.25 10 0.25ZM10 1.75C11.5 1.75 12.8906 2.125 14.1719 2.875C15.4062 3.60938 16.3906 4.59375 17.125 5.82812C17.875 7.10938 18.25 8.5 18.25 10C18.25 11.5 17.875 12.8906 17.125 14.1719C16.3906 15.4062 15.4062 16.3906 14.1719 17.125C12.8906 17.875 11.5 18.25 10 18.25C8.5 18.25 7.10938 17.875 5.82812 17.125C4.59375 16.3906 3.60938 15.4062 2.875 14.1719C2.125 12.8906 1.75 11.5 1.75 10C1.75 8.5 2.125 7.10938 2.875 5.82812C3.60938 4.59375 4.59375 3.60938 5.82812 2.875C7.10938 2.125 8.5 1.75 10 1.75ZM10 4C9.32812 4 8.70312 4.17188 8.125 4.51562C7.54688 4.84375 7.08594 5.29688 6.74219 5.875C6.41406 6.45312 6.25 7.07812 6.25 7.75C6.25 8.29688 6.36719 8.82031 6.60156 9.32031C6.83594 9.80469 7.16406 10.2266 7.58594 10.5859C6.72656 11.0234 6.03906 11.6641 5.52344 12.5078C5.00781 13.3359 4.75 14.25 4.75 15.25H6.25C6.25 14.5625 6.41406 13.9375 6.74219 13.375C7.08594 12.7969 7.53906 12.3438 8.10156 12.0156C8.67969 11.6719 9.3125 11.5 10 11.5C10.6875 11.5 11.3125 11.6719 11.875 12.0156C12.4531 12.3438 12.9062 12.7969 13.2344 13.375C13.5781 13.9375 13.75 14.5625 13.75 15.25H15.25C15.25 14.25 14.9922 13.3359 14.4766 12.5078C13.9609 11.6641 13.2734 11.0234 12.4141 10.5859C12.8359 10.2266 13.1641 9.80469 13.3984 9.32031C13.6328 8.82031 13.75 8.29688 13.75 7.75C13.75 7.07812 13.5781 6.45312 13.2344 5.875C12.9062 5.29688 12.4531 4.84375 11.875 4.51562C11.2969 4.17188 10.6719 4 10 4ZM10 5.5C10.625 5.5 11.1562 5.71875 11.5938 6.15625C12.0312 6.59375 12.25 7.125 12.25 7.75C12.25 8.375 12.0312 8.90625 11.5938 9.34375C11.1562 9.78125 10.625 10 10 10C9.375 10 8.84375 9.78125 8.40625 9.34375C7.96875 8.90625 7.75 8.375 7.75 7.75C7.75 7.125 7.96875 6.59375 8.40625 6.15625C8.84375 5.71875 9.375 5.5 10 5.5Z" fill="#828282"/>
                            </svg>
                            Name Surname <DownOutlined />
                        </a>
                    </Dropdown>
                    <div className="icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.71094 3.96094L5.25 6.44531L4.28906 5.46094L3.21094 6.53906L5.25 8.55469L8.78906 5.03906L7.71094 3.96094ZM10.5 5.25V6.75H21V5.25H10.5ZM10.5 11.25V12.75H21V11.25H10.5ZM10.5 17.25V18.75H21V17.25H10.5Z" fill="#828282"/>
                        </svg>
                    </div>
                    <div className="icon">
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.25 0V13.5H19.75V0H0.25ZM3.48438 1.5H16.5156L10 5.83594L3.48438 1.5ZM1.75 2.15625L9.57812 7.38281L10 7.64062L10.4219 7.38281L18.25 2.15625V12H1.75V2.15625Z" fill="#828282"/>
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;