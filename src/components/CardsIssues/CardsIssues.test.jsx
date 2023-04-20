import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./../../reactRedux/redux";
import "@testing-library/jest-dom";
import CardsIssues from "./CardsIssues";

it("renders without crashing CardsIssues", () => {
  const { getByText } = render(
    <Provider store={store}>
      <CardsIssues />
    </Provider>
  );
});
