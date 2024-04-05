'use client'
import React, { useEffect } from 'react'

const Error = ({error, reset}) => {
    useEffect(()=>{

    },[error])
  return (
    <div className='text-red-400 text-sm'>Something went wrong</div>
  )
}

export default Error