import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.background}>
      <Link href="/some">
        <a>Some</a>
      </Link>

      <Link href="/products/[id]" as="/products/5">
        <a>Some with id</a>
      </Link>
    </div>
  );
}
