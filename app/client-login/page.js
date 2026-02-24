import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ClientLoginPage() {
  return (
    <>
      <Navbar />
      <main className="page section">
        <div className="container">
          <h1 className="reveal">Client Login Portal</h1>
          <div className="portal-grid reveal">
            <section className="panel">
              <h3>Secure Login</h3>
              <form className="login-form">
                <input type="email" placeholder="Corporate Email" />
                <input type="password" placeholder="Password" />
                <button type="button" className="btn btn-primary">Login Securely</button>
              </form>
            </section>
            <section className="panel">
              <h3>Dashboard Modules</h3>
              <ul className="feature-list">
                <li>My Vessels</li>
                <li>Certificates</li>
                <li>Survey Schedule</li>
                <li>Download Documents</li>
                <li>Compliance Status</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
