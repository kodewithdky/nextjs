"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
    const router =useRouter()
  return (
    <>
      <h1>Login Page</h1>
      <Link href="/">go to home page</Link>
      <br />
      <br />
      <button onClick={() => router.push("/login/loginstudent")}>
        goto student login
      </button>
      <br />
      <br />
      <button onClick={() => router.push("/login/loginteacher")}>
        goto teacher login
      </button>
    </>
  );
};

export default Login;