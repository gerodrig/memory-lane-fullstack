import { useEffect, useState } from 'react';
import Image from 'next/image';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import * as BsNavbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import { Topbar } from './Topbar';

import styles from '../../styles/Navbar.module.css';
import { ChevronDown, List } from 'react-bootstrap-icons';

export const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState('');
  const [mobileNav, setMobileNav] = useState(`${styles.header}`);

  const [servicesDropdownOpen, setServicesDropDownOpen] = useState(true);
  const [caregiversDropdownOpen, setCareGiverDropDownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropDownOpen] = useState(false);
  const [getInvolvedDopdownOpen, setGetInvolvedDropDownOpen] = useState(false);
  const [moreDropDownOpen, setMoreDropDownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setVisible(false);
        setScrolled('fixed-top');
      } else {
        setVisible(true);
        setScrolled('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    if (mobileNav === `${styles.header}`) {
      setMobileNav(`${styles['navbar-mobile']} ${styles['bi-x']}`);
      setVisible(false);
    } else {
      setMobileNav(`${styles.header}`);
      setVisible(true);
    }
  };

  const toogleDropdowns = (dropdown: string) => {
    switch (dropdown) {
      case 'services':
        setServicesDropDownOpen(!servicesDropdownOpen);
        break;
      case 'caregivers':
        setCareGiverDropDownOpen(!caregiversDropdownOpen);
        break;
      case 'about':
        setAboutDropDownOpen(!aboutDropdownOpen);
        break;
      case 'get-involved':
        setGetInvolvedDropDownOpen(!getInvolvedDopdownOpen);
        break;
      case 'more':
        setMoreDropDownOpen(!moreDropDownOpen);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Topbar hide={!visible} />
      <header id="header" className={`${mobileNav} ${scrolled}`}>
        <div className="container d-flex align-items-center">
          {mobileNav === `${styles.header}` && (
            <a href="#" className="logo me-auto">
              <Image
                src="/assets/images/logo.png"
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
                alt=""
              />
            </a>
          )}
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}

          <nav id="navbar" className={`${styles.navbar} order-last order-lg-0`}>
            <ul>
              <li>
                <a className="nav-link scrollto" href="#hero">
                  Home
                </a>
              </li>
              <li className={`${styles.dropdown}`} onClick={() => toogleDropdowns('services')}>
                <a href="#services">
                  <span>Services</span> <ChevronDown className="ms-1"/>
                </a>
                <ul
                  className={
                    servicesDropdownOpen ? styles['dropdown-active'] : ''
                  }>
                  <li onClick={toggleMobileNav}>
                    <a href="#living-with-us">Living With Us</a>
                  </li>
                  <li onClick={toggleMobileNav}>
                    <a href="#day-program">Day Programs</a>
                  </li>
                  <li onClick={toggleMobileNav}>
                    <a href="#respite-care">Caregiver Support</a>
                  </li>
                </ul>
              </li>
              <li className={`${styles.dropdown}`} onClick={() => toogleDropdowns('caregivers')} >
                <a href="#">
                  <span>Caregiver Support</span>{' '}
                  <ChevronDown className="ms-1" />
                </a>
                <ul className={
                    caregiversDropdownOpen ? styles['dropdown-active'] : ''
                  }>
                  <li onClick={toggleMobileNav}>
                    <a href="#">Caregiver Support group</a>
                  </li>
                  <li onClick={toggleMobileNav}>
                    <a href="#">Resources</a>
                  </li>
                  <li onClick={toggleMobileNav}>
                    <a href="#">Dementia Blog</a>
                  </li>
                </ul>
              </li>
              <li className={`${styles.dropdown}`} onClick={() => toogleDropdowns('about')}>
                <a href="#">
                  <span>About</span> <ChevronDown className="ms-1"/>{' '}
                </a>
                <ul className={
                    aboutDropdownOpen ? styles['dropdown-active'] : ''
                  }>
                  <li onClick={toggleMobileNav}>
                    <a href="#">Mission</a>
                  </li>
                  <li onClick={toggleMobileNav}>
                    <a href="#gallery">Gallery</a>
                  </li>
                  <li onClick={toggleMobileNav}>
                    <a href="#">Testimonials</a>
                  </li>
                  <li onClick={toggleMobileNav}>
                    <a href="#">Our Team</a>
                  </li>
                </ul>
              </li>
              <li className={`${styles.dropdown}`} onClick={() => toogleDropdowns('get-involved')}>
                <a href="#">
                  <span>Get Involved</span>
                  <ChevronDown className="ms-1" />
                </a>
                <ul className={
                    getInvolvedDopdownOpen ? styles['dropdown-active'] : ''
                  }>
                  <li onClick={toggleMobileNav}>
                    <a href="#">Volunteers</a>
                  </li>
                  <li onClick={toggleMobileNav}>
                    <a href="#">Board of Directors</a>
                  </li>
                </ul>
              </li>
              <li className={`${styles.dropdown}`} onClick={() => toogleDropdowns('more')}>
                <a href="#">
                  <span>More</span>
                  <ChevronDown className="ms-1"  />
                </a>
                <ul className={
                    moreDropDownOpen ? styles['dropdown-active'] : ''
                  }>
                  <li onClick={toggleMobileNav}>
                    <a href="#">Partner Page</a>
                  </li>
                  <li onClick={toggleMobileNav}>
                    <a href="#">Contact Us</a>
                  </li>
                  <li onClick={toggleMobileNav}>
                    <a href="#">Newsletter Sign Up</a>
                  </li>
                </ul>
              </li>
            </ul>
            <List
              className={`${styles['mobile-nav-toggle']} ${styles['bi-x']}`}
              onClick={toggleMobileNav}
            />
          </nav>
          {/* <!-- .navbar --> */}

          {mobileNav === `${styles.header}` && (
            <a
              href="#appointment"
              className={`${styles['appointment-btn']} scrollto`}>
              <span className="d-none d-md-inline">Contact</span> Us
            </a>
          )}
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
};
