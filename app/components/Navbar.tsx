"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useLanguage } from "@/lib/useLanguage";

export default function Navbar() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isBurgerAnimated, setIsBurgerAnimated] = useState(false);
  const pathname = usePathname();

  const isLegalPage = pathname !== "/";

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setIsBurgerAnimated(false);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
      setIsBurgerAnimated(true);
      setIsClosing(false);
    }
  };

  const handleLinkClick = () => {
    setIsClosing(true);
    setIsBurgerAnimated(false);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-3rem)] md:w-auto"
        aria-label="Navigation principale"
      >
        <div className="backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-gray-800/30 dark:border-white/30 rounded-full px-8 sm:px-12 shadow-lg">
          <div className="flex justify-between items-center h-14">
            <div className="flex-shrink-0">
              {isLegalPage ? (
                <Link
                  href="/"
                  className="flex items-center"
                  aria-label={t.nav.returnHomepage}
                >
                  <Logo className="h-8 w-auto" />
                </Link>
              ) : (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex items-center"
                  aria-label={t.nav.returnHomepage}
                >
                  <Logo className="h-8 w-auto" />
                </a>
              )}
            </div>

            <div className="hidden md:flex md:items-center ml-8">
              <ul className="flex items-baseline space-x-2">
                {isLegalPage ? (
                  <>
                    <Link
                      href="/"
                      className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group"
                    >
                      <li className="group overflow-hidden relative whitespace-nowrap">
                        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">
                          {t.nav.home}
                        </div>
                        <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                          {t.nav.home}
                        </div>
                      </li>
                    </Link>
                    <Link
                      href={`/#${t.sections.about}`}
                      className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group"
                    >
                      <li className="group overflow-hidden relative whitespace-nowrap">
                        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">
                          {t.nav.about}
                        </div>
                        <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                          {t.nav.about}
                        </div>
                      </li>
                    </Link>
                    <Link
                      href={`/#${t.sections.projects}`}
                      className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group"
                    >
                      <li className="group overflow-hidden relative whitespace-nowrap">
                        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">
                          {t.nav.projects}
                        </div>
                        <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                          {t.nav.projects}
                        </div>
                      </li>
                    </Link>
                    <Link
                      href={`/#${t.sections.contact}`}
                      className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group"
                    >
                      <li className="group overflow-hidden relative whitespace-nowrap">
                        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">
                          {t.nav.contact}
                        </div>
                        <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                          {t.nav.contact}
                        </div>
                      </li>
                    </Link>
                  </>
                ) : (
                  <>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group"
                    >
                      <li className="group overflow-hidden relative whitespace-nowrap">
                        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">
                          {t.nav.home}
                        </div>
                        <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                          {t.nav.home}
                        </div>
                      </li>
                    </a>
                    <a
                      href={`#${t.sections.about}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(`#${t.sections.about}`)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group"
                    >
                      <li className="group overflow-hidden relative whitespace-nowrap">
                        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">
                          {t.nav.about}
                        </div>
                        <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                          {t.nav.about}
                        </div>
                      </li>
                    </a>
                    <a
                      href={`#${t.sections.projects}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(`#${t.sections.projects}`)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group"
                    >
                      <li className="group overflow-hidden relative whitespace-nowrap">
                        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">
                          {t.nav.projects}
                        </div>
                        <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                          {t.nav.projects}
                        </div>
                      </li>
                    </a>
                    <a
                      href={`#${t.sections.contact}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(`#${t.sections.contact}`)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="relative overflow-hidden px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 group"
                    >
                      <li className="group overflow-hidden relative whitespace-nowrap">
                        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">
                          {t.nav.contact}
                        </div>
                        <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                          {t.nav.contact}
                        </div>
                      </li>
                    </a>
                  </>
                )}
              </ul>
              <div className="ml-8">
                <ModeToggle />
              </div>
            </div>

            <div className="md:hidden ml-4 flex items-center gap-2">
              <ModeToggle />
              <button
                onClick={handleMenuToggle}
                className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white focus:outline-none transition-all relative w-9 h-9 flex items-center justify-center"
                aria-label={
                  isMenuOpen || isClosing
                    ? t.nav.burger.closeMenu
                    : t.nav.burger.openMenu
                }
                aria-expanded={isMenuOpen || isClosing}
              >
                <span className="sr-only">
                  {isMenuOpen || isClosing
                    ? t.nav.burger.close
                    : t.nav.burger.open}{" "}
                  {t.nav.burger.menu}
                </span>
                <div className="flex flex-col justify-between w-6 h-5">
                  <span
                    className={`block h-[2px] w-full bg-current transform transition-all duration-300 ease-in-out ${
                      isBurgerAnimated
                        ? "rotate-45 translate-y-[9px]"
                        : "rotate-0 translate-y-0"
                    }`}
                  />
                  <span
                    className={`block h-[2px] w-full bg-current transition-all duration-300 ease-in-out ${
                      isBurgerAnimated
                        ? "opacity-0 translate-x-6"
                        : "opacity-100 translate-x-0"
                    }`}
                  />
                  <span
                    className={`block h-[2px] w-full bg-current transform transition-all duration-300 ease-in-out ${
                      isBurgerAnimated
                        ? "-rotate-45 -translate-y-[9px]"
                        : "rotate-0 translate-y-0"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 z-40 bg-gray-50 dark:bg-[#101010] ${
            isClosing ? "animate-fade-out" : "animate-fade-in"
          }`}
          role="menu"
          aria-label="Menu mobile"
        >
          <div
            className={`flex flex-col items-center justify-center h-screen ${
              isClosing ? "animate-slide-down" : "animate-slide-up"
            }`}
          >
            <ul className="space-y-8 text-center">
              {isLegalPage ? (
                <>
                  <li role="none" className="animate-fade-in-delay-1">
                    <Link
                      href="/"
                      className="text-3xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110 inline-block"
                      role="menuitem"
                    >
                      {t.nav.home}
                    </Link>
                  </li>
                  <li role="none" className="animate-fade-in-delay-2">
                    <Link
                      href={`/#${t.sections.about}`}
                      className="text-3xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110 inline-block"
                      role="menuitem"
                    >
                      {t.nav.about}
                    </Link>
                  </li>
                  <li role="none" className="animate-fade-in-delay-3">
                    <Link
                      href={`/#${t.sections.projects}`}
                      className="text-3xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110 inline-block"
                      role="menuitem"
                    >
                      {t.nav.projects}
                    </Link>
                  </li>
                  <li role="none" className="animate-fade-in-delay-4">
                    <Link
                      href={`/#${t.sections.contact}`}
                      className="text-3xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110 inline-block"
                      role="menuitem"
                    >
                      {t.nav.contact}
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li role="none" className="animate-fade-in-delay-1">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        handleLinkClick();
                      }}
                      className="text-3xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110 inline-block"
                      role="menuitem"
                    >
                      {t.nav.home}
                    </a>
                  </li>
                  <li role="none" className="animate-fade-in-delay-2">
                    <a
                      href={`#${t.sections.about}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(`#${t.sections.about}`)
                          ?.scrollIntoView({ behavior: "smooth" });
                        handleLinkClick();
                      }}
                      className="text-3xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110 inline-block"
                      role="menuitem"
                    >
                      {t.nav.about}
                    </a>
                  </li>
                  <li role="none" className="animate-fade-in-delay-3">
                    <a
                      href={`#${t.sections.projects}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(`#${t.sections.projects}`)
                          ?.scrollIntoView({ behavior: "smooth" });
                        handleLinkClick();
                      }}
                      className="text-3xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110 inline-block"
                      role="menuitem"
                    >
                      {t.nav.projects}
                    </a>
                  </li>
                  <li role="none" className="animate-fade-in-delay-4">
                    <a
                      href={`#${t.sections.contact}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(`#${t.sections.contact}`)
                          ?.scrollIntoView({ behavior: "smooth" });
                        handleLinkClick();
                      }}
                      className="text-3xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110 inline-block"
                      role="menuitem"
                    >
                      {t.nav.contact}
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
