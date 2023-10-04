import Link from 'next/link'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <h1>common layout for about screen</h1>
      <ul>
        <li><Link href="/about"></Link>main about</li>
        <li><Link href="/about/aboutstudent">about student</Link></li>
        <li><Link href="/about/aboutcollege">about teacher</Link></li>
      </ul>
      {children}
    </div>
  )
}

export default Layout
