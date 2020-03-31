import 'core-js/features/url-search-params';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './static/translations/en.json';
import et from './static/translations/et.json';

export enum Language {
  English = 'en',
  Estonian = 'et'
}

const resources = {
  en: {
    translation: en
  },
  et: {
    translation: et
  }
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const lang = urlParams.get('lang');

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: lang || Language.Estonian,
    fallbackLng: Language.Estonian,
    keySeparator: '.',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;