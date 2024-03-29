import React from "react"

import './Artist.scss'


const Artist = ({name, src, url, eventPrice, privatePrice, confirmed, rating, reviewCount, withEvents, online, categories}) => {
    const categoriesCount = categories.length;
    const sliceCategory = categories.slice(0,2);
    const otherCategoriesCount =  categoriesCount - 2;

    return (
        <a className='item'
           href={url}
        >
            <div className="image">
                <img src={src} alt={name}/>
                {(withEvents === true) && <div className="eventsLabel"><span>With events</span></div>}
                {(online === true) && <div className="onlineLabel"><span>online</span></div> }
                <div className="categories">{sliceCategory.map((category, index) => <div className='category' key={index}>{category}</div>)} {!!otherCategoriesCount  && <div>+ {otherCategoriesCount}</div>}</div>
            </div>
            <div className="text">
                <p className="name">{name} {" "}
                {(confirmed === true) &&
                    <span>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8.76099" r="8" fill="#F5BB4F"/>
                            <path d="M11.8379 5.97388L6.4375 11.3743L4.16211 9.09888L3.71289 9.5481L6.21289 12.0481L6.4375 12.2629L6.66211 12.0481L12.2871 6.4231L11.8379 5.97388Z" fill="#181818"/>
                            <path d="M11.8379 5.97388L12.1207 5.69103C11.9645 5.53482 11.7113 5.53482 11.555 5.69103L11.8379 5.97388ZM6.4375 11.3743L6.15466 11.6571C6.31087 11.8133 6.56413 11.8133 6.72034 11.6571L6.4375 11.3743ZM4.16211 9.09888L4.44495 8.81603C4.28874 8.65982 4.03548 8.65982 3.87927 8.81603L4.16211 9.09888ZM3.71289 9.5481L3.43005 9.26525C3.27384 9.42146 3.27384 9.67473 3.43005 9.83094L3.71289 9.5481ZM6.21289 12.0481L5.92998 12.331L5.9364 12.3372L6.21289 12.0481ZM6.4375 12.2629L6.16101 12.552C6.31566 12.6999 6.55934 12.6999 6.71399 12.552L6.4375 12.2629ZM6.66211 12.0481L6.93867 12.3372L6.94495 12.3309L6.66211 12.0481ZM12.2871 6.4231L12.57 6.70594C12.7262 6.54973 12.7262 6.29646 12.57 6.14025L12.2871 6.4231ZM11.555 5.69103L6.15466 11.0914L6.72034 11.6571L12.1207 6.25672L11.555 5.69103ZM6.72034 11.0914L4.44495 8.81603L3.87927 9.38172L6.15466 11.6571L6.72034 11.0914ZM3.87927 8.81603L3.43005 9.26525L3.99573 9.83094L4.44495 9.38172L3.87927 8.81603ZM3.43005 9.83094L5.93005 12.3309L6.49573 11.7653L3.99573 9.26525L3.43005 9.83094ZM5.9364 12.3372L6.16101 12.552L6.71399 11.9739L6.48938 11.759L5.9364 12.3372ZM6.71399 12.552L6.9386 12.3372L6.38562 11.759L6.16101 11.9739L6.71399 12.552ZM6.94495 12.3309L12.57 6.70594L12.0043 6.14025L6.37927 11.7653L6.94495 12.3309ZM12.57 6.14025L12.1207 5.69103L11.555 6.25672L12.0043 6.70594L12.57 6.14025Z" fill="black"/>
                        </svg>
                    </span>
                }
                </p>
                <p className="price">Events from <span>${eventPrice}</span></p>
                <p className="price">Private from <span>${privatePrice}</span></p>
                <div className="line">
                    <p>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.9648 7.33203L11.5977 6.66797L9 0.828125L6.40234 6.66797L0.0351562 7.33203L4.78125 11.6289L3.47266 17.8789L9 14.6758L14.5469 17.8789L13.2188 11.6289L17.9648 7.33203Z" fill="#F5BB4F"/>
                        </svg>{" "}
                        ({rating}/5)
                    </p>
                    <p>
                        <span>{reviewCount} </span>
                        Reviews
                    </p>
                </div>
            </div>
        </a>
    );
};

export default Artist;
