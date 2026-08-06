"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import styled from "styled-components";
import { useLanguage } from "@/lib/useLanguage";

const StyledWrapper = styled.div`
  .themeToggle {
    color: currentColor;
    width: 1.5rem;
    height: 1.5rem;
  }

  .st-sunMoonThemeToggleBtn {
    position: relative;
    cursor: pointer;
    display: block;
    transition: transform 0.3s ease;
  }

  .st-sunMoonThemeToggleBtn:hover {
    transform: rotate(-15deg);
  }

  .st-sunMoonThemeToggleBtn .themeToggleInput {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: pointer;
  }

  .st-sunMoonThemeToggleBtn svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.4s ease;
    transform: rotate(40deg);
  }

  .st-sunMoonThemeToggleBtn svg .sunMoon {
    transform-origin: center center;
    transition: transform 0.4s ease;
    transform: scale(1);
  }

  .st-sunMoonThemeToggleBtn svg .sunRay {
    transform-origin: center center;
    transform: scale(0);
  }

  .st-sunMoonThemeToggleBtn svg mask > circle {
    transition: transform 0.64s cubic-bezier(0.41, 0.64, 0.32, 1.575);
    transform: translate(0px, 0px);
  }

  .st-sunMoonThemeToggleBtn svg .sunRay2 {
    animation-delay: 0.05s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay3 {
    animation-delay: 0.1s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay4 {
    animation-delay: 0.17s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay5 {
    animation-delay: 0.25s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay6 {
    animation-delay: 0.29s !important;
  }

  .st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg {
    transform: rotate(90deg);
  }
  .st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg mask > circle {
    transform: translate(16px, -3px);
  }
  .st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg .sunMoon {
    transform: scale(0.55);
  }
  .st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg .sunRay {
    animation: showRay1832 0.4s ease 0s 1 forwards;
  }

  @keyframes showRay1832 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const uniqueId = React.useId();
  const { t } = useLanguage();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => void;
    };
    if (doc.startViewTransition) {
      doc.startViewTransition(() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      });
    } else {
      document.body.setAttribute("transition-style", "in:custom:circle-swoop");

      setTimeout(() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }, 50);

      setTimeout(() => {
        document.body.removeAttribute("transition-style");
      }, 500);
    }
  };

  if (!mounted) {
    return (
      <StyledWrapper>
        <label
          htmlFor={`themeToggle-${uniqueId}`}
          className="themeToggle st-sunMoonThemeToggleBtn"
        >
          <input
            type="checkbox"
            id={`themeToggle-${uniqueId}`}
            className="themeToggleInput"
            checked={false}
            disabled
            readOnly
            aria-label={t.nav.modeToggle}
          />
          <svg
            width={28}
            height={28}
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="none"
          >
            <mask id={`moon-mask-${uniqueId}`}>
              <rect x={0} y={0} width={20} height={20} fill="white" />
              <circle cx={11} cy={3} r={8} fill="black" />
            </mask>
            <circle
              className="sunMoon"
              cx={10}
              cy={10}
              r={8}
              mask={`url(#moon-mask-${uniqueId})`}
            />
            <g>
              <circle className="sunRay sunRay1" cx={18} cy={10} r="1.5" />
              <circle className="sunRay sunRay2" cx={14} cy="16.928" r="1.5" />
              <circle className="sunRay sunRay3" cx={6} cy="16.928" r="1.5" />
              <circle className="sunRay sunRay4" cx={2} cy={10} r="1.5" />
              <circle className="sunRay sunRay5" cx={6} cy="3.1718" r="1.5" />
              <circle className="sunRay sunRay6" cx={14} cy="3.1718" r="1.5" />
            </g>
          </svg>
        </label>
      </StyledWrapper>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <StyledWrapper>
      <label
        htmlFor={`themeToggle-${uniqueId}`}
        className="themeToggle st-sunMoonThemeToggleBtn"
      >
        <input
          type="checkbox"
          id={`themeToggle-${uniqueId}`}
          className="themeToggleInput"
          checked={isDark || false}
          onChange={toggleTheme}
          aria-label="Basculer entre le thème clair et sombre"
        />
        <svg
          width={28}
          height={28}
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="none"
        >
          <mask id={`moon-mask-${uniqueId}`}>
            <rect x={0} y={0} width={20} height={20} fill="white" />
            <circle cx={11} cy={3} r={8} fill="black" />
          </mask>
          <circle
            className="sunMoon"
            cx={10}
            cy={10}
            r={8}
            mask={`url(#moon-mask-${uniqueId})`}
          />
          <g>
            <circle className="sunRay sunRay1" cx={18} cy={10} r="1.5" />
            <circle className="sunRay sunRay2" cx={14} cy="16.928" r="1.5" />
            <circle className="sunRay sunRay3" cx={6} cy="16.928" r="1.5" />
            <circle className="sunRay sunRay4" cx={2} cy={10} r="1.5" />
            <circle className="sunRay sunRay5" cx={6} cy="3.1718" r="1.5" />
            <circle className="sunRay sunRay6" cx={14} cy="3.1718" r="1.5" />
          </g>
        </svg>
      </label>
    </StyledWrapper>
  );
}
