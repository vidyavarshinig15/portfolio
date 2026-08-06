import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Vidyavarshini G",
  description:
    "Privacy policy and personal data processing for Vidyavarshini G's website.",
};

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#151515] flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-25 max-w-4xl flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-foreground">
          Privacy Policy
        </h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Last updated: October 21, 2025
          </p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Collected Data
            </h2>
            <p>
              When you use the contact form, the following information may be collected:
            </p>
            <ul className="list-none pl-2 mt-2 space-y-2">
              <li className="before:content-['-'] before:mr-2">
                First and last name
              </li>
              <li className="before:content-['-'] before:mr-2">
                Email address
              </li>
              <li className="before:content-['-'] before:mr-2">
                Message sent through the form
              </li>
            </ul>
            <p className="mt-4">
              The site also uses Vercel Analytics, a service that collects browsing data in anonymized form (visit statistics, pages viewed, loading times, etc.). This data does not directly identify the user.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Purpose of Collection
            </h2>
            <p>
              The data collected via the form is used only for:
            </p>
            <ul className="list-none pl-2 mt-2 space-y-2">
              <li className="before:content-['-'] before:mr-2">
                Responding to requests sent by the user.
              </li>
              <li className="before:content-['-'] before:mr-2">
                Following up on exchanges if necessary.
              </li>
            </ul>
            <p className="mt-4">
              Data from analytics tools is used only to improve the site's functionality and user experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Legal Basis for Processing
            </h2>
            <p>The data processing is based on:</p>
            <ul className="list-none pl-2 mt-2 space-y-2">
              <li className="before:content-['-'] before:mr-2">
                The legitimate interest of the site publisher to respond to requests and ensure follow-up.
              </li>
              <li className="before:content-['-'] before:mr-2">
                The user's explicit consent for sending information via the form.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Retention Period
            </h2>
            <ul className="list-none pl-2 mt-2 space-y-2">
              <li className="before:content-['-'] before:mr-2">
                Contact form data: retained for a maximum of 3 years from the last exchange.
              </li>
              <li className="before:content-['-'] before:mr-2">
                Anonymized statistics data (Vercel Analytics): retained according to Vercel Inc.'s retention policy.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Data Recipients
            </h2>
            <p>
              The data is intended only for the site publisher, Vidyavarshini G, and is never transmitted or sold to third parties. Some anonymized browsing data may be processed by Vercel Inc. as host and analytics provider.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              6. User Rights
            </h2>
            <p>
              In accordance with the General Data Protection Regulation (GDPR), you have the following rights:
            </p>
            <ul className="list-none pl-2 mt-2 space-y-2">
              <li className="before:content-['-'] before:mr-2">
                Right to access your data
              </li>
              <li className="before:content-['-'] before:mr-2">
                Right to rectification
              </li>
              <li className="before:content-['-'] before:mr-2">
                Right to erasure ("right to be forgotten")
              </li>
              <li className="before:content-['-'] before:mr-2">
                Right to object
              </li>
              <li className="before:content-['-'] before:mr-2">
                Right to restriction of processing
              </li>
              <li className="before:content-['-'] before:mr-2">
                Right to data portability (if applicable)
              </li>
            </ul>
            <p className="mt-4">
              To exercise your rights, you can send a request to:{" "}
              <a
                href="mailto:vidyavarshinig15@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors"
              >
                vidyavarshinig15@gmail.com
              </a>
              . If you believe, after contacting the publisher, that your rights are not respected, you can file a complaint with the CNIL ({""}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors"
              >
                www.cnil.fr
              </a>
              )
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. Data Security
            </h2>
            <p>
              The publisher implements appropriate technical and organizational measures to protect personal data against loss, unauthorized access, disclosure, or alteration.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              8. Policy Changes
            </h2>
            <p>
              This privacy policy may be updated at any time to adapt to legal or technical developments. The date of the last update is shown at the top of the page.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
