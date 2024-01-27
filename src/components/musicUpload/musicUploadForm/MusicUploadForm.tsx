import { useRef, useState } from "react";
import styles from "./musicUploadForm.module.css";
import { uploadFile } from "../../../utils/apiUtils";
import { showToastError, showToastSuccess } from "../../../utils/toastUtils";
import { useLoader } from "../../hooks/useLoader";
import { combineClasses } from "../../../utils/styleUtils";

export default function MusicUploadForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const { disableLoader, enableLoader, isLoading } = useLoader();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
    setUploadError(null);

    if (!file) {
      setUploadError("File is missing. Please choose a new file");
      return;
    }

    const validFileTypes = ["audio/mpeg", "audio/wav"];
    if (!validFileTypes.includes(file.type)) {
      setUploadError("Invalid file type. Please select a .mp3 or .wav file");
      setSelectedFile(null);
      return;
    }
  };

  const handleUpload = async () => {
    try {
      enableLoader();
      if (selectedFile) {
        await uploadFile();
        const interval = setInterval(() => {
          setUploadProgress((prevProgress) => {
            if (prevProgress === 100) {
              disableLoader();
              clearInterval(interval);
              showToastSuccess("Successfully uploaded");
              console.log("A new song uploaded");
              return 100;
            }
            return Math.min(prevProgress + 10, 100);
          });
        }, 500);
      }
    } catch (error) {
      showToastError("Upload failed. Please, try again");
      disableLoader();
    }
  };
  const handleChooseFileClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <div className={styles.uploadFormContainer}>
      <div>
        <input
          type="file"
          ref={fileInputRef}
          accept=".mp3,.wav"
          onChange={handleFileChange}
          style={{ display: "none" }}
          className={styles.fileInput}
        />
        <button
          className={combineClasses(
            styles.uploadFormBtns,
            isLoading ? styles.disabled : null
          )}
          onClick={handleChooseFileClick}
          disabled={isLoading}
        >
          Choose File
        </button>
      </div>
      <div className={styles.fileName}>
        {selectedFile && <div> {selectedFile.name}</div>}
      </div>
      <button
        className={combineClasses(
          styles.uploadFormBtns,
          isLoading ? styles.disabled : null
        )}
        onClick={handleUpload}
        disabled={!selectedFile || isLoading}
      >
        Upload
      </button>

      {uploadProgress > 0 && (
        <div className={styles.uploadProgresss}>
          Uploading {uploadProgress}%
        </div>
      )}
      {uploadProgress > 0 && (
        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}
      {uploadError && <div className={styles.errorMsg}>{uploadError} </div>}
    </div>
  );
}
