import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavIcons = [
    { src: '/assets/icons/search.svg', alt: 'search'},
    { src: '/assets/icons/black-heart.svg', alt: 'heart'},
    { src: '/assets/icons/user.svg', alt: 'user'}
]

const Navbar = () => {
  return (
    <header className='w-full'>
        <nav className='nav'>
            <Link href="/" className='flex items-center gap-1'>
                <Image
                    src='/assets/icons/logo.svg'
                    alt='logo'
                    width={30}
                    height={30}
                />

                <p className='nav-logo'>
                    Price<span className='text-primary'>Digger</span>
                </p>

            </Link>
            <div className='flex gap-2'>
                {NavIcons.map((icon) => (
                    <Image
                    key={icon.alt}
                    src={icon.src}
                    alt={icon.alt}
                    width={25}
                    height={25}
                    className='objetc-contain'
                    />
                ))}
            </div>
        </nav>
    </header>
  )
}

export default Navbar