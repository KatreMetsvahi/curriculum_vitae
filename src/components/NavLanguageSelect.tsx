import React from 'react';
import { Language } from '../i18n';
import { changeLanguage, getLanguage, translator as t } from '../utils/translationUtils';

const NavLanguageSelect = () => {
  const currentLanguage = getLanguage();

  const createLanguageButton = (language: Language, text: string) => (
    <div className={'nav-link nav-link--language'}>
      <button className={'nav-link__button'}
        onClick={() => changeLanguage(language)}
      >
        { text }
      </button>
    </div>
  );

  if (currentLanguage === Language.English) {
    return createLanguageButton(Language.Estonian, t('estonian'));
  }

  return createLanguageButton(Language.English, t('english'));
};

export default NavLanguageSelect;