'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 📦 Centralise les langues ici
import fr from './fr.json';
import en from './en.json';
import es from './es.json'; // ← si tu ajoutes plus tard
import de from './de.json';

const resources = {
  fr: { translation: fr },
  en: { translation: en },
  es: { translation: es }, // facultatif
  de: { translation: de }  // facultatif
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',          // langue par défaut
    fallbackLng: 'en',  // langue de secours
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
