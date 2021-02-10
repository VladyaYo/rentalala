import React from 'react';

import classnames from 'classnames'

import './ProfileLayout.scss';

import ProfileEvents from "../ProfileEvents/ProfileEvents";
import ProfileVideos from "../ProfileVideos/ProfileVideos";
import ProfileFeedback from "../ProfileFeedback/ProfileFeedback";

const ProfileLayout = ({mode, className, ...props }) =>{
    const classNames = classnames(
        'layout',
        {
            [`layout--${mode}`]:Boolean(mode),
        },
        className
    );

    return(
        <div className={classNames} {...props}>
            <div className="side">
                {mode  === 'events' && <ProfileEvents/>  }
                {/*<ProfileEvents/>*/}
                <ProfileVideos/>
            </div>
            <ProfileFeedback/>
        </div>
    )

};
export default ProfileLayout;