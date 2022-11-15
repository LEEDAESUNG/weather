import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';


//const MyCard = () => {
const MyCard = props => {

    let {imgSrc, price, title, route} = props.data;
    //console.log(route);
    return(
        <Card className="p-0 overflow-hidden h-100 shadow">
            <Card.Link href={route}>
                <div className="overflow-hidden rounded p-0 bg-light">
                    <Card.Img variant="top" src={imgSrc} />
                </div>
                
                <Card.Body className="text-center">
                    <Card.Title className="display-6">{price}</Card.Title>
                    <Card.Title className="display-6">{title}</Card.Title>
                    
                </Card.Body>
            </Card.Link>
            {/* <Button className="w-100 rounded-0" variant="success">Add to card</Button> */}
        </Card>
        
    );
};

export default MyCard;