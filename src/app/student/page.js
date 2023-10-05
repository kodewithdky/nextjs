import React from 'react'

const Student = () => {
  return (
    <div>
        {/* <title>student page</title>   wrong way for sco */}
      <h1>student</h1>
    </div>
  )
}

export function generateMetadata(){
  return {
    title:"student page",
    description:"This is the student page for study"
  }
}
export default Student
