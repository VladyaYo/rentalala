import React from 'react';

import './ClientProfile.scss';

import TopProfile from "../../TopProfile/TopProfile";
import AboutTopProfile from "../../AboutTopProfile/AboutTopProfile";
import ProfileLayout from "../../ProfileLayout/ProfileLayout";

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