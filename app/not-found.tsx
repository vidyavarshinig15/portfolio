"use client";

import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/theme-provider";
import LazyBeams from "./components/LazyBeams";

export default function NotFound() {
  return (
    <main>
      <ThemeProvider>
        <div className="relative h-screen">
          <div className="absolute inset-0 w-full h-full -z-10">
            <Suspense
              fallback={
                <div className="absolute inset-0 w-full h-full bg-[#dddddd] dark:bg-[#070707]" />
              }
            >
              <LazyBeams
                beamWidth={3}
                beamHeight={25}
                beamNumber={10}
                speed={2}
                noiseIntensity={2}
                scale={0.2}
                rotation={30}
              />
            </Suspense>
          </div>

          <Navbar />

          <div className="absolute bottom-8 left-8 flex flex-col gap-3">
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
            <a
              href="mailto:vidyavarshinig15@gmail.com"
              className="w-6 h-6 flex items-center justify-center text-gray-900 dark:text-white hover:opacity-60 transition-opacity duration-300"
              aria-label="Email"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                className="svg-inline--fa fa-envelope w-5 h-5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                ></path>
              </svg>
            </a>
          </div>

          <div
            className="flex h-full flex-col items-center justify-center p-24"
            role="main"
            aria-label="Contenu principal"
          >
            <div className="relative mb-8">
              <svg
                className="absolute top-10 left-1/2 -translate-x-1/2 -z-10 h-[9rem] md:hidden"
                viewBox="0 0 400 150"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="strokeGradient404MobileLight"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="60%" stopColor="#191919" stopOpacity="0" />
                    <stop offset="100%" stopColor="#191919" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient
                    id="strokeGradient404MobileDark"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <style>{`
                  .text-404-mobile { stroke: url(#strokeGradient404MobileLight); }
                  @media (prefers-color-scheme: dark) {
                    .dark .text-404-mobile { stroke: url(#strokeGradient404MobileDark); }
                  }
                  .dark .text-404-mobile { stroke: url(#strokeGradient404MobileDark); }
                `}</style>
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="text-404-mobile font-bold"
                  fill="transparent"
                  strokeWidth="2"
                  style={{ fontSize: "133px", fontFamily: "inherit" }}
                >
                  404
                </text>
              </svg>
              <svg
                className="absolute top-18 left-1/2 -translate-x-1/2 -z-10 h-[12rem] hidden md:block lg:hidden"
                viewBox="0 0 500 150"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="strokeGradient404Tablet"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="60%"
                      stopColor="currentColor"
                      stopOpacity="0"
                    />
                    <stop
                      offset="100%"
                      stopColor="currentColor"
                      stopOpacity="1"
                    />
                  </linearGradient>
                </defs>
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="font-bold fill-transparent"
                  stroke="url(#strokeGradient404Tablet)"
                  strokeWidth="2"
                  style={{ fontSize: "149px", fontFamily: "inherit" }}
                >
                  404
                </text>
              </svg>
              <svg
                className="absolute top-24 left-1/2 -translate-x-1/2 -z-10 h-[16rem] hidden lg:block"
                viewBox="0 0 600 150"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="strokeGradient404Desktop"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="60%"
                      stopColor="currentColor"
                      stopOpacity="0"
                    />
                    <stop
                      offset="100%"
                      stopColor="currentColor"
                      stopOpacity="1"
                    />
                  </linearGradient>
                </defs>
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="font-bold fill-transparent"
                  stroke="url(#strokeGradient404Desktop)"
                  strokeWidth="2"
                  style={{ fontSize: "149px", fontFamily: "inherit" }}
                >
                  404
                </text>
              </svg>
              <h1 className="text-9xl md:text-[12rem] lg:text-[16rem] font-bold text-center text-gray-900 dark:text-white relative z-10">
                404
              </h1>
            </div>
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </main>
  );
}
