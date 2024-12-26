'use client'

// Lib
import { useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'

// Icon
import SelectLanguage from '../Select/SelectLanguage'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [background, setBackground] = useState('bg-transparent')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBackground('bg-white/80 backdrop-blur-md shadow-md')
      } else {
        setBackground('bg-transparent')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const menus = [
    {
      label: t('home'),
      isActive: false,
      to: '#home',
      prefix: '/',
    },
    {
      label: t('education'),
      isActive: false,
      to: '#education',
      prefix: '/',
    },
    {
      label: t('experience'),
      isActive: false,
      to: '#experience',
      prefix: '/',
    },
    {
      label: t('skill'),
      isActive: false,
      to: '#skill',
      prefix: '/',
    },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className={cn('fixed top-0 z-50 w-full transition-colors', background)}>
        <div className={cn('container flex items-center justify-end py-2')}>
          {/* Burger Icon for Mobile */}
          <div className={cn('2md:hidden', 'flex items-center space-x-2')}>
            <button className="relative h-10 w-10 text-black-950 focus:outline-none" onClick={toggleMenu}>
              <span className="sr-only">Open main menu</span>
              <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
                {/* Top Line */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute block h-[2.67px] w-5 transform rounded-full bg-current transition duration-500 ease-in-out',
                    isMenuOpen ? 'rotate-45' : '-translate-y-1.5',
                  )}
                />
                {/* Middle Line */}
                <div className={cn('flex w-full justify-between')}>
                  <div
                    aria-hidden="true"
                    className={cn(
                      'absolute block h-[2.67px] w-[2.67px] transform rounded-full bg-current transition duration-500 ease-in-out',
                      isMenuOpen ? 'opacity-0' : 'opacity-100',
                    )}
                  />
                  <div
                    aria-hidden="true"
                    className={cn(
                      'absolute right-0 block h-[2.67px] w-4 transform rounded-full bg-current transition duration-500 ease-in-out',
                      isMenuOpen ? 'opacity-0' : 'opacity-100',
                    )}
                  />
                </div>
                {/* Bottom Line */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute block h-[2.67px] w-5 transform rounded-full bg-current transition duration-500 ease-in-out',
                    isMenuOpen ? '-rotate-45' : 'translate-y-1.5',
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Toggled by Burger Icon) */}
        <div
          className={cn(
            'transform transition-transform duration-500 ease-in-out',
            isMenuOpen ? 'mx-3 translate-x-0 md:mx-16' : 'translate-x-full',

            'relative mt-6 w-[300px] rounded-lg bg-white/80 p-6',
            'transform-origin-top-right',
            'animate-[modal-grow_0.5s_ease-out_forwards]',
            'fixed right-0 top-[50px]',
          )}
        >
          <SelectLanguage />
          <div>
            {menus.map((menu, index) => (
              <div key={index} className={cn('my-2 text-lg', `${index % 2 === 0 ? 'text-primary' : 'text-second'}`)}>
                <button
                  className={cn('hover:underline')}
                  onClick={() => {
                    const section = document.querySelector(menu.to)
                    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    setIsMenuOpen(false)
                  }}
                >
                  {menu.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
