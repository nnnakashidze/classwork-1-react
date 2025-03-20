import styles from "./WelcomeMessage.module.css";

export default function WelcomeMessage() {
  return (
    <div className={styles.welcomeMessages}>
      <h1 className={styles.welcomeHeader}> Hello, World!</h1>
      <p className={styles.welcomeParagraph}> Welcome to learning JSX!</p>
    </div>
  );
}
