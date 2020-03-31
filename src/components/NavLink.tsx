import React from 'react';
import cx from 'classnames';

type Props = {
  cloud?: boolean,
  href: string,
  faClass: string,
  text: string
}

const NavLink = ({ cloud = false, href, faClass, text }: Props) => (
  <a
    className={cx('nav-link', { 'nav-link--cloud': cloud })}
    href={href}
  >
    <i className={`nav-link__icon ${faClass}`}/>
    <span className={'nav-link__text'}>{ text }</span>
  </a>
);

export default NavLink;