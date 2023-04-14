import React from 'react';
import { issueType } from '../../reactRedux/ToDoListReducer';
import { Card, Container } from 'react-bootstrap';

type propsType = {
    el: issueType
}

const Issue = (props: propsType) => {
    return (
        <Container>
            <Card border="primary p-2 mt-2 mb-2 " >
                <p className='fw-medium' >{props.el.title}</p>
                <p>#{props.el.number} time of last activity: {props.el.created_at}</p>
                <p>{props.el.login} | coments: {props.el.comments}</p>
            </Card>
        </Container>

    );
}

export default Issue;