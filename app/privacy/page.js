import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Propel',
  description: 'Propel Privacy Policy - How we collect, use, and protect your personal data in accordance with data protection regulations.',
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
              <strong>Last Updated:</strong> December 2025
            </p>

            <section>
              <p className="mb-4">
                Propel ("we", "us", "our") is committed to the principles of lawful, fair and transparent processing of personal data, and will only use your personal data in order to administer the products or services you are asking us to provide to you.
              </p>
              <p>
                Propel is a 'Data Controller' as recognised by current Data Protection legislation. Information on our processing activities and the rights that are provided to you under Data Protection legislation are noted below.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">What Data Do We Collect?</h2>
              <p className="mb-4">
                We only collect personal data that is essential to provide the services you have requested and to comply with regulatory requirements. The data we collect may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name and contact details (email address, telephone number);</li>
                <li>Business or organisation name;</li>
                <li>Project requirements and communications;</li>
                <li>Website usage data through analytics;</li>
                <li>Cookie preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">Why Is Your Data Processed?</h2>
              <p className="mb-4">We collect the above personal data for the purpose of:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responding to enquiries and project requests;</li>
                <li>Providing and managing our services;</li>
                <li>Communicating with you about projects;</li>
                <li>Improving our website and services;</li>
                <li>Compliance with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">Processing Information Fairly and Lawfully</h2>
              <p className="mb-4">Propel processes your personal data only where:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We have a legitimate interest to do so; or</li>
                <li>A contract has been entered into; or</li>
                <li>You have given your explicit consent; or</li>
                <li>We are required to by law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">Data Storage and Security</h2>
              <p className="mb-4">
                Your data is stored securely using industry-standard security measures. We use cloud-based systems for data storage with appropriate security controls in place.
              </p>
              <p>
                We may share your data with third-party service providers who assist us in delivering our services (such as email providers or hosting services), but only to the extent necessary to provide those services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">Retaining Information</h2>
              <p>
                We will only retain your personal information for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Data will be securely deleted when no longer needed.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">Your Rights</h2>
              <p className="mb-4">
                Under Data Protection legislation, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Access the data we hold about you;</li>
                <li>Request correction of inaccurate data;</li>
                <li>Request deletion of your data;</li>
                <li>Object to or restrict processing;</li>
                <li>Request data portability.</li>
              </ul>
              <p>
                To exercise these rights, please contact us at:{' '}
                <a href="mailto:enquiries@propel.im" className="text-[#FF5007] hover:underline">enquiries@propel.im</a>
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience. For detailed information, please see our{' '}
                <a href="/cookies" className="text-[#FF5007] hover:underline">Cookie Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4 mt-8">Contact Us</h2>
              <p className="mb-4">If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
              <div className="mt-4 p-6 bg-gray-900 rounded-lg">
                <p className="mb-2"><strong>Propel</strong></p>
                <p className="mb-2">
                  Email: <a href="mailto:enquiries@propel.im" className="text-[#FF5007] hover:underline">enquiries@propel.im</a>
                </p>
                <p>Website: <a href="https://www.propel.im" className="text-[#FF5007] hover:underline">www.propel.im</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
