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
      {/* <h1>Image Optimization</h1> */}
      {/* <Image src={Profile}/>
      <img src={Profile.src} alt="img" /> */}

      {/* <Image
        src="https://www.icccricketschedule.com/wp-content/uploads/2023/06/ICC-Cricket-World-Cup-2023.jpg"
        width={200}
        height={200}
        alt="img"
      /> */}

      <h1 style={{ fontFamily: "Roboto" }}>Font Optimization</h1>

      <h2 className={roboto.className}>Font with next js font feature</h2>
    </main>
  );
}
