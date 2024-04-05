'use client'
import Link from 'next/link'
import React from 'react'
import {usePathname} from 'next/navigation'

const NavLink = ({href, ...rest}) => {
  const pathName = usePathname()

  const isActive = href === pathName
  return (
    <Link className={isActive ? 'text-cyan-500':''} href={href} {...rest} /> 
  )
}

export default NavLink  