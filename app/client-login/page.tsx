"use client";

import { FormEvent, useState } from "react";

export default function ClientLoginPage() {
  const [loggedIn, setLoggedIn] = useState(false);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoggedIn(true);
  };

  return (
    <section className="section page-top">
      <div className="container reveal">
        <h1>Client Login Portal</h1>
        <p>Access secure vessel records, certificates, and compliance updates.</p>

        {!loggedIn ? (
          <form className="login-box" onSubmit={onSubmit}>
            <input type="email" placeholder="Corporate Email" required />
            <input type="password" placeholder="Password" required />
            <button className="btn btn-primary" type="submit">Secure Login</button>
          </form>
        ) : (
          <div className="dashboard-grid">
            <article className="card"><h3>My Vessels</h3><p>12 active vessels under GR oversight.</p></article>
            <article className="card"><h3>Certificates</h3><p>28 valid certificates; 2 expiring in 30 days.</p></article>
            <article className="card"><h3>Survey Schedule</h3><p>Next survey due: MV Ocean Sentinel (14 Mar 2026).</p></article>
            <article className="card"><h3>Download Documents</h3><p>Class and statutory documents available as signed PDFs.</p></article>
            <article className="card"><h3>Compliance Status</h3><p>Fleet compliance score: 98.4% aligned with SOLAS and MARPOL.</p></article>
          </div>
        )}
      </div>
    </section>
  );
}
