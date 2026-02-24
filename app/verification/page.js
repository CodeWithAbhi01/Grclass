'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const demoCertificates = {
  GRC1024: {
    vessel: 'MV Ocean Integrity',
    imo: 'IMO 9723456',
    status: 'Valid',
    expiry: '2027-04-12',
    survey: 'Annual Survey Completed'
  }
};

export default function VerificationPage() {
  const [certNo, setCertNo] = useState('');
  const [result, setResult] = useState(null);

  const onVerify = () => {
    const key = certNo.trim().toUpperCase();
    setResult(demoCertificates[key] || 'not-found');
  };

  return (
    <>
      <Navbar />
      <main className="page section">
        <div className="container narrow reveal">
          <h1>Vessel Certificate Verification</h1>
          <p>Enter the certificate number to verify vessel class and statutory certification status.</p>
          <div className="verify-box">
            <input
              type="text"
              placeholder="e.g. GRC1024"
              value={certNo}
              onChange={(e) => setCertNo(e.target.value)}
            />
            <button className="btn btn-primary" onClick={onVerify}>Verify</button>
          </div>

          {result && result !== 'not-found' && (
            <div className="result-card">
              <h3>Verification Result</h3>
              <p><strong>Vessel Name:</strong> {result.vessel}</p>
              <p><strong>IMO Number:</strong> {result.imo}</p>
              <p><strong>Certificate Status:</strong> {result.status}</p>
              <p><strong>Expiry Date:</strong> {result.expiry}</p>
              <p><strong>Survey Status:</strong> {result.survey}</p>
            </div>
          )}

          {result === 'not-found' && <p className="warning">No certificate found. Please contact GR Class.</p>}
        </div>
      </main>
      <Footer />
    </>
  );
}
