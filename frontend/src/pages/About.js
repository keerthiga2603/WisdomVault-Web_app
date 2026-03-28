import Navbar from "../components/Navbar";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />

      <div className="about-page">

        {/* HEADER */}
        <h1>About WisdomVault</h1>
        <p>Preserving ancestral knowledge using AI & community trust</p>

        {/* TOP CARDS */}
        <div className="about-grid">

          <div className="card">
            <h3>🌿 Our Mission</h3>
            <p>
              WisdomVault aims to preserve traditional knowledge shared orally by elders.
              We bridge generations by converting ancestral wisdom into accessible,
              searchable AI-driven knowledge for future use.
            </p>
          </div>

          <div className="card">
            <h3>⚙️ How It Works</h3>
            <p>
              Elders contribute knowledge through voice recordings. AI transcribes and
              structures the content. Human verification ensures authenticity before
              public access.
            </p>
          </div>

          <div className="card">
            <h3>🤖 Technology Stack</h3>
            <ul>
              <li>Speech-to-Text AI</li>
              <li>Natural Language Processing</li>
              <li>Knowledge Graph Mapping</li>
              <li>Secure Web & Mobile Platform</li>
            </ul>
          </div>

        </div>

        {/* STATS BAR */}
        <div className="stats">

          <div>
            <h2>100+</h2>
            <p>Elders Engaged</p>
          </div>

          <div>
            <h2>3+</h2>
            <p>Languages Supported</p>
          </div>

          <div>
            <h2>AI + Human</h2>
            <p>Ethical Verification</p>
          </div>

        </div>

      </div>
    </>
  );
}

export default About;