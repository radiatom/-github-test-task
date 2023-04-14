import React from 'react';
import Issue from './Issue/Issue';
import { useSelector } from 'react-redux';
import { issueInProgressListDataSelector } from '../selectors/selectors';
import { issueType } from '../reactRedux/ToDoListReducer';


const InProgressList = (props: any) => {
    const testData = useSelector(issueInProgressListDataSelector)
    return (
        <div >
            {testData[0].number !== null ?
                <div>
                    <h3>In Progress</h3>
                    <div>
                        {testData.map((el: issueType) => (<Issue key={el.number} el={el} />))}
                    </div>
                </div>
                :
                null
            }
        </div>
    );
}

export default InProgressList;