import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const detailnews=useLoaderData()
    const {_id,details,title,author,image_url,category_id}=detailnews;
    console.log(detailnews)
    return (
        <div>
            <Card style={{  }}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className='d-flex justify-content-between'>
                    <p>{author.name}</p>
                    <p>{author.published_date}</p>
                </div>
                <Card.Text>
                {details}
                </Card.Text>
                <Link to={`/catagory/${category_id}`}>
                <Button variant="primary">All news in this catagory</Button>
                </Link>
               
            </Card.Body>
            </Card>
        </div>
    );
};

export default News;