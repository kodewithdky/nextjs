"use client";

import Image from "next/image";
import Profile from "../../public/vercel.svg";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
  console.log(Profile);

  return (
    <main>
        <h1>main page</h1>
    </main>
  );
}
