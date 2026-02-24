import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const services = [
  {
    title: 'Classification Services',
    items: [
      'Fleet in Services',
      'New Construction',
      'Transfer of Class',
      'Yacht Service',
      'Offshore Service',
      'Conversion Projects',
      'Approval of Plans and Manuals'
    ]
  },
  {
    title: 'Statutory Services',
    items: [
      'Flag Statutory Services',
      'Survey & Certification',
      'SOLAS',
      'MARPOL',
      'Load Line',
      'Tonnage',
      'MODU'
    ]
  },
  {
    title: 'Environmental Services',
    items: [
      'Ballast Water Management (BWM)',
      'IHM',
      'Energy Efficiency (EEDI, EEXI, CII)',
      'EU MRV Compliance',
      'Vessel Emergency Response Services'
    ]
  },
  {
    title: 'Other Services',
    items: ['Compliance Support', 'Remote Surveys', 'Port State Control', 'Technical Advisory Services']
  }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero section">
          <div className="hero-overlay" />
          <div className="container hero-content reveal">
            <p className="eyebrow">Recognized Organization • RSO • Classification Society</p>
            <h1>Ensuring Marine Safety & Compliance Excellence</h1>
            <p>
              GR Class delivers statutory and class certification with a unified framework for global maritime safety,
              quality assurance, and regulatory compliance.
            </p>
            <div className="cta-row">
              <Link href="/verification" className="btn btn-primary">Verify Certificate</Link>
              <Link href="/client-login" className="btn btn-secondary">Client Login</Link>
              <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container reveal">
            <h2>About GR Class</h2>
            <p>
              GR Class is a Recognized Organization (RO), Recognized Security Organization (RSO), and Classification
              Society (CS) authorized to offer statutory and class certification and maritime compliance services.
              We are focused on safety, reliability, and environmental sustainability across the shipping lifecycle.
            </p>
            <p className="quote">“Ensuring marine safety, safeguarding lives and property at sea.”</p>
            <p>Our inspections and assessments support SOLAS, ISPS Code, and MARPOL compliance standards.</p>
          </div>
        </section>

        <section className="section light">
          <div className="container">
            <h2 className="reveal">Our Services</h2>
            <div className="card-grid">
              {services.map((service) => (
                <article className="service-card reveal" key={service.title}>
                  <h3>{service.title}</h3>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col reveal">
            <div>
              <h2>Capabilities</h2>
              <ul className="feature-list">
                <li>Global presence with certified surveyors</li>
                <li>Secure digital infrastructure</li>
                <li>Vessel data management system</li>
                <li>Regulatory standardization and harmonized reporting</li>
              </ul>
            </div>
            <div>
              <h2>Expertise</h2>
              <ul className="feature-list">
                <li>Experienced surveyors and auditors</li>
                <li>Strong ethical and impartial governance standards</li>
                <li>Decades of maritime assessment expertise</li>
                <li>Cost-effective compliance solutions for operators</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
