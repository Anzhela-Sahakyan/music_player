import SwapVertIcon from "@mui/icons-material/SwapVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import styles from "./trackSorting.module.css";
import { ESortOption } from "../../types/filterTypes";

interface TrackSortingProps {
  sort: ESortOption;
  setSort: (sort: ESortOption) => void;
}

export default function TrackSorting({ setSort, sort }: TrackSortingProps) {
  const isAscending = sort === ESortOption.TrackNumberAsc;

  const handleSortChange = () => {
    setSort(
      isAscending ? ESortOption.TrackNumberDes : ESortOption.TrackNumberAsc
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleSortChange();
    }
  };
  return (
    <div
      tabIndex={0}
      onClick={handleSortChange}
      onKeyDown={handleKeyDown}
      className={styles.sort}
      aria-label={`Sort by track number, currently sorted ${
        isAscending ? "ascending" : "descending"
      }`}
      aria-pressed={isAscending}
    >
      <SwapVertIcon />
      Track Number
      {sort === ESortOption.TrackNumberAsc ? (
        <ArrowDropUpIcon />
      ) : (
        <ArrowDropDownIcon />
      )}
    </div>
  );
}
