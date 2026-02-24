"use client";

import { FormEvent, useState } from "react";

type VerificationResult = {
  vesselName: string;
  imo: string;
  status: string;
  expiry: string;
  survey: string;
};

const mockData: Record<string, VerificationResult> = {
  "GRC-2026-001": {
    vesselName: "MV Ocean Sentinel",
    imo: "IMO 9876543",
    status: "Valid",
    expiry: "12 Dec 2026",
    survey: "Annual Survey Completed"
  }
};

export default function VerificationPage() {
  const [certificate, setCertificate] = useState("");
  const [result, setResult] = useState<VerificationResult | null>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setResult(mockData[certificate.trim().toUpperCase()] ?? {
      vesselName: "Not Found",
      imo: "--",
      status: "Invalid/Unknown",
      expiry: "--",
      survey: "Please contact GR Class for manual verification"
    });
  };

  return (
    <section className="section page-top">
      <div className="container narrow reveal">
        <h1>Vessel Certificate Verification</h1>
        <p>Use the official certificate number to validate vessel classification and statutory status.</p>

        <form className="verify-box" onSubmit={onSubmit}>
          <label htmlFor="certificate">Certificate Number</label>
          <input
            id="certificate"
            value={certificate}
            onChange={(e) => setCertificate(e.target.value)}
            placeholder="e.g. GRC-2026-001"
            required
          />
          <button className="btn btn-primary" type="submit">Verify</button>
        </form>

        {result && (
          <div className="result-card">
            <h3>Verification Result</h3>
            <p><strong>Vessel Name:</strong> {result.vesselName}</p>
            <p><strong>IMO Number:</strong> {result.imo}</p>
            <p><strong>Certificate Status:</strong> {result.status}</p>
            <p><strong>Expiry Date:</strong> {result.expiry}</p>
            <p><strong>Survey Status:</strong> {result.survey}</p>
          </div>
        )}
      </div>
    </section>
  );
}
