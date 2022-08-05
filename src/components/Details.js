import React from 'react'
import { useState,useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import { Row,Col,Image,ListGroup } from "react-bootstrap";
import './Details.css'
import { useDispatch, useSelector } from "react-redux";

function Details() {

  // const [hotels, setHotels] = useState([])


  const {id} = useParams()

  const {hotels} = useSelector((state) => state.hotelsList);



//   useEffect(() => {
//     const fetchDAta=async()=>{

//         await fetch('/products.json')
//         .then((res)=>res.json())
//         .then((data)=>setHotels(data.products))
//     }

//     fetchDAta()
 
// }, [])

  console.log("hotels",hotels);
  console.log("name",hotels[id-1]);

  const details= hotels.find((i)=> i.id==id)

  console.log("id",id);

  console.log("details",details);


  return (
    <>
     
     {details?(

<Row className="row1">
  <Col md={3}>
    <Image className="img" src={details.photograph} alt={details.name} fluid />
  </Col>

  <Col md={4}>
    <ListGroup>
      <h2>{details.name}</h2>
      <p>{details.neighborhood}</p>
    </ListGroup>

    <ListGroup>
      <p>Cuisine:{details.cuisine_type}</p>
      <p>Address{details.address}</p>
    </ListGroup>
    </Col>

    <Col md={5}>
    <ListGroup>
      <h2>Operating Hours:</h2>

      <p>Monday :{details.operating_hours.Monday}</p>
      <p>Tuesday :{details.operating_hours.Tuesday}</p>
      <p>Wednesday :{details.operating_hours.Wednesday}</p>
      <p>Thursday :{details.operating_hours.Thursday}</p>
      <p>Friday :{details.operating_hours.Friday}</p>
      <p>Saturday :{details.operating_hours.Saturday}</p>
      <p>Sunday :{details.operating_hours.Sunday}</p>

    </ListGroup>
    </Col>

    <Col  md={12}>

      <h1  className="text-center">Customer Review</h1>
      </Col>
      <Col  md={6}>

    { details.reviews.map((review)=> (
      <div md={6}>
        <h3>Name:{review.name}</h3>
        <p>{review.date}</p>
        <h6>Rating:{review.rating}</h6>
        <p>{review.comments}</p>

      </div>
    ) )}

    </Col>



</Row>
):"null"}
    </>
  )
}

export default Details