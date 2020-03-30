// Icons from https://konpa.github.io/devicon/

import React from 'react';

import angular from '../static/images/angularjs-original.svg';
import gimp from '../static/images/gimp-original.svg'
import gulp from '../static/images/gulp-plain.svg';
import inkscape from '../static/images/inkscape-original.svg';
import javascript from '../static/images/javascript-original.svg';
import reaalkool from '../static/images/0_1_Reaalkool_logo.svg';
import react from '../static/images/react-original.svg';
import sass from '../static/images/sass-original.svg';
import taltech from '../static/images/TalTech_Gradient.png';
import typescript from '../static/images/typescript-original.svg';
import vuejs from '../static/images/vuejs-original.svg';
import webpack from '../static/images/webpack-original.svg';
import wordpress from '../static/images/wordpress-original.svg';

enum Icon {
  Angular = 'Angular',
  GIMP = 'GIMP',
  Gulp = 'Gulp',
  Inkscape = 'Inkscape',
  JavaScript = 'JavaScript',
  React = 'React',
  Sass = 'Sass',
  TypeScript = 'TypeScript',
  VueJS = 'Vue.js',
  Webpack = 'Webpack',
  WordPress = 'WordPress'
}

enum Logo {
  Reaalkool = 'Reaalkool',
  TalTech = 'TalTech'
}

const createIcon = (src: string, title: string) => (
  <img
    alt={`${title} logo`}
    className={'icon'}
    key={title}
    src={src}
    title={title}
  />
);

export const getIcon = (icon: string) => {
  switch (icon) {
    case Icon.Angular:
      return createIcon(angular, 'Angular');
    case Icon.GIMP:
      return createIcon(gimp, 'GIMP');
    case Icon.Gulp:
      return createIcon(gulp, 'Gulp');
    case Icon.Inkscape:
      return createIcon(inkscape, 'Inkscape');
    case Icon.JavaScript:
      return createIcon(javascript,' JavaScript');
    case Icon.React:
      return createIcon(react, 'React');
    case Icon.Sass:
      return createIcon(sass, 'Sass');
    case Icon.TypeScript:
      return createIcon(typescript, 'TypeScript');
    case Icon.VueJS:
      return createIcon(vuejs, 'Vue.js');
    case Icon.Webpack:
      return createIcon(webpack, 'Webpack');
    case Icon.WordPress:
      return createIcon(wordpress, 'WordPress');
    default:
      throw new Error(`Icon ${icon} not found`);
  }
};

const createLogo = (src: string, title: string) => (
  <img
    alt={`${title} logo`}
    className={'logo'}
    src={src}
    title={title}
  />
);

export const getLogo = (logo: string) => {
  switch (logo) {
    case Logo.Reaalkool:
      return createLogo(reaalkool, 'Tallinna Reaalkool');
    case Logo.TalTech:
      return createLogo(taltech, 'TalTech');
    default:
      throw new Error(`Logo ${logo} not found`);
  }
};