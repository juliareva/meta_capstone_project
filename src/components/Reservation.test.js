import { render, screen } from "@testing-library/react";
import { initializeTimes, updateTimes, isFormDataValid } from "./Reservation";

test("initializes correct times", () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
  times.map((item) => {
    expect(item).toMatch(/^\d\d:\d\d$/);
  });
});

test("udpates times correctly", () => {
  const times = updateTimes("2024-09-20");
  expect(times.length).toBeGreaterThan(0);
  times.map((item) => {
    expect(item).toMatch(/^\d\d:\d\d$/);
  });
});

test("valid form is marked as valid", () => {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear();
  const day = today.getDate();

  const formData = {
    date: `${year}-${month}-${day}`,
    time: "17:00",
    guests: 1,
    firstname: "John",
    lastname: "Deer",
    phone: "1234567890",
    email: "john@example.com",
  };
  console.log(formData);
  expect(isFormDataValid(formData)).toBe(true);
});

test("negative count of guests in form is marked as not valid", () => {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear();
  const day = today.getDate();

  const formData = {
    date: `${year}-${month}-${day}`,
    time: "17:00",
    guests: -1,
    firstname: "John",
    lastname: "Deer",
    phone: "1234567890",
    email: "john@example.com",
  };
  console.log(formData);
  expect(isFormDataValid(formData)).toBe(false);
});
