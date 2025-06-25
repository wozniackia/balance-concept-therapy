// src/App.tsx

import balanceLogo from "/balance-logo-napis.svg"
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://balance-concept.pl/" target="_blank">
          <img src={balanceLogo} className="logo" alt="Balance Concept" />
        </a>
      </div>
    </>
  );
}

export default App;
