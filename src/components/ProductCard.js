import React from 'react'
import {Card} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './ProductCard.css'

function ProductCard({data}) {
  return (
    <Link className='link' to={`details/${data.id}`} >

    <Card className="my-3 p-3 rounded">
    <Card.Img variant="top" src={data.photograph} className="p-3" />
    <Card.Body>
      <Card.Title as="div">{data.name}</Card.Title>
  
      <Card.Text as="div">
        <p>Cuisine: {data.cuisine_type}</p>
      </Card.Text>
  
      <Card.Text as="div">
        <p>location: {data.neighborhood}</p>
      </Card.Text>
    </Card.Body>
  </Card>  
  </Link>
  )
}

export default ProductCard