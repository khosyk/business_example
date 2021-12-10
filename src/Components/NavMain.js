import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/dist/NavMain.css';

// icons
import Logo from '../images/tree.png'
import { FcMenu } from 'react-icons/fc';
export default function NavMain() {

  return (
    <>
      <div className="inner">
        <Link to="/">
          <div className='logo'>
            <img src={Logo}alt='dcodelab logo' />
            <h1>
              DCODELAB
            </h1>
          </div>
        </Link>
        <nav className="menu">
          <ul className="gnb">
            <li>
              <Link className='gnbLink' to="/about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link className='gnbLink' to="/members">
                MEMBERS
              </Link>
            </li>
            <li>
              <Link className='gnbLink' to="/youtube">
                YOUTUBE
              </Link>
            </li>
            <li>
              <Link className='gnbLink' to="/gallery">
                GALLERY
              </Link>
            </li>
            <li>
              <Link className='gnbLink' to="/contact">
                CONTACT
              </Link>
            </li>
            <li>
              <div className="btnMenu">
                <Link to="menu" >
                  <FcMenu />
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}