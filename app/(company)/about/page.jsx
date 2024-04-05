import React from 'react'
import { resolve } from 'styled-jsx/css'

async function getData(){
  return new Promise((resolve, reject) => 
  setTimeout(()=>{
    const random = Math.random()
    if(random > 0.5){
      reject('Failed to get data')
    }
    // reject('Failed to get data')
    resolve() 
  }, 2000)
  )
}

const Page = async () => {
  await getData()

  return (
    <div className='my-50'>About using hooks page</div>
  )
}

export default Page