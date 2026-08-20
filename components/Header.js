'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header id="header" className={scrolled ? 'header-scrolled' : ''}>
      <div className="container d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo">
          <Image src="https://sanjayagencies.in/assets/img/logo.png" alt="Sanjay Agencies" width={120} height={50} />
        </a>

        <nav
          id="navbar"
          className={`navbar ${mobileOpen ? 'navbar-mobile' : ''}`}
          onClick={() => mobileOpen && setMobileOpen(false)}
        >
          <ul onClick={(e) => e.stopPropagation()}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="nav-link scrollto"
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <i
            className={`bi ${mobileOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}
            role="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={(e) => {
              e.stopPropagation()
              setMobileOpen(!mobileOpen)
            }}
          />
        </nav>
      </div>
    </header>
  )
}
