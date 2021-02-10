import React from 'react';
import classnames from 'classnames';

import './Artists.scss'
import Artist from "../Artist/Artist";

const artists = [
    {
        id : 1,
        src : "../../Image/categories/1.png",
        name : "Artist Name",
        confirmed: true,
        withEvents : true,
        online : true,
        url: "artists/namelink",
        categories: ["Singer", "Musician", "Actor"],
        eventPrice: 15,
        privatePrice: 15,
        languages: [""],
        rating: 4.5,
        reviewCount: "2k"
    },

]



const Artists = () => {
    return (
        <>
            {artists.map(({id,
                              name,
                              src,
                              confirmed,
                              withEvents,
                              online,
                              url,
                              categories,
                              eventPrice,
                              privatePrice,
                              languages,
                              rating,
                              reviewCount}) =>
                <Artist
                    key={id}
                    name={name}
                    src={src}
                    confirmed={confirmed}
                    withEvents={withEvents}
                    online={online}
                    url={url}
                    categories={categories}
                    eventPrice={eventPrice}
                    privatePrice={privatePrice}
                    lang={languages}
                    rating={rating}
                    reviewCount={reviewCount}/>
            )}
        </>
    );
};

export default Artists;