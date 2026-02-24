import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="page section">
        <div className="container">
          <h1 className="reveal">Contact Us</h1>
          <div className="portal-grid reveal">
            <section className="panel">
              <h3>Corporate Inquiry Form</h3>
              <form className="login-form">
                <input type="text" placeholder="Company Name" />
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
                <select defaultValue="">
                  <option value="" disabled>Select Inquiry Type</option>
                  <option>Survey</option>
                  <option>Certification</option>
                  <option>Advisory</option>
                </select>
                <textarea rows="4" placeholder="Your inquiry" />
                <button type="button" className="btn btn-primary">Send Inquiry</button>
              </form>
            </section>
            <section className="panel">
              <h3>Office Contact</h3>
              <p><strong>Address:</strong> GR Class Maritime Towers, Dubai Maritime City, UAE</p>
              <p><strong>Email:</strong> info@grclass.org</p>
              <p><strong>Phone:</strong> +971 4 000 0000</p>
              <iframe
                title="GR Class Office Map"
                src="https://www.google.com/maps?q=Dubai+Maritime+City&output=embed"
                loading="lazy"
                className="map"
              />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
