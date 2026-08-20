'use client'
import { useEffect } from 'react'

export default function Scripts() {
  useEffect(() => {
    // Init GLightbox
    const initGlightbox = () => {
      if (typeof window !== 'undefined' && window.GLightbox) {
        window.GLightbox({ selector: '.glightbox' })
      }
    }

    // Retry a few times since scripts load async
    const timer1 = setTimeout(initGlightbox, 600)
    const timer2 = setTimeout(initGlightbox, 1600)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return null
}
