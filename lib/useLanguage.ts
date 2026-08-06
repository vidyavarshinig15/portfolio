"use client";

import { useState } from "react";
import { translations, type Language } from "./translations";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("en");

  const t = translations[language];

  return { language, setLanguage, t };
}
