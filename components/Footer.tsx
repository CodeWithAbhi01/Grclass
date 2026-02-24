import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>GR Class</h4>
          <p>
            International maritime classification partner delivering trusted statutory certification,
            security oversight, and compliance excellence.
          </p>
          <div className="badges">
            <span>RO</span>
            <span>RSO</span>
            <span>CS</span>
            <span>SOLAS</span>
            <span>MARPOL</span>
          </div>
        </div>
        <div>
          <h5>Quick Links</h5>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/verification">Vessel Verification</Link></li>
            <li><Link href="/client-login">Client Login</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h5>Services</h5>
          <ul>
            <li>Classification Services</li>
            <li>Flag Statutory Services</li>
            <li>Environmental Compliance</li>
            <li>Technical Advisory</li>
          </ul>
        </div>
        <div>
          <h5>Legal</h5>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Security Policy</a></li>
          </ul>
          <div className="social">LinkedIn · X · YouTube</div>
        </div>
      </div>
    </footer>
  );
}
