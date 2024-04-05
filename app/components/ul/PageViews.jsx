import React from 'react'
import { wait } from '@/lib/posts'

const PageViews = async () => {
await wait(2000)


  return (
    <div>views: 100</div>
  )
}

export default PageViews