import Navbar from "../components/Navbar";
import "./AppDownload.css";

function AppDownload() {
  return (
    <>
      <Navbar />

      <div className="app-page">

        {/* HEADER */}
        <h1>WisdomVault Mobile App</h1>
        <p>Designed for deeper access to traditional knowledge</p>

        {/* MAIN GRID */}
        <div className="app-grid">

          {/* LEFT CARD */}
          <div className="card">

            <h3>📱 Why Use the App?</h3>

            <ul>
              <li>✔ Save search history</li>
              <li>✔ Offline access</li>
              <li>✔ Better audio experience</li>
              <li>✔ Personalized recommendations</li>
            </ul>
<button
  className="download-btn"
  onClick={() => window.open("https://wisdomvault-3e7.caffeine.xyz/#caffeineAdminToken=73c113fe74af234712cce472eaae728aa843e716a8ff14dd7a30682b114999a9", "_blank")}
>
  Download for Android
</button>

            <div className="qr">
    <img
      src={require("../assets/qr.jpg")}
      alt="WisdomVault QR Code"
      style={{ width: "100px", height: "100px", align:"center"}}
    />
  </div>

          </div>

          {/* RIGHT CARD */}
          <div className="card">

            <h3>🌐 Website vs 📱 App</h3>

            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Website</th>
                  <th>Mobile App</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Search Knowledge</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>

                <tr>
                  <td>History Saved</td>
                  <td>✖</td>
                  <td>✔</td>
                </tr>

                <tr>
                  <td>Offline Access</td>
                  <td>✖</td>
                  <td>✔</td>
                </tr>

                <tr>
                  <td>Audio Playback</td>
                  <td>Basic</td>
                  <td>Enhanced</td>
                </tr>
              </tbody>
            </table>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="secure-bar">
          🔒 Your data is secure. Contact details are never shared publicly.
        </div>

      </div>
    </>
  );
}

export default AppDownload;