// src/App.tsx

import balanceLogoNapis from "/balance-logo-napis.svg"
import balanceLogoLudek from "/balance-logo-ludek.svg"
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={balanceLogoNapis} className="logo-napis" alt="Balance Concept" />
        <br/>
        <img src={balanceLogoLudek} className="logo-ludek" alt="Logo Balance Concept" />
        <p className="copyright">© 2025 Balance Concept.</p>
      </div>
    </>
  );
}

export default App;
