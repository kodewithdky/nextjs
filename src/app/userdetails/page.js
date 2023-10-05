"use client"
import Script from 'next/script'
import React from 'react'

const Page = () => {
  return (
    <div>
      <h1>get user location</h1>
      <Script src='/location.js'
      onLoad={()=>{
        console.log("File loaded")
      }}
      />
    </div>
  )
}

export default Page
