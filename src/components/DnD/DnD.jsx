import React, { useState, useEffect } from 'react';
import { issuesListsDataSelector } from '../../selectors/selectors';
import { useSelector } from 'react-redux';
import { Card, Col, Container, Row } from 'react-bootstrap';

const DnD = () => {
    const [boards, setBoards] = useState([])
    const issueData = useSelector(issuesListsDataSelector)
    useEffect(() => {
        setBoards(issueData)
    }, [issueData])

    const [currentBoard, setCurrentBoard] = useState(null)
    const [currentItem, setCurrentItem] = useState(null)

    const dragStartHandler = (board, item) => {
        setCurrentBoard(board)
        setCurrentItem(item)
    }

    const dropHandler = (e, board, item) => {
        e.stopPropagation()
        e.preventDefault()
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        const dropIndex = board.items.indexOf(item)
        board.items.splice(dropIndex + 1, 0, currentItem)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }
    const dropCardHandler = (board) => {
        board.items.push(currentItem)
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }

    return (
        <Row className='p-0'>
            {boards.map(board =>
                <Col
                    key={board.id}
                    className='p-0'
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => dropCardHandler(board)}
                >
                    <Container className='p-2 h-100'>
                        <h3 className="text-center ">{board.title}</h3>
                        <Card border="primary h-100 w-100 bg-secondary" >
                            {board.items.map(item =>
                                <Container
                                    key={item.id}
                                    onDragStart={(e) => dragStartHandler(board, item)}
                                    onDrop={(e) => dropHandler(e, board, item)}
                                    draggable={true}
                                >
                                    <Card border="primary p-2 mt-2 mb-2 " >
                                        <p className='fw-bold' >{item.title}</p>
                                        <p>#{item.number} time of last activity: {item.created_at}</p>
                                        <p>{item.login} | coments: {item.comments}</p>
                                    </Card>
                                </Container>)}
                        </Card>
                    </Container>
                </Col>
            )}
        </Row>
    );
}

export default DnD;
