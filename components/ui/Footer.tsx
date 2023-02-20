import { Facebook, Twitter } from 'react-bootstrap-icons';


import { NewsletterSubscribe } from './NewsletterSubscribe';
import style from '@styles/Footer.module.css';

//props to update the year

// type FooterProps = {
//   year: string;
// };

//TODO: implement footer props to get year automatically

export const Footer = () => {

  //get current year
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className={style.footer}>
      <div className={style['footer-top']}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className={style['footer-info']}>
                <h3>Memory Lane Home Living</h3>
                <p>
                  Richmond Hill
                  <br />
                  Ontario, Canada
                  <br />
                  <br />
                  <strong>Phone:</strong> (905) 237-1419
                  <br />
                  <strong>Email:</strong> mlliving14@gmail.com
                  <br />
                </p>
                <div className={`${style['social-links']} mt-3`}>
                  <a
                    href="https://twitter.com/memorylanehl"
                    className="twitter"
                    target="_blank"
                    rel="noreferrer">
                    <Twitter />
                  </a>
                  <a
                    href="https://www.facebook.com/memorylanehomeliving/"
                    className="facebook"
                    target="_blank"
                    rel="noreferrer">
                    <Facebook />
                  </a>

                </div>
              </div>
            </div>

            <div className={`col-lg-2 col-md-6 ${style['footer-links']}`}>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="#">Caregiver Support</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">About</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="#">Get Involved</a>
                </li>
              </ul>
            </div>

            <div className={`col-lg-3 col-md-6 ${style['footer-links']}`}>
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="#">Living With Us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="#">Day Programs</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="#monthly-tuesday">Caregiver Support</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="#">Resources</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="#">Dementia Blog</a>
                </li>
              </ul>
            </div>

            <NewsletterSubscribe />
          </div>
        </div>
      </div>

      <div className="container">
        <div className={style.copyright}>
          &copy;{' '}
          <strong>
            <span>{year} Memory Lane Home Living Inc.</span>
          </strong>
          .
        </div>
      </div>
    </footer>
  );
};
