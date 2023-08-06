import React from 'react';

const Footer = () => {
  return (
    <footer className='page-footer  blue-grey'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()}{' '}
          <a
            href='https://github.com/mdbm-code/'
            target='_blank'
            rel='noreferrer'
          >
            mdbm
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
