import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const styles = {
    width: "100%",
    height: "100vh",
  };
  return (
    <main className={styles.main}>
      <img src="./streater.xyz.png" style={styles} />
    </main>
  );
}
