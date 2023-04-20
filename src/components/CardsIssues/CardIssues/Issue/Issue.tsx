import React from "react";
import { Card, Container } from "react-bootstrap";
import { DataItemType } from "../../../../Types/types";
import { issuesCardType } from "../../../../Types/types";

type propsType = {
  item: DataItemType;
  board: issuesCardType;
  dragStartHandler: (board: issuesCardType, item: DataItemType) => void;
  dropHandler: (e: any, board: issuesCardType, item: DataItemType) => void;
};
const Issue: React.FC<propsType> = ({
  item,
  board,
  dragStartHandler,
  dropHandler,
}) => {
  return (
    <Container
      onDragStart={(e) => dragStartHandler(board, item)}
      onDrop={(e) => dropHandler(e, board, item)}
      draggable={true}
    >
      <Card border="primary p-2 mt-2 mb-2 ">
        <p className="fw-bold">{item.title}</p>
        <p>
          #{item.number} time of last activity: {item.created_at}
        </p>
        <p>
          {item.login} | coments: {item.comments}
        </p>
      </Card>
    </Container>
  );
};
export default Issue;
