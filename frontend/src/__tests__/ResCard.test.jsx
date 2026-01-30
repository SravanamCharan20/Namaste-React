import { render, screen } from "@testing-library/react";
import MOCK_DATA from "./mocks/resDataMock.json";
import RestaurantCard from "../Components/RestaurantCard";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("should render Rescard Component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <RestaurantCard resData={MOCK_DATA} />
      </Provider>
    </BrowserRouter>
  );

  const name = screen.getByText("Prasuma Momo Kitchen");
  expect(name).toBeInTheDocument();
});
