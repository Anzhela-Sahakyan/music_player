import ISong from "../../types/songTypes";
import { combineClasses } from "../../utils/styleUtils";
import DraggableList from "../DraggableSongList/DraggableSongList";

import styles from "./songList.module.css";

export default function SongList({
  songList,
  setSongList,
}: {
  songList: ISong[];
  setSongList: (songList: ISong[]) => void;
}) {
  return (
    <div className={styles.song_list} data-testid="song-list">
      <div className={combineClasses(styles.songlist_title)}>
        <div
          className={combineClasses(styles.first_empty, styles.title_items)}
        />
        <div className={combineClasses(styles.song_name, styles.title_items)}>
          Song Name
        </div>
        <div className={combineClasses(styles.artist_name, styles.title_items)}>
          Artist Name
        </div>
        <div
          className={combineClasses(styles.track_number, styles.title_items)}
        >
          Track
        </div>
        <div
          className={combineClasses(styles.last_empty, styles.title_items)}
        />
      </div>
      <DraggableList songList={songList} setSongList={setSongList} />
    </div>
  );
}
