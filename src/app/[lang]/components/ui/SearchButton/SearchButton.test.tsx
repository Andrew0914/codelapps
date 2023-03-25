import SearchButton from ".";
import { render, screen, fireEvent } from "@testing-library/react";

describe("SearchButton 🔎", () => {
  test("Clicking searh button should fire event onSearchButtonClick", () => {
    // Arrange
    const action = jest.fn();
    render(<SearchButton onSearchButtonClick={action} />);
    const button = screen.getByRole("button");
    // Act
    fireEvent.click(button);
    // Assert
    expect(action).toHaveBeenCalled();
  });
});
