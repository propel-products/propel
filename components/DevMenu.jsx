'use client';

import { useState, useEffect } from 'react';
import { Settings, X, Eye, Layout, Palette, Code, Sparkles, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const devMenuConfig = {
  hero: {
    label: 'Hero Variant',
    options: [
      { value: 'minimal', label: 'Minimal (Default)' },
      { value: 'logos', label: 'With Partner Logos' },
      { value: 'bold', label: 'Bold Statement' },
      { value: 'split', label: 'Split Layout' },
    ],
  },
  showCaseStudies: {
    label: 'Case Studies Section',
    type: 'toggle',
    default: true,
  },
  showPartnerLogos: {
    label: 'Partner Logos Section',
    type: 'toggle',
    default: true,
  },
  logoVariant: {
    label: 'Partner Logos Style',
    options: [
      { value: 'static', label: 'Static Grid' },
      { value: 'marquee', label: 'Scrolling Marquee' },
    ],
  },
};

export default function DevMenu({ onConfigChange, initialConfig = {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState({
    hero: 'minimal',
    showCaseStudies: true,
    showPartnerLogos: true,
    logoVariant: 'static',
    ...initialConfig,
  });

  // Only show in development
  const [isDev, setIsDev] = useState(false);
  
  useEffect(() => {
    setIsDev(process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost');
    
    // Load saved config from localStorage
    const savedConfig = localStorage.getItem('propel-dev-config');
    if (savedConfig) {
      try {
        const parsed = JSON.parse(savedConfig);
        setConfig(prev => ({ ...prev, ...parsed }));
        onConfigChange?.({ ...config, ...parsed });
      } catch (e) {
        // Ignore parse errors
      }
    }
  }, []);

  const handleChange = (key, value) => {
    const newConfig = { ...config, [key]: value };
    setConfig(newConfig);
    localStorage.setItem('propel-dev-config', JSON.stringify(newConfig));
    onConfigChange?.(newConfig);
  };

  const resetConfig = () => {
    const defaultConfig = {
      hero: 'minimal',
      showCaseStudies: true,
      showPartnerLogos: true,
      logoVariant: 'static',
    };
    setConfig(defaultConfig);
    localStorage.removeItem('propel-dev-config');
    onConfigChange?.(defaultConfig);
  };

  if (!isDev) return null;

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
        title="Dev Menu"
      >
        <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel */}
          <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl z-50 overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                <span className="font-semibold text-gray-900 dark:text-white">Dev Menu</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6">
              {/* Hero Variant */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Layout className="w-4 h-4" />
                  Hero Variant
                </label>
                <select
                  value={config.hero}
                  onChange={(e) => handleChange('hero', e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {devMenuConfig.hero.options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Logo Variant */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Eye className="w-4 h-4" />
                  Partner Logos Style
                </label>
                <select
                  value={config.logoVariant}
                  onChange={(e) => handleChange('logoVariant', e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {devMenuConfig.logoVariant.options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Toggles */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Palette className="w-4 h-4" />
                  Sections
                </label>
                
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Case Studies</span>
                  <button
                    onClick={() => handleChange('showCaseStudies', !config.showCaseStudies)}
                    className={`relative w-11 h-6 rounded-full transition-colors ${config.showCaseStudies ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
                  >
                    <span 
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${config.showCaseStudies ? 'translate-x-5' : ''}`}
                    />
                  </button>
                </label>

                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Partner Logos</span>
                  <button
                    onClick={() => handleChange('showPartnerLogos', !config.showPartnerLogos)}
                    className={`relative w-11 h-6 rounded-full transition-colors ${config.showPartnerLogos ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
                  >
                    <span 
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${config.showPartnerLogos ? 'translate-x-5' : ''}`}
                    />
                  </button>
                </label>
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={resetConfig}
                  className="w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  Reset to Defaults
                </button>
              </div>

              {/* Dev Pages */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  <Sparkles className="w-4 h-4" />
                  Dev Pages
                </label>
                <div className="space-y-2">
                  <Link 
                    href="/dev/effects"
                    className="flex items-center justify-between px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <span>Effects Library</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Current Config Display */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Current Config:</p>
                <pre className="text-xs bg-gray-50 dark:bg-gray-800 p-3 rounded-lg overflow-x-auto text-gray-600 dark:text-gray-400">
                  {JSON.stringify(config, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
