import React from 'react';
import {Card, Button} from 'antd';
import './ProfileVideos.scss';
import examplePhoto from '../../Images/exemple_ph.jpg'

const ProfileVideos = ({ ...props }) =>{

    const { Meta } = Card;

    return(
        <section className='videos' {...props}>
            <div className="head">
                <h2>Videos</h2>
                <Button type="text">Add New</Button>
            </div>
            <div className="cards">
                 <Card
                     className='card'
                     hoverable
                     cover={<img alt="example" src={examplePhoto} />}
                 >
                     <h5>Video Name</h5>
                     <Meta title="" description="63k viewed" />
                 </Card>
                <Card
                    className='card'
                    hoverable
                    cover={<img alt="example" src={examplePhoto} />}
                >
                    <h5>Video Name</h5>
                    <Meta title="" description="63k viewed" />
                </Card>
                <Card
                    className='card'
                    hoverable
                    cover={<img alt="example" src={examplePhoto} />}
                >
                    <h5>Video Name</h5>
                    <Meta title="" description="63k viewed" />
                </Card>
                <Card
                    className='card'
                    hoverable
                    cover={<img alt="example" src={examplePhoto} />}
                >
                    <h5>Video Name</h5>
                    <Meta title="" description="63k viewed" />
                </Card>
                <Card
                    className='card'
                    hoverable
                    cover={<img alt="example" src={examplePhoto} />}
                >
                    <h5>Video Name</h5>
                    <Meta title="" description="63k viewed" />
                </Card>
                <Card
                    className='card'
                    hoverable
                    cover={<img alt="example" src={examplePhoto} />}
                >
                    <h5>Video Name</h5>
                    <Meta title="" description="63k viewed" />
                </Card>
                <Card
                    className='card'
                    hoverable
                    cover={<img alt="example" src={examplePhoto} />}
                >
                    <h5>Video Name</h5>
                    <Meta title="" description="63k viewed" />
                </Card>
                <Card
                    className='card'
                    hoverable
                    cover={<img alt="example" src={examplePhoto} />}
                >
                    <h5>Video Name</h5>
                    <Meta title="" description="63k viewed" />
                </Card>
                <Card
                    className='card'
                    hoverable
                    cover={<img alt="example" src={examplePhoto} />}
                >
                    <h5>Video Name</h5>
                    <Meta title="" description="63k viewed" />
                </Card>
            </div>
        </section>
    )

};

export default ProfileVideos;