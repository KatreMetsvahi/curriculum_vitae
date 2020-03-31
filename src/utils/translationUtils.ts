import i18next from 'i18next';
import i18n, { Language } from '../i18n';

export const translator = (key: string) =>
  // Soft hyphen
  i18next.t(key).replace(/&shy;/gi, () => '\u00AD');

export const getLanguage = () => i18n.language;

export const changeLanguage = (language: Language) => {
  i18n.changeLanguage(language);
};