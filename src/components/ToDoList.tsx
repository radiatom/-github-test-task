import React, { useState, useEffect, useCallback } from 'react';
import Issue from './Issue/Issue';
import { useSelector } from 'react-redux';
import { issueToDoListDataSelector } from '../selectors/selectors';
import { dataType, issueType } from '../reactRedux/ToDoListReducer';
import { Card, Container } from 'react-bootstrap';
import update from 'immutability-helper'
import type { FC } from 'react'



const ToDoList: FC = () => {
    const [issues, setIssues] = useState<issueType[]>([])
    const issueData: dataType = useSelector(issueToDoListDataSelector)
    useEffect(() => {
        setIssues(issueData)
    }, [issueData])

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        setIssues((prevCards: issueType[]) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex] as issueType],
                ],
            }),
        )
    }, [])

    return (
        <Container className='p-2 h-100'>
            {issues.length > 0 ?
                <Container className='p-0 h-100'>
                    <h3 className="text-center">ToDo</h3>
                    <Card border="primary w-100 h-100 bg-secondary ">
                        {issues.map((card, i) => {
                            return (<Issue
                                id={card.id}
                                key={card.id}
                                index={i}
                                moveCard={moveCard}
                                title={card.title}
                                number={card.number}
                                created_at={card.created_at}
                                login={card.login}
                                comments={card.comments}
                            />
                            )
                        })}
                    </Card>
                </Container>
                :
                null
            }
        </Container>
    );
}

export default ToDoList;