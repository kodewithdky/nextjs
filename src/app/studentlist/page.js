import Link from 'next/link'
import React from 'react'

const StudentList = () => {
  return (
    <div>
      <h1>Student list</h1>
      <ul>
        <li><Link href='/studentlist/dk'>dk</Link></li>
        <li><Link href="/studentlist/pk">pk</Link></li>
        <li><Link href="/studentlist/sp">sp</Link></li>
        <li><Link href="/studentlist/dsp">dsp</Link></li>
      </ul>
    </div>
  )
}

export default StudentList
