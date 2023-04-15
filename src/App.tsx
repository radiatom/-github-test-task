import React from 'react';
import ToDoList from './components/ToDoList';
import InProgressList from './components/InProgressList';
import DoneList from './components/DoneList';
import Search from './components/Search/Search';
import { Row, Container, Col } from 'react-bootstrap';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


function App() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Search />
        <Container className='p-0'>
          <Row className='p-0'>
            <Col className='p-0'><ToDoList /></Col>
            <Col className='p-0'><InProgressList /></Col>
            <Col className='p-0'><DoneList /></Col>
          </Row>
        </Container>
      </DndProvider>

    </div>
  );
}

export default App;
