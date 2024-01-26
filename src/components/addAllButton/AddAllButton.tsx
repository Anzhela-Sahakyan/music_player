import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import styles from "./addAllButton.module.css";

export default function AddAllButton() {
  return (
    <button
      className={styles.addBtn}
      onClick={() => console.log("Adding all songs to a queue")}
    >
      <AddIcon />
      Add All
      <div className={styles.addBtn_downArrow}>
        <ArrowDropDownIcon />
      </div>
    </button>
  );
}
