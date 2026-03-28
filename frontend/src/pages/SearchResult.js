import Navbar from "../components/Navbar";
import "./SearchResult.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function SearchResult() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const [lang, setLang] = useState("en");
  const [searchText, setSearchText] = useState(query || "");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/wisdom/search?q=${query}`
        );
        const data = await res.json();
        console.log("Search API data:", data);
        setResults(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (query) fetchResults();
  }, [query]);

  return (
    <>
      <Navbar />

      <div className="search-page">

        {/* SEARCH BAR */}
        <div className="search-top">
          <span>🔍</span>
          

<input
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
/>

<button
  onClick={() => {
    window.location.href = `/search?q=${searchText}`;
  }}
>
  Search
</button>
        </div>

        {/* 🔥 IF NO RESULTS → SHOW DEFAULT UI */}
        {results.length === 0 ? (
          <div className="content">

            <div className="left-card">
              <div className="images">
                <img src="https://cdn-icons-png.flaticon.com/512/590/590685.png" alt="" />
                <img src="https://cdn-icons-png.flaticon.com/512/415/415733.png" alt="" />
                <img src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png" alt="" />
              </div>

              <h2>👵 No Results Found</h2>
              <p className="sub">Try different keywords</p>

              <p className="desc">
                Try searching with:
                <br />
                • Tamil words if your data is Tamil  
                <br />
                • Keywords from your stored content  
              </p>
            </div>

            <div className="right-card">
              <h3>🌿 Tip</h3>
              <p>
                Your data must match the search query.  
                Example: If DB has Tamil text, search in Tamil.
              </p>
            </div>

          </div>
        ) : (
          results.map((item) => (
            <div className="content" key={item._id}>

              <div className="left-card">
                <div className="images">
                  <img src="https://cdn-icons-png.flaticon.com/512/590/590685.png" alt="" />
                  <img src="https://cdn-icons-png.flaticon.com/512/415/415733.png" alt="" />
                  <img src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png" alt="" />
                </div>

                <h2>👵 {item.title}</h2>
                <p className="sub">
                  {item.elderName} · {item.region}
                </p>

                <div className="lang">
                  <button
                    className={lang === "en" ? "active" : ""}
                    onClick={() => setLang("en")}
                  >
                    English
                  </button>

                  <button
                    className={lang === "ta" ? "active" : ""}
                    onClick={() => setLang("ta")}
                  >
                    தமிழ்
                  </button>
                </div>

                <p className="desc">
                  {item.description}
                </p>
              </div>

              <div className="right-card">
                <h3>🌿 Cultural Context</h3>
                <p>
                  Traditional knowledge passed through generations.
                </p>

                <p style={{ marginTop: "10px", color: "#777" }}>
                  Language: {item.language}
                </p>
              </div>

            </div>
          ))
        )}

        <div className="footer">
          🌐 wisdomvault.ai | ✉ support@wisdomvault.ai
        </div>

      </div>
    </>
  );
}

export default SearchResult;