import { createPortal } from "react-dom";
import LoadingIcon from "@mui/icons-material/Sync";
import styles from "./loader.module.css";
import { RefObject } from "react";

export const Loader = ({ parent }: { parent: RefObject<any | null> }) => {
  if (!parent.current) return null;
  const spinner = (
    <div className={styles.spinnerContainer}>
      <LoadingIcon className={styles.spinner} />
    </div>
  );

  return createPortal(spinner, parent.current);
};
