import { BASE_URL } from "@/config/constants";

export default function Home() {
console.log(process.env.MY_NAME)
console.log(process.env.PASSWORD)
console.log(process.env.NODE_ENV)
  return (
    <main>
        <h1>main page</h1>
        {
          BASE_URL
        }
    </main>
  );
}
