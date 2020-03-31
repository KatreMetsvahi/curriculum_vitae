import React, { useEffect, useState } from 'react';
import { throttle } from 'throttle-debounce';
import cx from 'classnames';
import NavLink from '../components/NavLink';
import NavLanguageSelect from '../components/NavLanguageSelect';
import { translator as t } from '../utils/translationUtils';

const Nav = () => {
  const [pageScrolled, setPageScrolled] = useState(false);
  const [cloudsInView, setCloudsInView] = useState(false);

  const work = document.querySelector('#work');

  const handleScroll = throttle(300, () => {
    setPageScrolled(window.scrollY !== 0);

    if (work) {
      setCloudsInView(work.getBoundingClientRect().top > 1);
    }
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    }
  }, [handleScroll]);

  return (
    <nav className={cx('nav', { 'nav--scrolled': pageScrolled, 'nav--light': !cloudsInView })}>
      <NavLink
        cloud
        href={'#clouds'}
        faClass={'fas fa-cloud'}
        text={t('top')}
      />

      <NavLink
        href={'#work'}
        faClass={'fas fa-briefcase'}
        text={t('work.menuItem')}
      />

      <NavLink
        href={'#education'}
        faClass={'fas fa-graduation-cap'}
        text={t('education.menuItem')}
      />

      <NavLink
        href={'#about-me'}
        faClass={'fas fa-address-card'}
        text={t('aboutMe.menuItem')}
      />

      <NavLink
        href={'#contacts'}
        faClass={'fas fa-envelope'}
        text={t('contacts.menuItem')}
      />

      <NavLanguageSelect/>
    </nav>
  )
};

export default Nav;