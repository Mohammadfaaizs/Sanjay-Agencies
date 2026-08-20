'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate sending (replace with actual API call / EmailJS / etc.)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-title">
          <h2>संपर्क करा</h2>
        </div>

        {/* Info boxes row */}
        <div className="row mb-5">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="info-box">
              <i className="bi bi-geo-alt"></i>
              <h3>पत्ता :</h3>
              <p>
                संजय एजंसीज, टाऊन हॉल समोर,<br />
                नेहरू मैदान, अमरावती, ४४४६०१.
              </p>
              <p>
                Sanjay Agencies, Opp. Town Hall,<br />
                Nehru Maidan, Amravati, 444601.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="info-box">
              <i className="bi bi-telephone"></i>
              <h3>संपर्क :</h3>
              <p>
                0721-2564125<br />
                0721-2674048<br />
                0721-2951506
              </p>
              <p>
                <strong>Business Whatsapp:</strong><br />
                <a href="https://wa.me/+919422831183?text=Hi,%20I%20found%20you%20from%20your%20Website." target="_blank" rel="noopener noreferrer">
                  +91 9422831183
                </a>
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="info-box">
              <i className="bi bi-envelope"></i>
              <h3>ई-मेल :</h3>
              <p>
                <a href="mailto:ajay.ghatoriya@gmail.com">ajay.ghatoriya@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Map + Form */}
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14906.366749006262!2d77.7575499!3d20.9287409!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66cbea6bd720568!2sSanjay%20Agencies!5e0!3m2!1sen!2sin!4v1631945356277!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sanjay Agencies on Google Maps"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="php-email-form">
              {loading && (
                <div className="loading">Loading</div>
              )}
              {sent && (
                <div className="sent-message d-block">
                  Your message has been sent. Thank you!
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="my-3">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
