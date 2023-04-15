import React from 'react';
import { Card, Container } from 'react-bootstrap';
// import { Reorder } from 'framer-motion';
import type { Identifier, XYCoord } from 'dnd-core'
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
}
type propsType = {
    id: number
    index: number
    moveCard: (dragIndex: number, hoverIndex: number) => void
    title: string
    number: number
    created_at: string
    login: string
    comments: number
}
type DragItem = {
    index: number
    id: string
    type: string
}

const Issue: React.FC<propsType> = ({ id, title, index, moveCard, number, created_at, login, comments }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [{ handlerId }, drop] = useDrop<
        DragItem,
        void,
        { handlerId: Identifier | null }
    >({
        accept: 'card',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: DragItem, monitor) {
            if (!ref.current) {
                return
            }
            if (item.index === index) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top
            if (item.index < index && hoverClientY < hoverMiddleY) {
                return
            }
            if (item.index > index && hoverClientY > hoverMiddleY) {
                return
            }
            moveCard(item.index, index)
            item.index = index
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: 'card',
        item: () => {
            return { id, index }
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))
    return (
        <Container>
            <Card ref={ref} border="primary p-2 mt-2 mb-2 " data-handler-id={handlerId}>
                <p className='fw-bold' >{title}</p>
                <p>#{number} time of last activity: {created_at}</p>
                <p>{login} | coments: {comments}</p>
            </Card>
        </Container>
    );
}

export default Issue;