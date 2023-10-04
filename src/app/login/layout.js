import Link from 'next/link'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
      <h1>common layout for login screen</h1>
      <ul>
        <li><Link href="/login">Login main</Link></li>
        <li><Link href="/login/loginstudent">Login Student</Link></li>
        <li><Link href="/login/loginteacher">Login Teacher</Link></li>
      </ul>
      {children}
    </div>
  )
}

export default Layout
