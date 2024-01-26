import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import styles from "./playAllButton.module.css";

export default function () {
  return (
    <div>
      <button
        className={styles.playBtn}
        onClick={() => console.log("Playing all songs")}
      >
        <PlayArrowIcon />
        Play All
        <div className={styles.playBtn_downArrow}>
          <ArrowDropDownIcon />
        </div>
      </button>
    </div>
  );
}
