import React from 'react';
import Issue from './Issue';



const ToDoList = (props: any) => {
    return (
        <div >
            <h3>ToDo</h3>
            <div>
                <Issue />
            </div>
        </div>
    );
}

export default ToDoList;