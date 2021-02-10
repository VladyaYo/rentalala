import React from 'react';

import {Card, Button, Rate} from 'antd';
import './ProfileFeedback.scss';

const ProfileFeedback = ({ ...props }) =>{
    const { Meta } = Card;
    return(
        <div className="feedBack" {...props}>
            <div className="head">
                <h2>Last feedback</h2>
                <Button type="text">See All</Button>
            </div>
            <div className="cards">
                <Card className="card" bordered={false} >
                    <div className="info">
                        <p>Event Name: <span>Event Name</span></p>
                        <p>Client Name: <span>Client Name</span></p>
                        <p>Datetime: <span>17/10/2020</span></p>
                    </div>
                    <div className="rateLine">
                        <h3>Feedback:</h3>
                        <Rate className="rate" allowHalf disabled defaultValue={4.5} />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. Morbi enim nunc faucibus a pellentesque sit. Est sit amet facilisis magna etiam tempor orci eu lobortis. Sed risus ultricies tristique nulla aliquet enim. In nisl nisi scelerisque eu. Morbi tristique senectus et netus et malesuada fames ac.</p>
                </Card>
                <Card className="card" bordered={false} >
                    <div className="info">
                        <p>Event Name: <span>Event Name</span></p>
                        <p>Client Name: <span>Client Name</span></p>
                        <p>Datetime: <span>17/10/2020</span></p>
                    </div>
                    <div className="rateLine">
                        <h3>Feedback:</h3>
                        <Rate className="rate" allowHalf disabled defaultValue={4.5} />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. Morbi enim nunc faucibus a pellentesque sit. Est sit amet facilisis magna etiam tempor orci eu lobortis. Sed risus ultricies tristique nulla aliquet enim. In nisl nisi scelerisque eu. Morbi tristique senectus et netus et malesuada fames ac.</p>
                </Card>
                <Card className="card" bordered={false} >
                    <div className="info">
                        <p>Event Name: <span>Event Name</span></p>
                        <p>Client Name: <span>Client Name</span></p>
                        <p>Datetime: <span>17/10/2020</span></p>
                    </div>
                    <div className="rateLine">
                        <h3>Feedback:</h3>
                        <Rate className="rate" allowHalf disabled defaultValue={4.5} />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. Morbi enim nunc faucibus a pellentesque sit. Est sit amet facilisis magna etiam tempor orci eu lobortis. Sed risus ultricies tristique nulla aliquet enim. In nisl nisi scelerisque eu. Morbi tristique senectus et netus et malesuada fames ac.</p>
                </Card>
                <Card className="card" bordered={false} >
                    <div className="info">
                        <p>Event Name: <span>Event Name</span></p>
                        <p>Client Name: <span>Client Name</span></p>
                        <p>Datetime: <span>17/10/2020</span></p>
                    </div>
                    <div className="rateLine">
                        <h3>Feedback:</h3>
                        <Rate className="rate" allowHalf disabled defaultValue={4.5} />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. Morbi enim nunc faucibus a pellentesque sit. Est sit amet facilisis magna etiam tempor orci eu lobortis. Sed risus ultricies tristique nulla aliquet enim. In nisl nisi scelerisque eu. Morbi tristique senectus et netus et malesuada fames ac.</p>
                </Card>
            </div>
        </div>
    )

};
export default ProfileFeedback;