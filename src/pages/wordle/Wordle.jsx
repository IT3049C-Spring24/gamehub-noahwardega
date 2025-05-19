import React, { useEffect } from "react";
import "./styles/style.css"; 

const Wordle = () => {
  useEffect(() => {
    import("./scripts/dark-mode-toggle.js").catch(console.error);
    import("./scripts/game.js").catch(console.error);
  }, []);

  return (
    <div>
      <header>
        <span id="mode-toggle">🌞/🌙</span>
        <h1>Wordle</h1>
      </header>
      <div id="game">
        <div id="wordle-grid">
          {/* Grid gets populated by game.js */}
        </div>
<div id="reveal-word" style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '1.2rem' }}></div>
      </div>
    </div>
  );
};

export default Wordle;
