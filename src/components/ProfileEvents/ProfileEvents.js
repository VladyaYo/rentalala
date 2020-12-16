import React from 'react';
import {Card, Button} from 'antd';
import './style.css';
import examplePhoto from '../../Images/exemple_ph.jpg'

const ProfileEvents = ({ ...props }) =>{

    const { Meta } = Card;

    return(
        <section className='events' {...props}>
            <div className="head">
                <h2>Events</h2>
                <Button type="text">Add New</Button>
            </div>
            <div className="cards">
                 <Card
                     className='card'
                     hoverable
                     cover={<img alt="example" src={examplePhoto} />}
                 >
                     <h5>Event Name</h5>
                     <p>Next show time: today, 7 pm</p>
                     <Meta title="" description="Category, Category, Category" />
                 </Card>
                <Card
                    className='card'
                    hoverable
                    cover={<img alt="example" src={examplePhoto} />}
                >
                    <h5>Event Name</h5>
                    <p>Next show time: today, 7 pm</p>
                    <Meta title="" description="Category, Category, Category" />

                </Card>
                <Card
                    className='card'
                    hoverable
                    cover={<img alt="example" src={examplePhoto} />}
                >
                    <h5>Event Name</h5>
                    <p>Next show time: today, 7 pm</p>
                    <Meta title="" description="Category, Category, Category" />
                </Card>
            </div>
        </section>
    )

};

export default ProfileEvents;