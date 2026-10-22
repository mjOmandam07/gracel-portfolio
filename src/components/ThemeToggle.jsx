import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 dark:border-white/10 bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 text-slate-300 hover:text-white dark:text-slate-300 dark:hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-sm ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#DA79E9] transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-[#8B1FA0] transition-transform duration-300 -rotate-12" />
      )}
    </button>
  );
}

