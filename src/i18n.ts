import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './static/translations/en.json';
import et from './static/translations/et.json';

const resources = {
  en: {
    translation: en
  },
  et: {
    translation: et
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'et',
    keySeparator: '.',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;