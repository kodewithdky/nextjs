"use client";
import Link from "next/link";
import styles from "./page.module.css";
export default function Home() {

  const Compo = () => {
    return <h1>This is DK</h1>;
  };
  return (
    <main className={styles.main}>
      <h1>Fetch data with api in client Component</h1>
      <Link href="/productlist">Go to Product list</Link>
    </main>
  );
}