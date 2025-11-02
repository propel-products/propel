/**
 * Cookie Consent Management Utility
 * 
 * This utility helps manage cookie consent and can be used to conditionally
 * load analytics scripts based on user preferences.
 */

export const COOKIE_CONSENT_KEY = 'cookie-consent';
export const COOKIE_CONSENT_DATE_KEY = 'cookie-consent-date';

/**
 * Get current cookie consent preferences
 * @returns {Object|null} Cookie preferences or null if not set
 */
export function getCookieConsent() {
  if (typeof window === 'undefined') return null;
  
  try {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    return consent ? JSON.parse(consent) : null;
  } catch (e) {
    return null;
  }
}

/**
 * Check if analytics cookies are allowed
 * @returns {boolean}
 */
export function hasAnalyticsConsent() {
  const consent = getCookieConsent();
  return consent?.analytics === true;
}

/**
 * Check if functionality cookies are allowed
 * @returns {boolean}
 */
export function hasFunctionalityConsent() {
  const consent = getCookieConsent();
  return consent?.functionality === true;
}

/**
 * Check if essential cookies are allowed (always true)
 * @returns {boolean}
 */
export function hasEssentialConsent() {
  return true; // Essential cookies are always allowed
}

/**
 * Check if user has given any consent
 * @returns {boolean}
 */
export function hasConsent() {
  return getCookieConsent() !== null;
}

/**
 * Update Google Analytics consent (if GA is loaded)
 * @param {boolean} granted - Whether to grant consent
 */
export function updateAnalyticsConsent(granted) {
  if (typeof window === 'undefined') return;
  
  // If Google Analytics is loaded, update consent
  if (typeof window.gtag !== 'undefined') {
    window.gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
      ad_storage: granted ? 'granted' : 'denied',
    });
  }
}

/**
 * Initialize analytics based on consent
 * Call this after user accepts cookies or when page loads
 */
export function initializeAnalytics() {
  if (typeof window === 'undefined') return;
  
  const consent = getCookieConsent();
  
  if (consent?.analytics) {
    // Initialize analytics here
    // Example: Load Google Analytics script
    updateAnalyticsConsent(true);
  } else {
    updateAnalyticsConsent(false);
  }
}

/**
 * Get consent date
 * @returns {string|null}
 */
export function getConsentDate() {
  if (typeof window === 'undefined') return null;
  
  return localStorage.getItem(COOKIE_CONSENT_DATE_KEY);
}

/**
 * Check if consent is older than 12 months (GDPR recommendation)
 * @returns {boolean}
 */
export function shouldRenewConsent() {
  const consentDate = getConsentDate();
  if (!consentDate) return true;
  
  const date = new Date(consentDate);
  const twelveMonthsAgo = new Date();
  twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);
  
  return date < twelveMonthsAgo;
}

