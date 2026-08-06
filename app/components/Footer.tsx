"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/useLanguage";

export default function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isLegalPage = pathname !== "/";

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-750">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-[2rem] font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">
              Vidyavarshini G
            </h3>
            <p className="text-gray-600 dark:text-gray-400 md:pr-5">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">
              {t.footer.navigation}
            </h3>
            <ul className="space-y-2">
              {isLegalPage ? (
                <>
                  <li>
                    <Link
                      href="/"
                      className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {t.nav.home}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/#${t.sections.about}`}
                      className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {t.nav.about}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/#${t.sections.projects}`}
                      className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {t.nav.projects}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/#${t.sections.contact}`}
                      className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {t.nav.contact}
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {t.nav.home}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`#${t.sections.about}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(`#${t.sections.about}`)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {t.nav.about}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`#${t.sections.projects}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(`#${t.sections.projects}`)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {t.nav.projects}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`#${t.sections.contact}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(`#${t.sections.contact}`)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {t.nav.contact}
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">
              {t.footer.contact.title}
            </h3>

            <div className="mb-3 sm:mb-4">
              <a
                href="mailto:vidyavarshinig15@gmail.com"
                className="flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                vidyavarshinig15@gmail.com
              </a>
            </div>

            <div className="mb-3 sm:mb-4">
              <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Bangalore, India
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                {t.footer.contact.follow}
              </p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/vidyavarshini1512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex items-center justify-center text-gray-900 dark:text-white hover:opacity-60 transition-opacity duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/vidyavarshinig15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex items-center justify-center text-gray-900 dark:text-white hover:opacity-60 transition-opacity duration-300"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-750 mb-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            © {new Date().getFullYear()} Vidyavarshini G. {t.footer.rights}
          </p>
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/mentions-legales"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {t.footer.legal}
            </Link>
            <span className="text-gray-700 dark:text-gray-300">•</span>
            <Link
              href="/politique-confidentialite"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
