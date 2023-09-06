import Link from 'next/link'

import React from 'react'
// import Logo from './Logo'

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-red-400">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/fun">Fun</Link>
      </nav>
    </header>
  )
}

export default NavBar
