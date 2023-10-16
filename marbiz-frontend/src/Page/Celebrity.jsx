import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Celebrity = () => {


  return (
    <div>

      {/* Search filters */}
      <Container className='py-5' style={{
        minHeight: "100vh",
      }}>
        <Row className='d-grid align-content-top justify-content-center' >

          <h1>Celebrity Page</h1>
        </Row>
      </Container>


    </div>
  )
}

export default Celebrity
