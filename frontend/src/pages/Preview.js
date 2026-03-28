import Navbar from "../components/Navbar";
import "./Preview.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Preview() {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
const [mediaRecorder, setMediaRecorder] = useState(null);
const [audioURL, setAudioURL] = useState("");
const [audioBlob, setAudioBlob] = useState(null);
  const [form, setForm] = useState({
    name: "",
    age: "",
    region: "",
    language: "",
    contact: "",
    review: "",
    transcription: "மூக்கில் சளி வந்தால் இஞ்சி, தேன் கலந்து குடிக்கலாம்..."
  });

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const startRecording = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  const recorder = new MediaRecorder(stream);
  let chunks = [];

  recorder.ondataavailable = (e) => {
    chunks.push(e.data);
  };

  recorder.onstop = () => {
  const blob = new Blob(chunks, { type: "audio/mp3" });

  setAudioBlob(blob); // ✅ STORE FILE

  const url = URL.createObjectURL(blob);
  setAudioURL(url); // for playback
};

  recorder.start();
  setMediaRecorder(recorder);
  setIsRecording(true);
};

const stopRecording = () => {
  mediaRecorder.stop();
  setIsRecording(false);
};
  // Submit data to backend
  const handleSubmit = async () => {
  const formData = new FormData();

  // BASIC DATA
  formData.append("title", "Voice Knowledge");
  formData.append("description", form.transcription);
  formData.append("category", "Voice");

  // FORM DATA (OLD DETAILS FIXED ✅)
  formData.append("elderName", form.name);
  formData.append("age", form.age);
  formData.append("region", form.region);
  formData.append("language", form.language);
  formData.append("contact", form.contact);
  formData.append("review", form.review);

  // AUDIO
  if (audioBlob) {
    formData.append("audio", audioBlob, "recording.mp3");
  }

  try {
    const res = await fetch("http://localhost:5000/api/wisdom", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    console.log("Saved:", result);

    alert("Saved Data with audio!");
    navigate("/home");
  } catch (err) {
    console.error(err);
  }
};

  return (
    <>
      <Navbar />

      <div className="preview-page">
        <h1>Preview & Verification</h1>
        <p>Review your recording and confirm accuracy before submission</p>

        <div className="main-container">

          {/* LEFT */}
          <div className="left">

            <div className="card">
              <h3>🎧 Audio Recorder</h3>

<div style={{ marginBottom: "10px" }}>
  {!isRecording ? (
    <button onClick={startRecording}>🎤 Start Recording</button>
  ) : (
    <button onClick={stopRecording}>⏹ Stop Recording</button>
  )}
</div>

{audioURL && (
  <audio controls src={audioURL}></audio>
)}
              <p className="small">Duration: less than 1 min | Quality: Clear</p>
            </div>

            <div className="card">
              <h3>👤 Contributor Details</h3>

              <div className="form-grid">
                <input
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                />

                <input
                  name="age"
                  placeholder="Age"
                  value={form.age}
                  onChange={handleChange}
                />

                <input
                  name="region"
                  placeholder="Region"
                  value={form.region}
                  onChange={handleChange}
                />

                <select
                  name="language"
                  value={form.language}
                  onChange={handleChange}
                >
                  <option value="">Language</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Telugu">Telugu</option>
                </select>
              </div>

              <input
                name="contact"
                placeholder="Email / Phone"
                value={form.contact}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
            </div>

          </div>

          {/* RIGHT */}
          <div className="right">

            <div className="card">
              <h3>📝 AI Transcription</h3>

              <textarea
                name="transcription"
                value={form.transcription}
                onChange={handleChange}
              />
            
              <div className="options">
                <label>
                  <input
                    type="radio"
                    name="review"
                    value="correct"
                    onChange={handleChange}
                  />
                  Correct
                </label>

                <label>
                  <input
                    type="radio"
                    name="review"
                    value="minor"
                    onChange={handleChange}
                  />
                  Minor Edits
                </label>

                <label>
                  <input
                    type="radio"
                    name="review"
                    value="rerecord"
                    onChange={handleChange}
                  />
                  Re-record
                </label>
              </div>
            </div>

            <div className="info-box">
              <h4>⏳ What happens next?</h4>

              <ul>
                <li>Content verification</li>
                <li>Possible follow-up call</li>
                <li>Approval & publishing</li>
              </ul>

              <p className="review-time">Review time: 3–5 days</p>

              <button className="submit" onClick={handleSubmit}>
                Submit for Review
              </button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Preview;