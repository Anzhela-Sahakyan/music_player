import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DisplayMessage from "./DisplayMessage";

describe("DisplayMessage Component", () => {
  test("it should display the message passed to it", () => {
    const testMessage = "Hello, World!";

    render(<DisplayMessage message={testMessage} />);

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
