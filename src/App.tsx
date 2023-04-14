import React from 'react';
import ToDoList from './components/ToDoList';
import InProgressList from './components/InProgressList';
import DoneList from './components/DoneList';
import Search from './components/Search/Search';
import { Row, Container, Col } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Search />
      <Container>
        <Row>
          <Col><ToDoList /></Col> 
          <Col><InProgressList /></Col>
          <Col><DoneList /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
