import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import englishTranslation from 'assets/locale/en';
import spanishTranslation from 'assets/locale/es';

i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  // language resources
  resources: {
    en: {
      translation: englishTranslation,
    },
    es: {
      translation: spanishTranslation,
    },
  },
});

export default i18n;
