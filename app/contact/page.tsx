export default function ContactPage() {
  return (
    <section className="section page-top">
      <div className="container reveal">
        <h1>Contact GR Class</h1>
        <p>Connect with our corporate team for surveys, certification, and advisory services.</p>

        <div className="contact-grid">
          <form className="contact-box">
            <input type="text" placeholder="Company Name" required />
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Corporate Email" required />
            <select defaultValue="">
              <option value="" disabled>Select Inquiry Type</option>
              <option>Survey</option>
              <option>Certification</option>
              <option>Advisory</option>
            </select>
            <textarea rows={5} placeholder="Your Inquiry" required />
            <button className="btn btn-primary" type="submit">Submit Inquiry</button>
          </form>

          <aside className="contact-info card">
            <h3>Corporate Office</h3>
            <p>GR Class Maritime Tower, 12 Port Authority Avenue, Singapore 048620</p>
            <p>Email: contact@grclass.org</p>
            <p>Phone: +65 6100 2200</p>
            <iframe
              title="GR Class Office Map"
              src="https://maps.google.com/maps?q=Singapore%20Marina%20Bay&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
