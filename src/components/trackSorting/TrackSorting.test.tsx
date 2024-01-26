import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TrackSorting from "./TrackSorting";
import { ESortOption } from "../../types/filterTypes";

describe("TrackSorting Component", () => {
  test("it should toggle sort order on click", () => {
    const mockSetSort = jest.fn();

    const { rerender } = render(
      <TrackSorting sort={ESortOption.TrackNumberAsc} setSort={mockSetSort} />
    );

    expect(
      screen.getByLabelText("Sort by track number, currently sorted ascending")
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByLabelText("Sort by track number, currently sorted ascending")
    );

    expect(mockSetSort).toHaveBeenCalledWith(ESortOption.TrackNumberDes);

    rerender(
      <TrackSorting sort={ESortOption.TrackNumberDes} setSort={mockSetSort} />
    );

    expect(
      screen.getByLabelText("Sort by track number, currently sorted descending")
    ).toBeInTheDocument();
  });
});
