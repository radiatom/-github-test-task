import React from 'react';
import Issue from './Issue/Issue';
import { useSelector } from 'react-redux';
import { issueInProgressListDataSelector } from '../selectors/selectors';
import { dataType, issueType } from '../reactRedux/ToDoListReducer';
import { Card, Container } from 'react-bootstrap';


const InProgressList = () => {
    const issueData: dataType = useSelector(issueInProgressListDataSelector)
    return (
        <Container>
            {issueData[0].number !== null ?
                <Container>
                    <h3 className="text-center" >In Progress</h3>
                    <Card border="primary w-100 h-100 bg-secondary">
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

export default InProgressList;