import React from "react";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    // BEM
    <div className="app">
      <Header />
      {/* HEADER */}
      <Home />
      {/* HOME */}
    </div>
  );
}

export default App;
