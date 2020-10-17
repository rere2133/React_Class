import React from 'react'
import { FaReact } from 'react-icons/fa'
import { AiFillAlert } from 'react-icons/ai'
import { MdFavorite } from 'react-icons/md'
import { Container, Row, Col, Button } from 'react-bootstrap'

const BootstrapTest = (props) => (
  <>
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>React Bootstrap</h1>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="primary">
            <FaReact /> React v16
          </Button>
          <AiFillAlert size={150} color="DarkOrchid" />
          <Button variant="primary">
            <AiFillAlert />
          </Button>
          <Button variant="primary">
            <MdFavorite color="white" />
          </Button>
        </Col>
      </Row>
    </Container>
  </>
)

export default BootstrapTest
