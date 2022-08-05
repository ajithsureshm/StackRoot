import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listHotels } from "../Action/hoetelsAction";

function Body() {
  //  const [products,setProducts]=useState([])

  const dispatch = useDispatch();

  const {hotels} = useSelector((state) => state.hotelsList);

  // const {resturant}=products // destructing

  // console.log("hotels",resturant);

  // console.log("hotels", products.hotels);

  // const resturant = products.hotels;

  useEffect(() => {
    dispatch(listHotels());
  }, []);

  // useEffect(() => {
  //     const fetchDAta=async()=>{

  //         await fetch('/products.json')
  //         .then((res)=>res.json())
  //         .then((data)=>setProducts(data.products))
  //     }

  //     fetchDAta()

  // }, [])

  // console.log("data",products);

  return (
    <Row>
      {hotels.map((item) => (
        <Col sm={12} md={8} lg={6} xl={3}>
          <ProductCard data={item} />
        </Col>
      ))}
    </Row>
  );
}

export default Body;
