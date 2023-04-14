import React from 'react';
import Issue from './Issue/Issue';
import { useSelector } from 'react-redux';
import { issueDoneListDataSelector } from '../selectors/selectors';
import { issueType } from '../reactRedux/ToDoListReducer';



const DoneList = () => {
    const testData = useSelector(issueDoneListDataSelector)
    return (
        <div >
            {testData[0].number !== null ?
                <div>
                    <h3>Done</h3>
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

export default DoneList;