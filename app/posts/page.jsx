import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import React from 'react'

const Page = async () => {
    const posts = await getAllPosts()
   
  return (
    <section className='py-24'>
        <div className='container'>
            <h1 className='text-3l font-bold'>
            <ul className='mt-12'>
              {posts.map(post => {
                console.log('post', post)``
                return(
                <li key={post.slug}>
                <Link href={`/posts/${post.slug}`}>
                  <h4 className='text-lg font-medium'>
                    Post title
                  </h4>
                  <p className='text-sm text-gray-500'>
                    {post.slug}
                  </p>
                </Link>
                </li>
              )})}
            </ul>
            </h1>
        </div>
    </section>
  )
}

export default Page