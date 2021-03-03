import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const News = (props) => {
    const {title, description, urlToImage}  = props.newsInfo
    return (
        <div>
                    <Col className='mt-5'>
                    <Card>
                    <Card.Img src={urlToImage}/>
                    <Card.Body>
                        <Card.Title> {title} </Card.Title>
                        <Card.Text>
                    {description}
                        </Card.Text>
                        <Button  href='https://www.bbc.com/news' variant="primary">More...</Button>
                    </Card.Body>
                    </Card>
              </Col>
      
        </div>
    );
};

export default News;