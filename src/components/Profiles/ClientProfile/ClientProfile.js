import React from 'react';

import './style.css';

import TopProfile from "../../TopProfile/TopProfile";
import AboutTopProfile from "../../AboutTopProfile/AboutTopProfile";
import ProfileLayout from "../../ProfileLayout/ProfileLayout";
import Footer from "../../Footer/Footer";

const ProfileArtist = () =>{

    return(
        <div>
            <TopProfile/>
            <AboutTopProfile/>
            <ProfileLayout />
        </div>
    )

};
export default ProfileArtist;