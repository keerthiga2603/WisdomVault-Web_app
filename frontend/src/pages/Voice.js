import Navbar from "../components/Navbar";
import "./Voice.css";
import { useState } from "react";

function Voice() {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(!playing);
  };

  return (
    <>
      <Navbar />

      <div className="voice-page">

        {/* TITLE */}
        <h2>🎧 Authentic Elder Voices</h2>

        {/* MAIN CARD */}
        <div className="voice-box">

          <h1>Preserving Wisdom in Their Own Voice</h1>

          <p>
            Preserve and experience wisdom exactly as elders share it,
            in their own language and voice.
          </p>

          {/* PLAY BUTTON */}
          <div className="play-btn" onClick={handlePlay}>
            ▶
          </div>

          {/* AUDIO INFO */}
          <p className="audio-info">
            🧓 1 min 12 sec · Cold & Cough Remedy
          </p>

          {/* PROGRESS BAR */}
          <div className="progress-bar"></div>

        </div>

      </div>
    </>
  );
}

export default Voice;