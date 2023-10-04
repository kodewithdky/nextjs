"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router=useRouter()
  return (
    <>
      <h1>About page</h1>
      <button onClick={()=>router.push("/")}>goto home page</button>
      <button onClick={()=>router.push("/about/aboutcollege")}>goto college page</button>
      <br />
      <br />
      <Link href="/about/aboutcollege">goto college page</Link>
      <br />
      <br />
      <Link href="/about/aboutstudent">goto student page</Link>
      <br />
      <br />

    </>
  );
};

export default About;
