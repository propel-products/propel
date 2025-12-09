'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always required
    analytics: false,
    functionality: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent);
        setCookiePreferences(saved);
        applyCookieSettings(saved);
      } catch (e) {
        setIsVisible(true);
      }
    }
  }, []);

  const applyCookieSettings = (prefs) => {
    // Essential cookies are always enabled
    if (prefs.analytics) {
      // Enable analytics cookies
      // You can add your analytics initialization here
      // Example: gtag('consent', 'update', { analytics_storage: 'granted' });
    } else {
      // Disable analytics cookies
      // Example: gtag('consent', 'update', { analytics_storage: 'denied' });
    }

    if (prefs.functionality) {
      // Enable functionality cookies
    } else {
      // Disable functionality cookies
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      functionality: true,
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    applyCookieSettings(allAccepted);
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      essential: true,
      analytics: false,
      functionality: false,
    };
    setCookiePreferences(necessaryOnly);
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    applyCookieSettings(necessaryOnly);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(cookiePreferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    applyCookieSettings(cookiePreferences);
    setIsVisible(false);
    setPreferencesOpen(false);
  };

  const togglePreference = (key) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled
    setCookiePreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t-2 border-primary shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            {/* Cookie Icon and Message */}
            <div className="flex-1">
              <div className="flex items-start gap-3">
                <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2 text-lg">
                    We Value Your Privacy
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    We use cookies to improve your experience. Accept or manage preferences in our{' '}
                    <Link href="/cookies" className="text-primary hover:underline">
                      Cookie Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:flex-shrink-0">
              <button
                onClick={() => setPreferencesOpen(true)}
                className="px-4 py-2 text-sm font-medium text-white border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Manage Preferences
              </button>
              <button
                onClick={handleAcceptNecessary}
                className="px-4 py-2 text-sm font-medium text-white border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Necessary Only
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm font-semibold bg-primary text-white rounded-lg hover:opacity-90 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Preferences Modal */}
      {preferencesOpen && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-black border-2 border-primary rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Cookie className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-white">Cookie Preferences</h2>
                </div>
                <button
                  onClick={() => setPreferencesOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Cookie Categories */}
              <div className="space-y-6 mb-6">
                {/* Essential Cookies */}
                <div className="border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Essential Cookies</h3>
                      <p className="text-sm text-gray-400">Required for the website to function properly</p>
                    </div>
                    <div className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                      Always Active
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">
                    These cookies are necessary for the website to function and cannot be switched off. 
                    They include security, authentication, and basic functionality features.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Analytics Cookies</h3>
                      <p className="text-sm text-gray-400">Help us understand how visitors use our website</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.analytics}
                        onChange={() => togglePreference('analytics')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">
                    These cookies collect anonymous information about how visitors interact with our website, 
                    helping us improve user experience and site performance.
                  </p>
                </div>

                {/* Functionality Cookies */}
                <div className="border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Functionality Cookies</h3>
                      <p className="text-sm text-gray-400">Remember your preferences and provide enhanced features</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.functionality}
                        onChange={() => togglePreference('functionality')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">
                    These cookies allow the website to remember choices you make and provide enhanced, 
                    personalised features such as language preferences.
                  </p>
                </div>
              </div>

              {/* Links */}
              <div className="border-t border-gray-700 pt-4 mb-6">
                <p className="text-sm text-gray-400">
                  For more information, please read our{' '}
                  <Link href="/cookies" className="text-primary hover:underline">
                    Cookie Policy
                  </Link>
                  {' '}and{' '}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              {/* Save Button */}
              <div className="flex gap-3">
                <button
                  onClick={() => setPreferencesOpen(false)}
                  className="flex-1 px-4 py-3 text-sm font-medium text-white border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-4 py-3 text-sm font-semibold bg-primary text-white rounded-lg hover:opacity-90 transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

