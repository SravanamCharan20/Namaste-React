import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import userContext from "../utils/userContext";
import { vi } from "vitest";
import MOCK_LIST from "./mocks/resList.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

// ✅ CORRECT fetch mock
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_LIST),
  })
);

it("should render searched restaurants correctly", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <userContext.Provider
          value={{ loggedInUser: "charan", setUserName: vi.fn() }}
        >
          <Home />
        </userContext.Provider>
      </Provider>
    </BrowserRouter>
  );

  // ⏳ wait until Search button appears (after fetch + shimmer)
  const searchBtn = await screen.findByRole("button", { name: /search/i });

  const searchInput = screen.getByTestId("resInput");

  fireEvent.change(searchInput, { target: { value: "Pizza Hut" } });
  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(1);
});
