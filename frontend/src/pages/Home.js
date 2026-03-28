import Navbar from "../components/Navbar";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [wisdomData, setWisdomData] = useState([]);
  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/wisdom");
      const data = await res.json();
      setWisdomData(data.filter(item => item.status === "approved"));
      console.log("Backend Data:", data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  fetchData();
}, []);

const thStyle = {
  padding: "12px",
  borderBottom: "1px solid #250909",
};

const tdStyle = {
  padding: "10px",
  borderBottom: "1px solid #330e0e",
};
  return (
    <>
      <Navbar />

      <section className="hero">

        <h1>
          Preserving Ancient Wisdom <br />
          Through Artificial Intelligence
        </h1>

        <p>
          Discover elder knowledge through voice, culture, and intelligent search
        </p>

        {/* SEARCH */}
        <div className="search-box">
          <span className="search-icon">🔍</span>

          <input
            placeholder="fever"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            onClick={() => {
              if (query.trim()) {
                navigate(`/search?q=${query}`);
              }
            }}
          >
            Search
          </button>
        </div>

        <div className="examples">
          Try: <b>"Turmeric for inflammation"</b>, <b>"Rice harvest songs"</b>
          <br />
          Or explore curated knowledge using <b>Browse</b> in the top menu
        </div>

        {/* CARDS */}
        <div className="features">

          <div className="card voice" onClick={() => navigate("/voice")}>
            <div className="icon">🎧</div>
            <h3>Authentic Elder Voices</h3>
            <p>
              Preserve and experience wisdom exactly as elders share it,
              in their own language and voice.
            </p>
          </div>

          <div className="card ai">
            <div className="icon">🤖</div>
            <h3>AI-Guided Discovery</h3>
            <p>
              Ask naturally and let intelligent systems surface culturally relevant knowledge.
            </p>
          </div>

          <div className="card culture" onClick={() => navigate("/cultural")}>
            <div className="icon">🌿</div>
            <h3>Cultural Connections</h3>
            <p>
              Understand how remedies, food, rituals, and stories are deeply interconnected.
            </p>
          </div>

        </div>
        <div style={{ marginTop: "50px" }}>
  <h2 style={{ marginBottom: "15px" }}>
    Pending for Approval (Test Mode)
  </h2>

  {wisdomData.length === 0 ? (
    <p>No data found</p>
  ) : (
    <table style={{
      width: "100%",
      borderCollapse: "collapse",
      background: "#e9eee5",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <thead style={{ background: "#28832d", color: "#416921" }}>
        <tr>
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Region</th>
          <th style={thStyle}>Language</th>
          <th style={thStyle}>Content</th>
          <th style={thStyle}>Status</th>
          <th style={thStyle}>Audio</th>
        </tr>
      </thead>

      <tbody>
        {wisdomData.map((item) => (
          <tr key={item._id} style={{ textAlign: "center" }}>
            <td style={tdStyle}>{item.elderName || "-"}</td>
            <td style={tdStyle}>{item.region || "-"}</td>
            <td style={tdStyle}>{item.language || "-"}</td>

            <td style={{ ...tdStyle, maxWidth: "250px" }}>
              {item.description?.slice(0, 60)}...
            </td>

            <td
  style={{
    ...tdStyle,
    color: item.status === "approved" ? "green" : "orange",
    fontWeight: "bold"
  }}
>
  {item.status === "approved" ? "Approved" : "Under Review"}
</td>
<td>
  {item.audio ? (
    <audio controls style={{ width: "150px" }}>
      
      <source
        src={`http://localhost:5000${item.audio}`}
        type="audio/mpeg"
      />
    </audio>
  ) : (
    "No Audio"
  )}
</td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>

      </section>
    </>
  );
}

export default Home;