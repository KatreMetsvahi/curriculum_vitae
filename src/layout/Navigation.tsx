import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import t from '../utils/translator';

const Navigation = () => {
  const [pageScrolled, setPageScrolled] = useState(false);

  const handleScroll = () => {
    setPageScrolled(window.scrollY !== 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cx('nav', { 'nav--scrolled': pageScrolled })}>
      <a
        className={'nav-link nav-link--cloud'}
        href={'#clouds'}
      >
        <i className={'fas fa-cloud nav-link__icon'}/>
        <span className={'nav-link__text'}>{ t('top') }</span>
      </a>

      <a
        className={'nav-link'}
        href={'#work'}
      >
        <i className={'fas fa-briefcase nav-link__icon'}/>
        <span className={'nav-link__text'}>{ t('work.menuItem') }</span>
      </a>

      <a
        className={'nav-link'}
        href={'#education'}
      >
        <i className={'fas fa-graduation-cap nav-link__icon'}/>
        <span className={'nav-link__text'}>{ t('education.menuItem') }</span>
      </a>

      <a
        className={'nav-link'}
        href={'#about-me'}
      >
        <i className={'fas fa-address-card nav-link__icon'}/>
        <span className={'nav-link__text'}>{ t('aboutMe.menuItem') }</span>
      </a>

      <a
        className={'nav-link'}
        href={'#contacts'}
      >
        <i className={'fas fa-envelope nav-link__icon'}/>
        <span className={'nav-link__text'}>{ t('contacts.menuItem') }</span>
      </a>
    </nav>
  )
};

export default Navigation;