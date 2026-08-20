'use client'
import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#hero"
      className={`back-to-top d-flex align-items-center justify-content-center ${visible ? 'active' : ''}`}
      aria-label="Back to top"
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  )
}
