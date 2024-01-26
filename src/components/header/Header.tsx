import { ESortOption } from "../../types/filterTypes";
import AddAllButton from "../addAllButton/AddAllButton";
import PlayAllButton from "../playAllButton/PlayAllButton";
import SearchField from "../searchField/SearchField";
import TrackSorting from "../trackSorting/TrackSorting";
import styles from "./header.module.css";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  sort: ESortOption;
  setSort: (sort: ESortOption) => void;
}

export default function Header({
  searchQuery,
  setSearchQuery,
  setSort,
  sort,
}: HeaderProps) {
  return (
    <div data-testid="header" className={styles.header}>
      <div className={styles.header_btns}>
        <PlayAllButton />
        <AddAllButton />
      </div>
      <div className={styles.header_sort_search}>
        <TrackSorting sort={sort} setSort={setSort} />
        <SearchField
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
    </div>
  );
}
