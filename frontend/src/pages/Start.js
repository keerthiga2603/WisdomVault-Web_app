import "./Start.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Start() {
  const [query, setQuery] = useState("");
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setShowResult(true);
    }
  };

  return (
    <div className="start-page">

      {/* TITLE */}
      <h1>Google</h1>

      {/* SEARCH BAR */}
      <div className="search-bar">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Search..."
        />
        <span>AI Mode</span>
      </div>

      {/* RESULT CARD */}
      {showResult && (
        <div className="result-card">

          <div className="tag">AI Overview</div>

          <p>
            Common home remedies for cough include ginger tea with honey,
            warm fluids, steam inhalation, and rest. These remedies may
            help soothe the throat and reduce irritation.
          </p>

          <button onClick={() => navigate("/Home")}>
            Deep Dive into Traditional Knowledge
          </button>

          <small>
            Explore cultural context, elder practices, and traditional wisdom
          </small>

        </div>
      )}

    </div>
  );
}

export default Start;