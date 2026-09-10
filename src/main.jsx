import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../style.css";

function App() {
  return (
    <main className="contact-card">
      <div className="head">
        <h1>Prosper Techy Bros</h1>
      </div>

      <label className="hello-input" htmlFor="website">
        Prosper Techy Bros:
      </label>
      <input
        className="hello-input"
        id="website"
        type="text"
        placeholder="www.prospershipsblog.com"
      />

      <p className="hello-input intro">
        Reach out for your professional logo and advertising your business on
        my website and your responsive website design.
      </p>

      <div className="arrow-label">
        <span>Contact Email</span>
        <span aria-hidden="true">↓</span>
      </div>
      <input
        className="hello-input"
        id="email"
        type="email"
        placeholder="prospershipsblog@gmail.com"
      />
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
