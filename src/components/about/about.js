import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';
export default function About() {
    return <>
<div className='d-flex mx-auto '>
<Card className='text-center m-auto align-self-center' style={{ width: '22rem'}}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body >
        <Card.Title>Hello,</Card.Title>
        <Card.Title>AHMED FAHMY </Card.Title>
        <Card.Title>Full Stack Developer </Card.Title>
        <Card.Text>
          welcome to the app movies 
        </Card.Text>
        <Link className="" to="/movies" style={{ textDecoration: "none"}}> 
        <Button className='w-100 btn btn-danger' variant="primary">Go to Movies</Button></Link>
      </Card.Body>
    </Card>
    </div>
       
    </>
}
