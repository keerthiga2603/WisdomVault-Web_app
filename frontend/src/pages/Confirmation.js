import Navbar from "../components/Navbar";
import "./Confirmation.css";
import { useNavigate } from "react-router-dom";

function Confirmation() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="confirm-page">

        {/* HEADER */}
        <h1>Submission Confirmed</h1>
        <p>Thank you for preserving traditional knowledge</p>

        {/* SUCCESS BOX */}
        <div className="success-box">

          <div className="tick">✔</div>

          <h3>Your knowledge has been submitted successfully</h3>

          <p>Submission ID: WV-2026-001234</p>
          <p>Submitted on: Jan 18, 2026 · 3:45 PM</p>

        </div>

        {/* TWO CARDS */}
        <div className="bottom-grid">

          {/* LEFT */}
          <div className="card">
            <h3>⏳ What Happens Next?</h3>

            <ul>
              <li>Expert verification by our team</li>
              <li>Possible clarification call</li>
              <li>Approval & publishing</li>
              <li>Notification via email/SMS</li>
            </ul>

            <p className="small">Estimated time: 3–5 days</p>
          </div>

          {/* RIGHT */}
          <div className="card">
            <h3>📋 Submission Summary</h3>

            <p><b>Category:</b> Traditional Medicine</p>
            <p><b>Language:</b> Tamil</p>
            <p><b>Region:</b> Tamil Nadu</p>
            <p><b>Recording Type:</b> Audio + Transcription</p>

            <p className="small">Contributor details remain private</p>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="buttons">

          <button className="track">Track Status</button>

          <button className="share">Share</button>

          <button className="home" onClick={() => navigate("/home")}>
            Return Home
          </button>

        </div>

      </div>
    </>
  );
}

export default Confirmation;