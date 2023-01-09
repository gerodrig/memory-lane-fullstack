import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, List } from 'react-bootstrap-icons';

import { Topbar } from './Topbar';

import styles from '@styles/Navbar.module.css';

export const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState('');
  const [mobileNav, setMobileNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

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
        setScrolled(`${styles['header-scrolled']} fixed-top`);
      } else {
        setVisible(true);
        setScrolled('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    //check if window width is  less than 992px
    if (width < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const toggleMobileNav = () => {
    if (!isMobile) return;

    if (mobileNav) {
      setMobileNav(false);
      setVisible(false);
    } else {
      setMobileNav(true);
      setVisible(true);
    }

    if (window.scrollY < 100) {
      setVisible(true);
    }
  };

  const toogleDropdowns = (dropdown: string) => {
    if (!mobileNav) return;

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
      <header
        id="header"
        className={`${
          mobileNav
            ? `${styles['navbar-mobile']} ${styles['bi-x']}`
            : styles.header
        } ${scrolled}`}>
        <div className="container d-flex align-items-center">
          {!mobileNav && (
            <Link href="/" className="logo me-auto">
              <Image
                src="/assets/images/logo.png"
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
                alt=""
              />
            </Link>
          )}
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}

          <nav id="navbar" className={`${styles.navbar} order-last order-lg-0`}>
            <ul>
              <li onClick={toggleMobileNav}>
                <Link className="nav-link scrollto" href="/">
                  Home
                </Link>
              </li>
              <li
                className={`${styles.dropdown}`}
                onClick={() => toogleDropdowns('services')}>
                <Link href='/#services' scroll={false}>
                <span>Services</span> <ChevronDown className="ms-1" />
                </Link>
                <ul
                  className={
                    servicesDropdownOpen ? styles['dropdown-active'] : ''
                  }>
                  <li onClick={toggleMobileNav}>
                    <Link href="/#living-with-us" scroll={false}>Living With Us</Link>
                  </li>
                  <li onClick={toggleMobileNav}>
                    <Link href="/#day-program" scroll={false}>Day Programs</Link>
                  </li>
                  <li onClick={toggleMobileNav}>
                    <Link href="/#respite-care" scroll={false}>Caregiver Support</Link>
                  </li>
                </ul>
              </li>
              <li
                className={`${styles.dropdown}`}
                onClick={() => toogleDropdowns('caregivers')}>
                <a href="#">
                  <span>Caregiver Support</span>{' '}
                  <ChevronDown className="ms-1" />
                </a>
                <ul
                  className={
                    caregiversDropdownOpen ? styles['dropdown-active'] : ''
                  }>
                  <li onClick={toggleMobileNav}>
                    <Link href="/#" scroll={false}>Caregiver Support group</Link>
                  </li>
                  <li onClick={toggleMobileNav}>
                    <Link href="/#" scroll={false}>Resources</Link>
                  </li>
                  <li onClick={toggleMobileNav}>
                    <Link href="/#" scroll={false}>Dementia Blog</Link>
                  </li>
                </ul>
              </li>
              <li
                className={`${styles.dropdown}`}
                onClick={() => toogleDropdowns('about')}>
                <Link href="/#" scroll={false}>
                  <span>About</span> <ChevronDown className="ms-1" />{' '}
                </Link>
                <ul
                  className={
                    aboutDropdownOpen ? styles['dropdown-active'] : ''
                  }>
                  <li onClick={toggleMobileNav}>
                    <Link href="/#" scroll={false}>Mission</Link>
                  </li>
                  <li onClick={toggleMobileNav}>
                    <Link href="/#gallery" scroll={false}>Gallery</Link>
                  </li>
                  <li onClick={toggleMobileNav}>
                    <Link href="/#testimonials" scroll={false}>Testimonials</Link>
                  </li>
                  <li onClick={toggleMobileNav}>
                    <Link href="/#team" scroll={false}>Our Team</Link>
                  </li>
                </ul>
              </li>
              <li
                className={`${styles.dropdown}`}
                onClick={() => toogleDropdowns('get-involved')}>
                <Link href="/#" scroll={false}>
                  <span>Get Involved</span>
                  <ChevronDown className="ms-1" />
                </Link>
                <ul
                  className={
                    getInvolvedDopdownOpen ? styles['dropdown-active'] : ''
                  }>
                  <li onClick={toggleMobileNav}>
                    <Link href="/#" scroll={false}>Volunteers</Link>
                  </li>
                  <li onClick={toggleMobileNav}>
                    <Link href="#" scroll={false}>Board of Directors</Link>
                  </li>
                </ul>
              </li>
              <li
                className={`${styles.dropdown}`}
                onClick={() => toogleDropdowns('more')}>
                <Link href="/#" scroll={false}>
                  <span>More</span>
                  <ChevronDown className="ms-1" />
                </Link>
                <ul
                  className={moreDropDownOpen ? styles['dropdown-active'] : ''}>
                  <li onClick={toggleMobileNav}>
                    <Link href="/partners" scroll={false}>Partner Page</Link>
                  </li>
                  {/* <li onClick={toggleMobileNav}>
                    <Link href="/#" scroll={false}>Contact Us</Link>
                  </li> */}
                  <li onClick={toggleMobileNav}>
                    <Link href="/#footer" scroll={false}>Newsletter Sign Up</Link>
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

          {!mobileNav && (
            <Link
              href="/#appointment"
              className={`${styles['appointment-btn']} scrollto`}
              scroll={false}>
              <span className="d-none d-md-inline">Contact</span> Us
            </Link>
          )}
          {!mobileNav && (
            <Link href="/donations" className={`${styles['donate-btn']}`}>
                {/* <span className="d-none d-md-inline">Donate</span> */}
                Donate
            </Link>
          )}
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
};
