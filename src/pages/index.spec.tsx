import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Index from "./index";

test("Description is in the document", async () => {
  // ARRANGE
  render(<Index />);

  // ACT
  const some = await screen.findByTestId("example");

  // ASSERT
  expect(some).toBeInTheDocument();
});
