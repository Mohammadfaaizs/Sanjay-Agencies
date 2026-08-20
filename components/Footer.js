import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          {/* Logo + info */}
          <div className="col-lg-4 col-md-6 footer-info mb-4">
            <div className="logo">
              <Image src="https://sanjayagencies.in/assets/img/logo.png" alt="Sanjay Agencies" width={150} height={100} />
            </div>
            <p>
              <strong>Since 1967.....</strong><br />
              प्रॉपर्टी डिलर आणि इस्टेट ब्रोकर.
            </p>
          </div>

          {/* Quick links */}
          <div className="col-lg-2 col-md-6 footer-links mb-4">
            <h4>Quick Links</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#hero">Home</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#about">About</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#services">Services</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#gallery">Gallery</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 footer-links mb-4">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#services">Plots for Investment</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#services">Plots for Building Houses</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#services">Plots for Commercial use</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 footer-links mb-4">
            <h4>Contact Us</h4>
            <p>
              संजय एजंसीज, टाऊन हॉल समोर,<br />
              नेहरू मैदान, अमरावती, ४४४६०१.<br /><br />
              <strong>Phone:</strong> 0721-2564125<br />
              <strong>WhatsApp:</strong>{' '}
              <a href="https://wa.me/+919422831183" style={{ color: '#555454' }}>+91 9422831183</a><br />
              <strong>Email:</strong>{' '}
              <a href="mailto:ajay.ghatoriya@gmail.com" style={{ color: '#575555' }}>ajay.ghatoriya@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="copyright">
            &copy; {new Date().getFullYear()} <strong><span>Sanjay Agencies</span></strong>. All Rights Reserved.
          </span>
          <span className="credits">
            Designed &amp; Managed by{' '}
            <a href="http://bizonance.in/" target="_blank" rel="noopener noreferrer">
              <Image src="/biz-brand-name.png" alt="Bizonance" width={80} height={20} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
