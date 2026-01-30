import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Components/Header";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { expect } from "vitest";

it("should contain about us name", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const aboutUsName = screen.getByText("About");
  expect(aboutUsName).toBeInTheDocument();
});

it("should contain working login logout button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const LoginButtion = screen.getByRole("button", { name: "Login" });
  fireEvent.click(LoginButtion);

  const LogoutButtion = screen.getByRole("button", { name: "Logout" });
  expect(LogoutButtion).toBeInTheDocument();
});
