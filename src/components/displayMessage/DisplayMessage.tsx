import styles from "./displayMessage.module.css";

export default function DisplayMessage({ message }: { message: string }) {
  return <div className={styles.message}>{message}</div>;
}
