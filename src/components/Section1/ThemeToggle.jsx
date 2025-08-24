import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      aria-label="Toggle theme"
      style={{
        cursor: 'pointer',
        background: 'transparent',
        border: 'none',
        padding: '10px',
        borderRadius: '50%',
      }}
    >
      {isDarkMode ? (
        <Sun size={32} color="#FFD700" />
      ) : (
        <Moon size={32} color="#4A4A4A" />
      )}
    </button>
  );
}
