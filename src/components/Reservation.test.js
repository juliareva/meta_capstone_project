import { render, screen } from "@testing-library/react";
import { initializeTimes, updateTimes } from "./Reservation";

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
