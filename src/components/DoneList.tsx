import React from 'react';
import Issue from './Issue/Issue';
import { useSelector } from 'react-redux';
import { issueDoneListDataSelector } from '../selectors/selectors';
import { dataType, issueType } from '../reactRedux/ToDoListReducer';
import { Card, Container } from 'react-bootstrap';



const DoneList = () => {
    const issueData: dataType = useSelector(issueDoneListDataSelector)
    return (
        <Container className='w-100'>
            {issueData[0].number !== null ?
                <Container>
                    <h3 className="text-center ">Done</h3>
                    <Card border="primary w-100 bg-secondary" style={{ width: '18rem' }}>
                        <div>
                            {issueData.map((el: issueType) => (<Issue key={el.number} el={el} />))}
                        </div>
                    </Card>
                </Container>
                :
                null
            }
        </Container>
    );
}

export default DoneList;