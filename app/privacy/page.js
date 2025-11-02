import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | OCO Limited',
  description: 'OCO Limited Privacy Policy - How we collect, use, and protect your personal data in accordance with Isle of Man data protection regulations.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none text-gray-300 space-y-6 leading-relaxed">
            <p className="text-lg text-gray-400 mb-8">
              <strong>Last Updated:</strong> January 2025
            </p>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">1. Introduction</h2>
              <p>
                OCO Limited ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.ocoiom.com or engage our services.
              </p>
              <p>
                We are registered with the Isle of Man Information Commissioner in accordance with the Data Protection Act 2018 and are committed to complying with all applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">2. Information We Collect</h2>
              <p>We may collect and process the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, postal address, telephone number</li>
                <li><strong>Business Information:</strong> Company name, business details, financial information</li>
                <li><strong>Website Usage:</strong> IP address, browser type, pages visited, time and date of visits</li>
                <li><strong>Communication Data:</strong> Information you provide when contacting us or using our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">3. How We Use Your Information</h2>
              <p>We use your personal information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide accounting, advisory, and CFO services</li>
                <li>To respond to your inquiries and communicate with you</li>
                <li>To comply with legal and regulatory obligations</li>
                <li>To improve our website and services</li>
                <li>To send you relevant information about our services (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">4. Legal Basis for Processing</h2>
              <p>We process your personal data on the following legal bases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contractual Necessity:</strong> To fulfill our contractual obligations to you</li>
                <li><strong>Legal Obligation:</strong> To comply with accounting, tax, and regulatory requirements</li>
                <li><strong>Legitimate Interests:</strong> To operate and improve our business</li>
                <li><strong>Consent:</strong> Where you have provided explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">5. Data Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Professional advisors (e.g., solicitors, tax advisors) where necessary</li>
                <li>Regulatory authorities when required by law</li>
                <li>Service providers who assist us in operating our business (under strict confidentiality agreements)</li>
                <li>Third parties only with your explicit consent or as required by law</li>
              </ul>
              <p className="mt-4">We do not sell or rent your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">6. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">7. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Accounting and tax records are typically retained for at least seven years as required by Isle of Man law.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">8. Your Rights</h2>
              <p>Under the Data Protection Act 2018, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right of Access:</strong> Request copies of your personal data</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal requirements)</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Rights Relating to Automated Decision Making:</strong> Not applicable to our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">9. Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience. For detailed information about cookies, please see our <a href="/cookies" className="text-[#FF5007] hover:underline">Cookie Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">10. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">11. International Data Transfers</h2>
              <p>
                Your information may be transferred to and stored in countries outside the European Economic Area (EEA). We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">12. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">13. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">14. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
              <div className="mt-4 p-6 bg-gray-900 rounded-lg">
                <p className="mb-2"><strong>OCO Limited</strong></p>
                <p className="mb-2">Email: <a href="mailto:enquiries@ocoiom.com" className="text-[#FF5007] hover:underline">enquiries@ocoiom.com</a></p>
                <p className="mb-2">Website: <a href="https://www.ocoiom.com" className="text-[#FF5007] hover:underline">www.ocoiom.com</a></p>
                <p className="mt-4">
                  <strong>Data Protection Officer:</strong><br />
                  OCO Limited<br />
                  Isle of Man
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">15. Complaints</h2>
              <p>
                If you are not satisfied with how we have handled your personal information, you have the right to lodge a complaint with the Isle of Man Information Commissioner:
              </p>
              <div className="mt-4 p-6 bg-gray-900 rounded-lg">
                <p className="mb-2"><strong>Isle of Man Information Commissioner</strong></p>
                <p className="mb-2">P.O. Box 69</p>
                <p className="mb-2">Douglas</p>
                <p className="mb-2">Isle of Man</p>
                <p className="mb-2">IM99 1EQ</p>
                <p>Website: <a href="https://www.inforights.im" className="text-[#FF5007] hover:underline" target="_blank" rel="noopener noreferrer">www.inforights.im</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

