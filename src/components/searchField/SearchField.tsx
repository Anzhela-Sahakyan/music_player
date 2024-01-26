import SearchIcon from "@mui/icons-material/Search";

import styles from "./searchfield.module.css";

interface SearchFieldProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

export default function SearchField({
  searchQuery,
  setSearchQuery,
}: SearchFieldProps) {
  return (
    <div className={styles.searchFieldWrapper}>
      <input
        onChange={(event) => setSearchQuery(event.target.value)}
        value={searchQuery}
        placeholder="FIlter"
        className={styles.searchField}
      />
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
}
