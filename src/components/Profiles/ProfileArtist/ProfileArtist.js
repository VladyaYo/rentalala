import React from 'react';

import './ProfileArtist.scss';

import TopProfile from "../../TopProfile/TopProfile";
import AboutTopProfile from "../../AboutTopProfile/AboutTopProfile";
import ProfileLayout from "../../ProfileLayout/ProfileLayout";

const ProfileArtist = () =>{

    return(
        <div>
            <TopProfile/>
            <AboutTopProfile/>
            <ProfileLayout mode="events"/>
        </div>
    )
};
export default ProfileArtist;