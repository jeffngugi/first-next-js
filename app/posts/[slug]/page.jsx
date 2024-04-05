import { getPostBySlug } from '@/lib/posts'
import React from 'react'

const Page = async ({params}) => {
    const {slug} = params
    const {content, frontmatter} = await getPostBySlug(slug)

  
  return (
    <section className='py-24'>
        <div className='container'>
            <header className='rounded bg-gray-100 p-8'>
            <h1 className='font-serif text-3xl'>Learn Next Js</h1>
            <p className='text-sm font-light uppercase'>
                 Geoffrey Ngugi
            </p>
            </header>
            <main className='prose mt-12'>{content}</main>
        </div>
    </section>
  )
}

export default Page  