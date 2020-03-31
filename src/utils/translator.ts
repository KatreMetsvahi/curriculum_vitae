import i18next from 'i18next';

const translator = (key: string) =>
  // Soft hyphen
  i18next.t(key).replace(/&shy;/gi, () => '\u00AD');

export default translator;