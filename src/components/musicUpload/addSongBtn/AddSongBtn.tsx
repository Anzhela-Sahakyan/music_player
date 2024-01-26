import { useState } from "react";
import MusicUploadForm from "../musicUploadForm/MusicUploadForm";
import styles from "./addSongBtn.module.css";

export default function AddSongBtn() {
  const [showForm, setShowForm] = useState(false);

  const handleAddButtonClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div className={styles.btnContainer}>
      <button className={styles.addBtn} onClick={handleAddButtonClick}>
        Add new song
      </button>
      <div>{showForm && <MusicUploadForm />}</div>
    </div>
  );
}
