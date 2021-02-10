import React from "react"

import './LandingHero.scss'
const LandingHero = ({name, src}) => {
    return (
        <div className='item'
        >
            <h5>{name}</h5>
            <div className="image">
                <img src={src} alt={name}/>
            </div>
        </div>

    );
};

export default LandingHero;