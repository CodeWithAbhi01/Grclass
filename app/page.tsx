import Link from "next/link";

const serviceGroups = [
  {
    title: "Classification Services",
    items: [
      "Fleet in Services",
      "New Construction",
      "Transfer of Class",
      "Yacht Service",
      "Offshore Service",
      "Conversion Projects",
      "Approval of Plans and Manuals"
    ]
  },
  {
    title: "Statutory Services",
    items: ["Flag Statutory Services", "Survey & Certification", "SOLAS", "MARPOL", "Load Line", "Tonnage", "MODU"]
  },
  {
    title: "Environmental Services",
    items: [
      "Ballast Water Management (BWM)",
      "IHM",
      "Energy Efficiency (EEDI, EEXI, CII)",
      "EU MRV Compliance",
      "Vessel Emergency Response Services"
    ]
  },
  {
    title: "Other Services",
    items: ["Compliance Support", "Remote Surveys", "Port State Control", "Technical Advisory Services"]
  }
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="overlay" />
        <div className="container hero-content reveal">
          <p className="eyebrow">Global Maritime Assurance</p>
          <h1>Ensuring Marine Safety & Compliance Excellence</h1>
          <p>
            GR Class operates as a Recognized Organization (RO), Recognized Security Organization
            (RSO), and Classification Society (CS), delivering dependable statutory and class
            certification worldwide.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/verification">Verify Certificate</Link>
            <Link className="btn" href="/client-login">Client Login</Link>
            <Link className="btn" href="/contact">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container narrow">
          <h2>About GR Class</h2>
          <p>
            GR Class is a Recognized Organization (RO), Recognized Security Organization (RSO), and
            Classification Society (CS) authorized to provide statutory and classification
            certification services across the maritime sector. We are dedicated to operational
            safety, technical reliability, and environmental sustainability for global fleets.
          </p>
          <p className="mission">“Ensuring marine safety, safeguarding lives and property at sea.”</p>
          <p>Our compliance framework aligns with SOLAS, ISPS Code, and MARPOL requirements.</p>
        </div>
      </section>

      <section id="services" className="section alt reveal">
        <div className="container">
          <h2>Our Services</h2>
          <div className="card-grid">
            {serviceGroups.map((group) => (
              <article key={group.title} className="card">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="section reveal">
        <div className="container two-col">
          <div>
            <h2>Capabilities</h2>
            <ul className="tick-list">
              <li>Global presence supported by certified surveyors and auditors</li>
              <li>Secure digital infrastructure for certification and reporting workflows</li>
              <li>Integrated vessel data management for lifecycle compliance visibility</li>
              <li>Regulatory standardization across multiple jurisdictions and flag states</li>
            </ul>
          </div>
          <div>
            <h2>Expertise</h2>
            <ul className="tick-list">
              <li>Experienced surveyors and auditors with deep maritime domain knowledge</li>
              <li>Strict ethical standards and transparent decision frameworks</li>
              <li>Decades of technical assessment capability across vessel classes</li>
              <li>Cost-effective compliance pathways without compromising safety</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
