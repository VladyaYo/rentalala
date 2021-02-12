import React from 'react';


// Import Swiper styles

import './LandingMain.scss'

import Categories from "../Categories/Categories";
import LandingHero from "../LandingHero/LandingHero";
import LandingVideoSlider from "../LandingVideoSlider/LandingVideoSlider"
import Artists from "../Artists/Artists";

const LandingMain = ({ className }) => {

    return (
        <main
            className='mainLanding'
        >
            <LandingHero/>
            <Categories mode="asSlider"/>
            <LandingVideoSlider/>
            <Artists heading='Top artists'/>
            <Artists heading='New artists'/>
            <Artists heading='Most popular in Israel'/>
        </main>
    );
};

export default LandingMain;