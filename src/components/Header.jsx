import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
//import { useLocation } from 'react-router-dom/cjs/react-router-dom';

const Header = () => {
  //const loc = useLocation();

  //const array = loc.pathname.split('/');

  return (
    <nav className='purple darken-4'>
      <div className='nav-wrapper'>
        <div className='brand-logo'>
          <Link to='/' className='breadcrumb2'>
            Catalog
          </Link>
          {/* {array[1] === 'category' && (
            <>
              <Link to={'/category/' + array[2]} class='breadcrumb2'>
                {' > '}
                {array[2]}
              </Link>
            </>
          )} */}
        </div>

        <ul id='nav-mobile' className='right'>
          {/*hide-on-med-and-down*/}
          <li>
            <Link to='/about' rel='noreferrer'>
              About
            </Link>
          </li>
          <li>
            <Link to='/contacts' rel='noreferrer'>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
