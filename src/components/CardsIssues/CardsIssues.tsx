import React, { useState, useEffect } from "react";
import { issuesListsDataSelector } from "../../selectors/selectors";
import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import { DataItemType, issuesCardType } from "../../Types/types";
import CardIssues from "./CardIssues/CardIssues";
import { useDispatch } from "react-redux";
import { setDataList } from "../../reactRedux/Reducer";

const CardsIssues = () => {
  const dispatch = useDispatch();
  const [boards, setBoards] = useState<issuesCardType[]>([]);
  const issueData = useSelector(
    issuesListsDataSelector
  ) as Array<issuesCardType>;
  useEffect(() => {
    setBoards(issueData);
  }, [issueData]);

  const [currentBoard, setCurrentBoard] = useState<
    issuesCardType | undefined
  >();
  const [currentItem, setCurrentItem] = useState<DataItemType | undefined>();

  const dragStartHandler = (board: issuesCardType, item: DataItemType) => {
    setCurrentBoard(board);
    setCurrentItem(item);
  };

  const dropHandler = (
    e: React.DragEvent<HTMLDivElement>,
    board: issuesCardType,
    item: DataItemType
  ) => {
    e.stopPropagation();
    e.preventDefault();
    if (currentBoard && currentItem) {
      const currentIndex = currentBoard.items.indexOf(currentItem);
      currentBoard.items.splice(currentIndex, 1);
    }
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem!);
    dispatch(
      setDataList(
        boards.map((b) => {
          if (b.id === board.id) {
            return board;
          }
          if (b.id === currentBoard?.id) {
            return currentBoard;
          }
          return b;
        })
      )
    );
  };
  const dropCardHandler = (board: issuesCardType) => {
    if (currentBoard && currentItem) {
      board.items.push(currentItem);
      const currentIndex = currentBoard.items.indexOf(currentItem);
      currentBoard.items.splice(currentIndex, 1);
      dispatch(
        setDataList(
          boards.map((b) => {
            if (b.id === board.id) {
              return board;
            }
            if (b.id === currentBoard?.id) {
              return currentBoard;
            }
            return b;
          })
        )
      );
    }
  };

  return (
    <Container className="p-0">
      <Row className="p-0 ">
        {boards.map((board) => (
          <CardIssues
            key={board.id}
            board={board}
            dropCardHandler={dropCardHandler}
            dragStartHandler={dragStartHandler}
            dropHandler={dropHandler}
          />
        ))}
      </Row>
    </Container>
  );
};

export default CardsIssues;
