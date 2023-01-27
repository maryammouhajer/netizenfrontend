import React from 'react'
import Card from 'react-bootstrap/Card';
import './ImageCard.css'
import { FaSquare, FaCircle, FaTriangle } from "react-icons/fa";
const ImageCard = (props) => {
    return (
            <Card className="imagecard text-white   text-center" >

                <Card.ImgOverlay className='align-items-center'>
                    <Card.Title className='title'>{props.title}</Card.Title>
                    <Card.Text >
                        {props.text}
                    </Card.Text>
                    <Card.Text><FaSquare /><FaCircle /><FaSquare /></Card.Text>
                </Card.ImgOverlay>
            </Card>
       
    )
}

export default ImageCard