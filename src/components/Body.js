import React,{useState,useEffect} from 'react'
import ProductCard from './ProductCard'
import {Row,Col} from 'react-bootstrap';

function Body() {

         const [products,setProducts]=useState([])



    useEffect(() => {
        const fetchDAta=async()=>{

            await fetch('/products.json')
            .then((res)=>res.json())
            .then((data)=>setProducts(data.products))
        }

        fetchDAta()
     
    }, [])

    console.log("data",products);

  return (
    <Row>
      {
        products.map(item=>(

        <Col sm={12} md={8} lg={6} xl={3} >
        
        <ProductCard data={item}/>
        
        </Col>
        ))
      }
    </Row>
  )
}

export default Body