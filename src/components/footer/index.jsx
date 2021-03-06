/* eslint-disable max-len */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './footer.css';

const cx = classNames.bind(styles);

const urls = {
  site: 'http://adamgruber.github.io/mochawesome/',
  github: 'https://github.com/apiway
};

const Footer = () => {
  const copyrightYear = new Date().getFullYear();
  return (
    <footer className={ cx('component') }>
      <div className='container'>
        <p>
          &copy;{ copyrightYear }&nbsp;<a href={ urls.site } target='_blank' rel='noopener noreferrer'>apiway-report</a>
          &nbsp;was designed and built by&nbsp;
          <a href={ urls.github } target='_blank' rel='noopener noreferrer'>ApiWay</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
