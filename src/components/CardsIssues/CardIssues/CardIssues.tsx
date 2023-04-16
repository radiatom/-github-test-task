import React from 'react'
import { Card, Col, Container } from 'react-bootstrap';
import Issue from './Issue/Issue';
import { DataItemType, issuesCardType } from '../../../Types/types'

type propsType = {
    board: issuesCardType
    dropCardHandler: (board: issuesCardType) => void
    dragStartHandler: (board: issuesCardType, item: DataItemType) => void
    dropHandler: (e: any, board: issuesCardType, item: DataItemType) => void

}
const CardIssues: React.FC<propsType> = ({ board, dropCardHandler, dragStartHandler, dropHandler }) => {
    return (
        <Col
            className='p-0 '
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => dropCardHandler(board)}
        >
            <Container className='p-2 h-100 ' style={{ width: '380px' }}>
                <h3 className="text-center ">{board.title}</h3>
                <Card border="primary h-100 w-100 bg-secondary" >
                    {board.items.map(item =>
                        <Issue
                            key={item.id}
                            item={item}
                            board={board}
                            dragStartHandler={dragStartHandler}
                            dropHandler={dropHandler} />
                    )}
                </Card>
            </Container>
        </Col>
    )
};
export default CardIssues