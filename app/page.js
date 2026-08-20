'use client'
import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Plots from '../components/Plots'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Scripts from '../components/Scripts'
import Image from 'next/image'

export default function Home() {
  const [socialsOpen, setSocialsOpen] = useState(false)

  return (
    <>
      {/* Floating side buttons */}
      <div className={`side-socials ${socialsOpen ? 'open' : ''}`}>
        <a href="https://maps.google.com/?q=Sanjay+Agencies+Amravati" target="_blank" rel="noopener noreferrer">
          <Image src="https://sanjayagencies.in/assets/img/google.png" alt="Google Maps" width={45} height={45} />
        </a>
        <a href="tel:+919422831183">
          <Image src="https://sanjayagencies.in/assets/img/call (1).png" alt="Call" width={45} height={45} />
        </a>
        <a href="https://wa.me/+919422831183?text=Hi,%20I%20found%20you%20from%20your%20Website." target="_blank" rel="noopener noreferrer">
          <Image src="https://sanjayagencies.in/assets/img/download.png" alt="WhatsApp" width={45} height={45} />
        </a>
        <button className="social-toggle" onClick={() => setSocialsOpen(!socialsOpen)}>
          <i className={`bi ${socialsOpen ? 'bi-x' : 'bi-plus'}`}></i>
        </button>
      </div>

      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Plots />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <Scripts />
    </>
  )
}
