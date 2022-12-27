
import style from './Contact.module.css';
import sectionStyle from '../../styles/Section.module.css';
import { MyMap } from '../ui';

import { GeoAlt, Envelope, TelephoneOutbound} from 'react-bootstrap-icons';

export const Contact = () => {
    return (
        <section id="contact" className={style.contact}>
      <div className="container">

        <div className={sectionStyle['section-title']}>
          <h2>Alternative Living & Dementia Care Home For Women</h2>
          <p>Memory Lane Home Living Inc. is an Alternative Living Residence in Richmond Hill providing Dementia Home Care & Respite Care Services for Women across Aurora, King City, Thornhill, Vaughan, Stouffville, Newmarket, Markham, Barrie, Orangeville, Bradford, and Toronto, Ontario.</p>
        </div>

      </div>

      <div>
      {/* <h1 className='text-danger text-center'>MAP HERE</h1> */}
      <MyMap />

      </div>

      <div className="container">

        <div className="row mt-5">

          <div className="col-lg-6">

            <div className="row">
              <div className="col-md-12">
                <div className={style['info-box']}>
                  <GeoAlt className={style.icon} />
                  <h3>Our Address</h3>
                  <p>Richmond Hill, Ontario, Canada</p>
                </div>
              </div>
              <div className="col-md-6">
                <div  className={style['info-box'] + ' mt-4'}>
                  <Envelope className={style.icon} />
                  <h3>Email Us</h3>
                  <p>mlliving14@gmail.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div  className={style['info-box'] + ' mt-4'}>
                  <TelephoneOutbound className={style.icon}  />
                  <h3>Call Us</h3>
                  <p>(905) 237-1419</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className={style['email-form']}>
              <div className="row">
                <div className="col form-group mt-3">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col form-group mt-3">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" style={{height: "5em"}} name="message" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                {/* <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div> */}
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    )
}
