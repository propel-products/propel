import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cookie Policy | OCO Limited',
  description: 'OCO Limited Cookie Policy - Information about how we use cookies on our website.',
};

export default function CookiePolicy() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center">Cookie Policy</h1>
          
          <div className="prose prose-invert max-w-none text-gray-300 space-y-6 leading-relaxed">
            <p className="text-lg text-gray-400 mb-8">
              <strong>Last Updated:</strong> November 2025
            </p>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p>
                Cookies can be "persistent" (remain on your device until deleted or expired) or "session" cookies (deleted when you close your browser).
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">2. How We Use Cookies</h2>
              <p>OCO Limited uses cookies on our website (www.ocoiom.com) for the following purposes:</p>
              
              <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Essential Cookies</h3>
              <p>These cookies are necessary for the website to function properly. They enable core functionality such as:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Security and authentication</li>
                <li>Remembering your preferences</li>
                <li>Navigation and accessibility features</li>
              </ul>
              <p className="mt-4">These cookies cannot be disabled as they are essential for the website to work.</p>

              <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Analytics Cookies</h3>
              <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Page views and navigation patterns</li>
                <li>Time spent on pages</li>
                <li>Browser and device information</li>
                <li>Geographic location (general, not specific)</li>
              </ul>
              <p className="mt-4">This information helps us improve our website's functionality and user experience.</p>

              <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Functionality Cookies</h3>
              <p>These cookies allow the website to remember choices you make and provide enhanced, personalised features:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Language preferences</li>
                <li>User interface customisations</li>
                <li>Remembering form inputs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">3. Third-Party Cookies</h2>
              <p className="mb-4">We may use third-party services that set cookies on our website such as:</p>
              
              <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Google Analytics (if enabled)</h3>
              <p className="mb-2">
                If Google Analytics is enabled, it uses cookies to collect information about how visitors use our website. This data is processed anonymously and helps us improve our website.
              </p>
              <p>
                For more information, visit: <a href="https://policies.google.com/privacy" className="text-[#FF5007] hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">4. Types of Cookies We Use</h2>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse border border-gray-700">
                  <thead>
                    <tr className="bg-gray-900">
                      <th className="border border-gray-700 p-3 text-left">Cookie Name</th>
                      <th className="border border-gray-700 p-3 text-left">Purpose</th>
                      <th className="border border-gray-700 p-3 text-left">Duration</th>
                      <th className="border border-gray-700 p-3 text-left">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-700 p-3">Session/Preferences</td>
                      <td className="border border-gray-700 p-3">Essential website functionality</td>
                      <td className="border border-gray-700 p-3">Session / 1 year</td>
                      <td className="border border-gray-700 p-3">Essential</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 p-3">_vercel_analytics</td>
                      <td className="border border-gray-700 p-3">Website analytics (if enabled)</td>
                      <td className="border border-gray-700 p-3">2 years</td>
                      <td className="border border-gray-700 p-3">Analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">5. Managing Cookies</h2>
              <p>You can control and manage cookies in various ways:</p>
              
              <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Browser Settings</h3>
              <p>Most web browsers allow you to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>See what cookies you have and delete them individually</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies from specific sites</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
              
              <p className="mt-4">Please note that blocking or deleting cookies may impact your experience on our website, as some features may not function properly.</p>

              <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Browser-Specific Instructions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">6. Consent</h2>
              <p>
                By continuing to use our website, you consent to our use of cookies in accordance with this Cookie Policy. If you do not agree to our use of cookies, please adjust your browser settings or refrain from using our website.
              </p>
              <p className="mt-4">
                You can withdraw your consent at any time by adjusting your browser settings or contacting us at <a href="mailto:enquiries@ocoiom.com" className="text-[#FF5007] hover:underline">enquiries@ocoiom.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">7. Updates to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page with a new "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">8. Contact Us</h2>
              <p>If you have questions about our use of cookies, please contact us:</p>
              <div className="mt-4 p-6 bg-gray-900 rounded-lg">
                <p className="mb-2"><strong>OCO Limited</strong></p>
                <p className="mb-2">Email: <a href="mailto:enquiries@ocoiom.com" className="text-[#FF5007] hover:underline">enquiries@ocoiom.com</a></p>
                <p>Website: <a href="https://www.ocoiom.com" className="text-[#FF5007] hover:underline">www.ocoiom.com</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">9. More Information</h2>
              <p>For more information about cookies and how they work, you can visit:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="https://www.allaboutcookies.org" className="text-[#FF5007] hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a></li>
                <li><a href="https://www.youronlinechoices.com" className="text-[#FF5007] hover:underline" target="_blank" rel="noopener noreferrer">www.youronlinechoices.com</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

