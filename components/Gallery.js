import Image from 'next/image'

export default function Gallery() {
  const images = [
    { src: 'https://sanjayagencies.in/assets/img/gallery/1.jpg', alt: 'Plot 1' },
    { src: 'https://sanjayagencies.in/assets/img/gallery/2.jpg', alt: 'Plot 2' },
    { src: 'https://sanjayagencies.in/assets/img/gallery/10.jpg', alt: 'Plot 10' },
    { src: 'https://sanjayagencies.in/assets/img/gallery/12.jpg', alt: 'Plot 12' },
   
  ]

  return (
    <section id="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Our Plots Photos</h2>
        </div>

        <div className="row gallery-row">
          {images.map((img, i) => (
            <div key={i} className="col-6 col-md-3 col-lg-3 gallery-col">
              <a
                href={img.src}
                data-gallery="portfolioGallery"
                className="glightbox gallery-item"
              >
                <Image src={img.src} alt={img.alt} width={400} height={220} loading="lazy" />
                <span className="gallery-zoom">
                  <i className="bi bi-zoom-in"></i>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
