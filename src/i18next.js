/**
 * Created and Added: Gaurav Kapade
 * Purpose: to set up translator package and expose it to application
 *
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import translationEN from '../src/translations/en.json';
import translationES from '../src/translations/es.json';

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

const options = {
  // order and from where user language should be detected
  order: ['querystring', 'navigator'],
  // keys or params to lookup language from
  lookupQuerystring: 'locale',
};

void i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // lng: "en", to set default language/ Not needed as we are detecting from browser.
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false,
    },
    // whitelist: ['el', 'en'],
    nonExplicitWhitelist: true,
    load: 'languageOnly',
    keySeparator: false, // we do not use keys in form messages.welcome
    supportedLngs: ['en', 'es'],
    detection: options,
    fallbackLng: 'en', //when specified/detected language translations are not available.
  });

//* call without param to use language detector
// i18n.changeLanguage();
export default i18n;
