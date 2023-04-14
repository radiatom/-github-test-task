import React from 'react';
import Issue from './Issue';
import { useSelector } from 'react-redux';
import { issueToDoListDataSelector } from '../selectors/selectors';
import { issueType } from '../reactRedux/ToDoListReducer';



const ToDoList = () => {
    const testData = useSelector(issueToDoListDataSelector)
    return (
        <div >
            {testData[0].number !== null ?
                <div>
                    <h3>ToDo</h3>
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

export default ToDoList;