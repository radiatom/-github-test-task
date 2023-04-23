import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./../../../reactRedux/redux";
import "@testing-library/jest-dom";
import CardIssues from "./CardIssues";

describe("card issues", () => {
  const board = {
    id: 1,
    title: "abc",
    items: [
      {
        id: 1,
        title: "dfg",
        number: 2,
        created_at: "klm",
        login: "wrt",
        comments: 3,
      },
    ],
  };
  it("renders without crashing CardsIssues", () => {
    const { getByText } = render(
      <Provider store={store}>
        <CardIssues board={board} />
      </Provider>
    );
    const LinkElement = getByText(/abc/i);
    expect(LinkElement).toBeInTheDocument();
  });

  it("calls the dropCardHandler function when a card is dropped", () => {
    const dropCardHandlerMock = jest.fn();
    const { getByTestId } = render(
      <CardIssues
        board={board}
        dropCardHandler={dropCardHandlerMock}
        dragStartHandler={() => {}}
        dropHandler={() => {}}
      />
    );
    const containerElement = getByTestId("card-issues-container");
    fireEvent.drop(containerElement);
    expect(dropCardHandlerMock).toHaveBeenCalledWith(board);
  });

  
});
