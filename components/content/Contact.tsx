import style from './Contact.module.css';
import sectionStyle from '@styles/Section.module.css';
import { Form, MyMap } from '@components/ui';

import { GeoAlt, Envelope, TelephoneOutbound } from 'react-bootstrap-icons';

import { SeparatorIdentifier } from '@components/ui/SeparatorIdentifier';

export const Contact = ({id =''}) => {
  return (
    <>
      <SeparatorIdentifier id={id} />
      <section className={style.contact + ' my-5'}>
        <div className="container">
          <div className={sectionStyle['section-title']}>
            <h2>Contact Us</h2>
            <h5 className="text-start">
              Alternative Living & Dementia Care Home For Women
            </h5>
            <p className={sectionStyle.description}>
              Memory Lane Home Living Inc. is an Alternative Living Residence in
              Richmond Hill providing Dementia Home Care & Respite Care Services
              for Women across Aurora, King City, Thornhill, Vaughan,
              Stouffville, Newmarket, Markham, Barrie, Orangeville, Bradford,
              and Toronto, Ontario.
            </p>
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
                  <div className={style['info-box'] + ' mt-4'}>
                    <Envelope className={style.icon} />
                    <h3>Email Us</h3>
                    <p>mlliving14@gmail.com</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={style['info-box'] + ' mt-4'}>
                    <TelephoneOutbound className={style.icon} />
                    <h3>Call Us</h3>
                    <p>(905) 237-1419</p>
                  </div>
                </div>
              </div>
            </div>

            <Form />
          </div>
        </div>
      </section>
    </>
  );
};
