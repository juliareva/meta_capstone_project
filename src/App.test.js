import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import Reservation from "./components/Reservation";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Instagram/i);
  expect(linkElement).toBeInTheDocument();
});

// DATE
test("date input has required attributes", () => {
  render(
    <MemoryRouter>
      <Reservation />
    </MemoryRouter>
  );

  const date_test = screen.getByTestId("date-input-testid");
  expect(date_test).toHaveAttribute("required");
  expect(date_test).toHaveAttribute("type", "date");
});

// TIME
test("time input has required attributes", () => {
  render(
    <MemoryRouter>
      <Reservation />
    </MemoryRouter>
  );

  const time_test = screen.getByTestId("time-input-testid");
  expect(time_test).toHaveAttribute("required");
  expect(time_test).toBeInstanceOf(HTMLSelectElement);
});

// GUESTS
test("time input has required attributes", () => {
  render(
    <MemoryRouter>
      <Reservation />
    </MemoryRouter>
  );

  const guests_test = screen.getByTestId("guests-input-testid");
  expect(guests_test).toHaveAttribute("required");
  expect(guests_test).toHaveAttribute("type", "number");
  expect(guests_test).toHaveAttribute("min", "1");
  expect(guests_test).toHaveAttribute("max", "10");
});

// FIRST NAME
test("first name input has required attributes", () => {
  render(
    <MemoryRouter>
      <Reservation />
    </MemoryRouter>
  );

  const first_name_test = screen.getByTestId("first-name-input-testid");
  expect(first_name_test).toHaveAttribute("required");
  expect(first_name_test).toHaveAttribute("type", "text");
});

// LAST NAME
test("first name input has required attributes", () => {
  render(
    <MemoryRouter>
      <Reservation />
    </MemoryRouter>
  );

  const last_name_test = screen.getByTestId("last-name-input-testid");
  expect(last_name_test).toHaveAttribute("required");
  expect(last_name_test).toHaveAttribute("type", "text");
});

// EMAIL
test("email input has required attributes", () => {
  render(
    <MemoryRouter>
      <Reservation />
    </MemoryRouter>
  );

  const email_test = screen.getByTestId("email-input-testid");
  expect(email_test).toHaveAttribute("required");
  expect(email_test).toHaveAttribute("type", "email");
});

// PHONE
test("phone input has required attribute", () => {
  render(
    <MemoryRouter>
      <Reservation />
    </MemoryRouter>
  );

  const phone_test = screen.getByTestId("phone-input-testid");
  expect(phone_test).toHaveAttribute("required");
});
