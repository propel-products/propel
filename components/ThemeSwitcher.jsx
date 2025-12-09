'use client';

import { useTheme } from 'next-themes';
import { useBrandTheme } from './ThemeProvider';
import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Monitor, Palette, ChevronDown } from 'lucide-react';

export default function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { brandTheme, setBrandTheme, themes } = useBrandTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg bg-black/10 dark:bg-white/10 text-gray-900 dark:text-white">
        <Palette size={18} />
      </button>
    );
  }

  const modeIcons = {
    light: <Sun size={16} />,
    dark: <Moon size={16} />,
    system: <Monitor size={16} />,
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-lg bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-gray-900 dark:text-white transition-colors"
        aria-label="Theme settings"
      >
        <Palette size={18} />
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 overflow-hidden">
          {/* Brand Colors */}
          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Brand Color</p>
            <div className="flex gap-2">
              {Object.entries(themes).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setBrandTheme(key)}
                  className={`w-8 h-8 rounded-full transition-all ${
                    brandTheme === key ? 'ring-2 ring-gray-900 dark:ring-white ring-offset-2 ring-offset-white dark:ring-offset-gray-900 scale-110' : 'hover:scale-105'
                  }`}
                  style={{ backgroundColor: value.primary }}
                  title={value.name}
                  aria-label={`Set ${value.name} theme`}
                />
              ))}
            </div>
          </div>

          {/* Dark/Light Mode */}
          <div className="p-3">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Appearance</p>
            <div className="flex gap-1">
              {['light', 'dark', 'system'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setTheme(mode)}
                  className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm capitalize transition-colors ${
                    theme === mode
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  aria-label={`Set ${mode} mode`}
                >
                  {modeIcons[mode]}
                  <span className="hidden sm:inline">{mode}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
