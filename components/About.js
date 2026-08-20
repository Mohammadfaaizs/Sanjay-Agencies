import Image from 'next/image'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-title">
          <h2>आमच्या बद्दल ...</h2>
          
        </div>

        <div className="row">
          {/* Marathi Content */}
          <div className="col-lg-6">
            <div className="content">
              <h3>प्रॉपर्टी डिलर आणि इस्टेट ब्रोकर.</h3>
              <p>
                अमरावती शहरातील प्रथम प्रॉपर्टी डीलर ऑफिस सन १९६७ मध्ये <strong>स्व. श्री डी. बी. घटोरीया</strong> यांच्या द्वारे स्थापित झाले.
              </p>
              <p>
                इन्व्हेस्टमेंट करिता, घर बांधण्याकरिता, आणि व्यापारीक उपयोगा करिता प्लॉट्स उपलब्ध.
              </p>
              <div className="office-time-box">
                <strong>भेटण्याची वेळ</strong>
                सकाळी १०:०० ते ०१:०० आणि संध्या. ०४:०० ते ०७:००
              </div>
            </div>
          </div>

          {/* English Content */}
          <div className="col-lg-6">
            <div className="content">
              <h3>Property Dealer and Estate Broker.</h3>
              <p>
                The first property dealer office in Amravati city established by <strong>Mr. D. B. Ghatoriya,</strong> in the year 1967.
              </p>
              <p>
                Available plots for investment, building houses, and Commercial use.
              </p>
              <div className="office-time-box">
                <strong>Office Time</strong>
                10:00 AM to 01:00 PM and 04:00 PM to 07:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Founders */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="founder-box">
              <Image
                src="https://sanjayagencies.in/assets/img/pic1.jpg"
                alt="Late D. B. Ghatoriya"
                width={250}
                height={250}
                className="founder-img"
              />
              <h4>Late. D. B. Ghatoriya</h4>
              <span>Founder</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="founder-box">
              <Image
                src="https://sanjayagencies.in/assets/img/pic2.jpg"
                alt="Mr. Ajay Ghatoriya"
                width={250}
                height={250}
                className="founder-img"
              />
              <h4>Mr. Ajay Ghatoriya</h4>
              <span>Proprietor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
