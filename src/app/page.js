"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Home() {

  const router=useRouter()
  const navigate=(name)=>{
     router.push(name)
  }

  const [name, setName] = useState("kodewithdky");
  // setName("DK. Yadav")
  const apple = () => {
    setName("DK. YaDav");
  };
  const Compo = () => {
    return <h1>This is DK</h1>;
  };
  return (
    <main className={styles.main}>
      <h1>KodeWithDKY {name}</h1>
      {/* <Compo /> */}
      {Compo}
      <button onClick={() => apple()}>Click</button>


      <Link href="/login">Goto to Login Page</Link>
      <br />
      <br />
      <Link href="/about">Goto to About Page</Link>
      <br />
      <br />
      <button onClick={()=>navigate("/login")}>Goto Login page</button>
      <button onClick={()=>navigate("/about")}>Goto About page</button>
    </main>
  );
}