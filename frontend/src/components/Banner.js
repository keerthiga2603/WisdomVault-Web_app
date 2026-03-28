import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#1b5e20", color: "white", padding: "8px", textAlign: "center" }}>
      ⚠️ History is not stored on this website.
      <button onClick={() => navigate("/download")} style={{ marginLeft: 10 }}>
        Download App
      </button>
    </div>
  );
}

export default Banner;