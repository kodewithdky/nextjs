"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const Layout = ({children}) => {
  const path=usePathname()
  console.log(path)
  return (
    <div>
      <h1>common layout for login screen</h1>
      {path!="/login/loginteacher"&&<ul>
        <li><Link href="/login">Login main</Link></li>
        <li><Link href="/login/loginstudent">Login Student</Link></li>
        <li><Link href="/login/loginteacher">Login Teacher</Link></li>
      </ul>}
      {children}
      <Link href="/">go to home</Link>
    </div>
  )
}

export default Layout