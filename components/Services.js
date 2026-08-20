export default function Services() {
  const services = [
    {
      icon: 'bi-graph-up-arrow',
      prefix: 'Plots for',
      highlight: 'Investment.',
      delay: 100,
    },
    {
      icon: 'bi-house-door-fill',
      prefix: 'Plots for',
      highlight: 'Building Houses.',
      delay: 200,
    },
    {
      icon: 'bi-building',
      prefix: 'Plots for',
      highlight: 'Commercial use.',
      delay: 300,
    },
  ]

  return (
    <section id="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
            >
              <div className="service-item w-100 mb-4">
                <div className="icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h4>
                  <a href="#">
                    {service.prefix}
                    <br />
                    <span className="service-highlight">{service.highlight}</span>
                  </a>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
