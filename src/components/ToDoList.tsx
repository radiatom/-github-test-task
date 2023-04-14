import React from 'react';
import Issue from './Issue/Issue';
import { useSelector } from 'react-redux';
import { issueToDoListDataSelector } from '../selectors/selectors';
import { issueType } from '../reactRedux/ToDoListReducer';
import { Card, Container } from 'react-bootstrap';



const ToDoList = () => {
    const testData = useSelector(issueToDoListDataSelector)
    return (
        <Container>
            {testData[0].number !== null ?
                <Container>
                    <h3 className="text-center">ToDo</h3>
                    <Card border="primary w-100 bg-secondary" style={{ width: '18rem' }}>
                        <div>
                            {testData.map((el: issueType) => (<Issue key={el.number} el={el} />))}
                        </div>
                    </Card>
                </Container>
                :
                null
            }
        </Container>
    );
}

export default ToDoList;