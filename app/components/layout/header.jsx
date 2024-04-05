import Link from 'next/link'
import React from 'react'
import NavLink from '../ul/NavLink'
import ContactButton from '../ul/ContactButton'

export const Header = () => {
  return (
    <header className='bg-gray-100 p4'>
    <nav>
      <ul className='flex gap-3'>
        <li>
          <NavLink href='/'>Home</NavLink>
        </li>
        <li>
          <NavLink href='/about'>About</NavLink>
        </li>
        <ContactButton />
      </ul>
      
      
    </nav>
  </header>
  )
}
