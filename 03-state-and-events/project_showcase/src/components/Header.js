import React, { useState } from "react";

// when the button gets clciked, we want to re-render the button with new text content. if we are in dark mode, 'light mode', if we are in light mode, 'dark mode'

function Header() {

  const [isDarkMode, setIsDarkMode] = useState(true)

  function handleToggle() {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleToggle}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </header>
  );
}

export default Header;
