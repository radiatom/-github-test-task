import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./../../reactRedux/redux";
import "@testing-library/jest-dom";
import Search from "./Search";

describe("Search", () => {
  //checking whether the "Load" text (not tag or component) is drawn in the <Search> component
  it("renders Search component", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByText(/Load issues/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("renders without crashing Search", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const LinkElement = getByText(/Load/i);
    expect(LinkElement).toBeInTheDocument();
  });
  it("input add text", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "react" },
    });
  });
});

//testing input add text
