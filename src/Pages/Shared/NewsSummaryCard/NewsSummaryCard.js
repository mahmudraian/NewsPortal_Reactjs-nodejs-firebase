import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({news}) => {
    const {_id,details,title,author,image_url,rating}=news;
  
    return (
     
        <Card className="">
        <Card.Header className='d-flex justify-content-between'>
            <div className='d-flex'>
                <Image
                roundedCircle
                className='me-2'
                src={author.img}
                style={{height:'60px'}}
                >
            </Image>
            <div>
                <p className='mb-0'>{author.name}</p>
                <p>{author.published_date}</p>
            </div>


            </div>
            <div>
                <FaRegBookmark></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
            </div>


        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src= {image_url} />
          <Card.Text>
           {
            details.length >250 ?
            <p>{details.slice(0,250)+"..."}<Link to={`/news/${_id}`}> Read more</Link></p>
            :
           <p>{details}</p>
           }
          </Card.Text>
         
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between">
            
            <div>
            <FaStar className='me-2'></FaStar>
           <span >{rating.number}</span>
            </div>
           <div>
            <FaEye className='me-2'></FaEye>
           <span   > {news.total_view}</span>
           </div>
        </Card.Footer>
      </Card>

    );
};

export default NewsSummaryCard;