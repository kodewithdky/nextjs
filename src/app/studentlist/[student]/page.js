import Link from 'next/link'
import React from 'react'

const StudentList = ({params}) => {
  return (
    <div>
      <h1>Student details</h1>
      <h3>Name: {params.student}</h3>
    </div>
  )
}

export default StudentList
