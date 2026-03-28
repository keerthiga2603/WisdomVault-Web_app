import Navbar from "../components/Navbar";
import "./Cultural.css";

function Cultural() {
  return (
    <>
      <Navbar />

      <div className="cultural-page">

        {/* TITLE */}
        <h2>🌿 Cultural Connections</h2>

        {/* MAIN CARD */}
        <div className="culture-box">

          <h1>Wisdom Lives as a Connected Story</h1>
          <p>
            Remedies, food habits, daily routines, and rituals evolved together —
            shaping a way of life passed through generations.
          </p>

          {/* FLOW CARDS */}
          <div className="flow">

            <div className="flow-card">
              <div className="icon">🌽</div>
              <h3>Food Habits</h3>
              <p>Seasonal grains, millets, herbs, and home meals built health.</p>
            </div>

            <span className="arrow">→</span>

            <div className="flow-card">
              <div className="icon">🥣</div>
              <h3>Home Remedies</h3>
              <p>Food became medicine — ginger, pepper, turmeric, honey.</p>
            </div>

            <span className="arrow">→</span>

            <div className="flow-card">
              <div className="icon">🧘</div>
              <h3>Daily Practices</h3>
              <p>Movement, breathing, and rest balanced body and mind.</p>
            </div>

            <span className="arrow">→</span>

            <div className="flow-card">
              <div className="icon">🪔</div>
              <h3>Rituals</h3>
              <p>Festivals and prayers reinforced gratitude and discipline.</p>
            </div>

            <span className="arrow">→</span>

            <div className="flow-card">
              <div className="icon">📖</div>
              <h3>Oral Stories</h3>
              <p>Wisdom passed as stories — memorable and meaningful.</p>
            </div>

          </div>

          {/* BOTTOM BAR */}
          <div className="bottom-bar">
            🌱 Cultural knowledge flowed naturally through food, health, routine, belief, and storytelling.
          </div>

        </div>

      </div>
    </>
  );
}

export default Cultural;