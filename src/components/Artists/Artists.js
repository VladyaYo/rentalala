import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/components/pagination/pagination.scss';
import './Artists.scss'
import Artist from "../Artist/Artist";
import examplePhoto from '../../Images/exemple_ph.jpg'



const artists = [
    {
        id : 1,
        src : examplePhoto,
        name : "Artist Name",
        confirmed: false,
        withEvents : true,
        online : true,
        url: "artists/namelink",
        categories: ["Singer", "Actor"],
        eventPrice: 15,
        privatePrice: 100,
        languages: [""],
        rating: 4.5,
        reviewCount: "2k"
    },
    {
        id : 2,
        src : examplePhoto,
        name : "Name Artist",
        confirmed: true,
        withEvents : false,
        online : true,
        url: "artists/namelink",
        categories: ["Singer", "Musician", "Actor"],
        eventPrice: 15,
        privatePrice: 100,
        languages: [""],
        rating: 4.5,
        reviewCount: "2k"
    },
    {
        id : 3,
        src : examplePhoto,
        name : "Artist Name",
        confirmed: false,
        withEvents : true,
        online : false,
        url: "artists/namelink",
        categories: ["Singer", "Musician", "Actor"],
        eventPrice: 15,
        privatePrice: 100,
        languages: [""],
        rating: 4.5,
        reviewCount: "2k"
    },
    {
        id : 4,
        src : examplePhoto,
        name : "Artist Name",
        confirmed: true,
        withEvents : true,
        online : true,
        url: "artists/namelink",
        categories: ["Singer", "Musician", "Actor"],
        eventPrice: 15,
        privatePrice: 100,
        languages: [""],
        rating: 4.5,
        reviewCount: "2k"
    },
    {
        id : 5,
        src : examplePhoto,
        name : "Artist Name",
        confirmed: false,
        withEvents : true,
        online : true,
        url: "artists/namelink",
        categories: ["Singer", "Musician", "Actor"],
        eventPrice: 15,
        privatePrice: 100,
        languages: [""],
        rating: 4.5,
        reviewCount: "2k"
    },
    {
        id : 6,
        src : examplePhoto,
        name : "Artist Name",
        confirmed: true,
        withEvents : true,
        online : true,
        url: "artists/namelink",
        categories: ["Singer", "Musician", "Actor"],
        eventPrice: 15,
        privatePrice: 100,
        languages: [""],
        rating: 4.5,
        reviewCount: "2k"
    },
    {
        id : 7,
        src : examplePhoto,
        name : "Artist Name",
        confirmed: false,
        withEvents : true,
        online : true,
        url: "artists/namelink",
        categories: ["Singer", "Musician", "Actor"],
        eventPrice: 15,
        privatePrice: 100,
        languages: [""],
        rating: 4.5,
        reviewCount: "2k"
    },
    {
        id : 8,
        src : examplePhoto,
        name : "Artist Name",
        confirmed: true,
        withEvents : false,
        online : false,
        url: "artists/namelink",
        categories: ["Singer", "Actor", "Musician" ],
        eventPrice: 50,
        privatePrice: 1000,
        languages: [""],
        rating: 3.5,
        reviewCount: "2k"
    },
    {
        id : 9,
        src : examplePhoto,
        name : "Artist Name",
        confirmed: false,
        withEvents : true,
        online : true,
        url: "artists/namelink",
        categories: ["Singer", "Musician", "Actor"],
        eventPrice: 15,
        privatePrice: 100,
        languages: [""],
        rating: 2.5,
        reviewCount: "24k"
    },
    {
        id : 10,
        src : examplePhoto,
        name : "Artist Name",
        confirmed: true,
        withEvents : true,
        online : false,
        url: "artists/namelink",
        categories: ["Singer", "Musician", "Actor"],
        eventPrice: 15,
        privatePrice: 600,
        languages: [""],
        rating: 4.5,
        reviewCount: "2k"
    },
    {
        id : 11,
        src : examplePhoto,
        name : "Artist Name",
        confirmed: false,
        withEvents : true,
        online : true,
        url: "artists/namelink",
        categories: ["Singer", "Musician", "Actor"],
        eventPrice: 15,
        privatePrice: 100,
        languages: [""],
        rating: 4.5,
        reviewCount: "2k"
    },
    {
        id : 12,
        src : examplePhoto,
        name : "Artist Name",
        confirmed: true,
        withEvents : true,
        online : true,
        url: "artists/namelink",
        categories: ["Singer", "Musician", "Actor"],
        eventPrice: 15,
        privatePrice: 100,
        languages: [""],
        rating: 4.5,
        reviewCount: "2k"
    },
    {
        id : 13,
        src : examplePhoto,
        name : "Artist Name",
        confirmed: false,
        withEvents : true,
        online : true,
        url: "artists/namelink",
        categories: ["Singer", "Musician", "Actor", "Dancer"],
        eventPrice: 15,
        privatePrice: 100,
        languages: [""],
        rating: 4.5,
        reviewCount: "2k"
    },
    {
        id : 14,
        src : examplePhoto,
        name : "Artist Name",
        confirmed: true,
        withEvents : true,
        online : true,
        url: "artists/namelink",
        categories: ["Singer", "Musician", "Actor"],
        eventPrice: 15,
        privatePrice: 100,
        languages: [""],
        rating: 4.5,
        reviewCount: "2k"
    },
    {
        id : 15,
        src : examplePhoto,
        name : "Artist Name",
        confirmed: false,
        withEvents : true,
        online : true,
        url: "artists/namelink",
        categories: ["Singer", "Musician"],
        eventPrice: 15,
        privatePrice: 100,
        languages: [""],
        rating: 4.5,
        reviewCount: "2k"
    },
    {
        id : 16,
        src : examplePhoto,
        name : "Artist Name",
        confirmed: true,
        withEvents : true,
        online : true,
        url: "artists/namelink",
        categories: ["Singer", "Musician", "Actor"],
        eventPrice: 15,
        privatePrice: 100,
        languages: [""],
        rating: 4.5,
        reviewCount: "2k"
    },

]



const Artists = ({heading}) => {

    SwiperCore.use([Navigation]);
    return (
        <section className="artistsSlider">

            <div className="container">
                <h2>{heading}</h2>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    navigation
                >
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
                    <SwiperSlide key={id}>
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
                    </SwiperSlide>

                )}
                </Swiper>
            </div>
        </section>

    );
};

export default Artists;