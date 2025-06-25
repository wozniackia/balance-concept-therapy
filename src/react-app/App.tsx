// src/App.tsx

import balanceLogoNapis from "/balance-logo-napis.svg"
import balanceLogoLudek from "/balance-logo-ludek.svg"
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://balance-concept.pl/" target="_blank">
          <img src={balanceLogoNapis} className="logo" alt="Balance Concept" />
        </a>
        <h1>Pilates Club</h1>
        <img src={balanceLogoLudek} className="logo" alt="Logo Balance Concept" />
        <p>© 2025 Balance Concept.</p>
      </div>
    </>
  );
}

export default App;
