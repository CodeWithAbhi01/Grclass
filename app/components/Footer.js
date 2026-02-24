import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>GR Class</h4>
          <p>International maritime classification and regulatory compliance partner.</p>
          <div className="badges">
            <span className="badge">RO</span>
            <span className="badge">RSO</span>
            <span className="badge">CS</span>
            <span className="badge">ISO Ready</span>
          </div>
        </div>
        <div>
          <h5>Quick Links</h5>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/verification">Certificate Verification</Link></li>
            <li><Link href="/client-login">Client Login</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5>Services</h5>
          <ul>
            <li>Classification Services</li>
            <li>Statutory Services</li>
            <li>Environmental Services</li>
            <li>Technical Advisory</li>
          </ul>
        </div>
        <div>
          <h5>Legal</h5>
          <ul>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms of Use</Link></li>
            <li><Link href="#">Compliance Statement</Link></li>
            <li><Link href="#">Data Security</Link></li>
          </ul>
          <div className="socials" aria-label="Social media links">
            <span>in</span><span>X</span><span>f</span>
          </div>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} GR Class. All rights reserved.</div>
    </footer>
  );
}
