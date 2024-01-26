import { render, fireEvent, screen } from "@testing-library/react";
import MusicPlayer from "./MusicPlayer";
import { songs } from "../../data";

describe("MusicPlayer Component", () => {
  it("should render and allow interaction", async () => {
    render(<MusicPlayer />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("song-list")).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText(
      "FIlter"
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "Shape of You" } });

    expect(searchInput.value).toBe("Shape of You");

    songs
      .filter((song) => song.songName.includes("Shape of You"))
      .forEach((song) => {
        expect(screen.getByText(song.songName)).toBeInTheDocument();
      });

    const sortButton = screen.getByText("Ed Sheeran");
    fireEvent.click(sortButton);
  });
});
