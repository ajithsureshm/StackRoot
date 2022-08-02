import React from 'react'
import { Container,Row,Col } from "react-bootstrap";
import './Footer.css'
function Footer() {
  return (
    <footer >
    <Row className='footer bg-dark text-light'>
        <Col className='text-center py-3'>
        Copyright &copy; Stack Root
        </Col>
    </Row>
</footer>
  )
}

export default Footer