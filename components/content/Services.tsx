import React, { useState } from 'react';
import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

import {
  HeartPulseFill,
  SunFill,
  CheckCircle,
  MoonFill,
  CalendarFill,
} from 'react-bootstrap-icons';
import style from './Services.module.css';
import styleSection from '../../styles/Section.module.css';
import { FlyerImage } from '../ui';

export const Services = () => {
  const [show, setShow] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const check = <CheckCircle className={styleSection.check} />;

  const handleClose = () => setShow(false);
  const handleShow = (src: string) => {
    setShow(true);
    setImageSrc(src);
  };

  return (
    <section id="services" className="mt-5">
      <div className="container" data-aos="fade-up">
        <div className={styleSection['section-title']}>
          <h2>Services</h2>
        </div>

        <div className="row">
          <div
            className={`col-md-12 ${styleSection['icon-box']}`}
            data-aos="zoom-in"
            data-aos-delay="100"
            id="living-with-us">
            <div className={styleSection.icon}>
              <HeartPulseFill size={32} />
            </div>
            <h4 className={style.title + ' text-center'}>Living With Us</h4>
            <h4 className="fst-italic text-start">
              Our Model is evidence-based
            </h4>
            <p className={styleSection.description}>
              Our Model is a newcomer in the existing senior care framework in
              Canada. Unlike traditional models such as retirement homes or
              long-term care settings, Memory Lane Home Living Inc. offers a
              co-operative way of living. It is based on the well-established
              and evidence-based European framework called “Friends of the
              Elderly”—a way of living with dementia where individuals can
              remain in community as they progress in their journey. In North
              America one might compare this model with the popular 80’s show{' '}
              <span className="fw-bold">
                “The Golden Girls” (with supports).{' '}
              </span>{' '}
              Families and friends are actively involved as part of this
              community.
            </p>
            <p className={styleSection.description}>
              Memory Lane Home Living Inc. represents a holistic approach for
              women who no longer can live on their own. These women share an
              exclusive home in Richmond Hill. Support is abundant with
              recreation therapists, music therapist, volunteers and nighttime
              PSWs.
            </p>
            <p className={styleSection.description}>
              The success of these small home environments includes having peers
              to connect with in a home environment. “Big” environments are not
              always “better” for those on the dementia journey. Families are
              part of a community as they are involved in the household and care
              decisions of their loved ones.
              <span className="fw-bold">
                {' '}
                As a cooperative model the cost of care is significantly less
                than memory units in retirement homes.
              </span>
            </p>
            <p className={styleSection.description}>
              <span className="italics">
                Are we ready to follow Europe’s lead and look at shared housing
                as a solution to providing supportive care for those living with
                dementia?
              </span>{' '}
              Memory Lane Home Living Inc. is an Alternative Living Residence in
              Richmond Hill providing Dementia Home Living, Respite Care
              Services, Day Programs for Women across Aurora, King City,
              Thornhill, Vaughan, Stouffville, Newmarket, Markham, Barrie,
              Orangeville, Bradford, and Toronto, Ontario.{' '}
            </p>
          </div>

          <div
            className={`col-md-12 ${styleSection['icon-box']}`}
            data-aos="zoom-in"
            data-aos-delay="100"
            id="day-program">
            <div className={styleSection.icon}>
              <SunFill size={32} />
            </div>
            <h4 className={style.title + ' text-center mb-5'}>
              Community Connection Day Program
            </h4>
            <p className={styleSection.description}>
              We invite women with memory challenges to join us for a half day
              of socialization, activities, and a hot lunch with other women on
              the same journey. Covid protocol updated regularly.
            </p>
            <p className={styleSection.description}>
              Community Connection Schedule:
            </p>

            <div className="about">
              <div className={styleSection.description}>
                <ul className="list-unstyled">
                  <li>
                    {check}{' '}
                    <span className="ps-2">
                      Community Connection for women with a{' '}
                      <span className="fw-bold">Young Onset diagnosis</span>,
                      Tuesday and Thursday 11am to 3pm.
                    </span>
                  </li>
                  <li>
                    {check}{' '}
                    <span className="ps-2">
                      Community Connection for{' '}
                      <span className="fw-bold">senior women</span> (80 yrs and
                      over) with a dementia diagnosis, Fridays 11am to 3pm.
                    </span>
                  </li>
                  <li>
                    {check}{' '}
                    <span className="ps-2">
                      Community Connection for{' '}
                      <span className="fw-bold">caregivers</span> or{' '}
                      <span className="fw-bold">
                        personal support workers (PSW)
                      </span>{' '}
                      and{' '}
                      <span className="fw-bold">
                        their person living with dementia (PLWD)
                      </span>
                      , Wednesdays 11am to 3pm. We teach the caregivers and PSW
                      how to engage with their PLWD by demonstrating a variety
                      of activities.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <p className={styleSection.description}>
              <span className="fw-bold">WHERE:</span> Memory Lane Home Living @
              Yonge and Major Mackenzie Drive West, in Richmond Hill, ON.
            </p>
            <p className={styleSection.description}>
              <span className="fw-bold">COST:</span> $10/Hour for four hours and
              $10 for lunch.
            </p>
          </div>

         <FlyerImage className="mt-1 mb-5" source='/assets/images/flyers/MLHL-community-connection.png' />
   

          <div
            className={`col-md-12 my-5 ${styleSection['icon-box']}`}
            data-aos="zoom-in"
            data-aos-delay="100"
            id="respite-care">
            <div className={styleSection.icon}>
              <MoonFill size={32} />
            </div>
            <h4 className={style.title}>Respite Care for Our Clients</h4>
            <p className={styleSection.description}>
              Memory Lane Home Living Inc. recognizes the need in our community
              for respite care to those living with a dementia diagnosis. As of
              June 2022, we continue to offer Respite Care for our day program
              clients. Our care is unique because we provide respite care in a
              small home environment. Your loved one truly is at home with us
              and part of the activities of the household. The transition from
              Community Connections to overnight Respite Care is seamless.
            </p>
            <p className={styleSection.description}>
              <span className="fw-bold">WHERE:</span> Memory Lane Home Living @
              Yonge and Major Mackenzie Drive West, in Richmond Hill, ON.
            </p>
            <p className={styleSection.description}>
              <span className="fw-bold">FOR WHOM:</span> Our Community
              Connection participants.
            </p>
            <p className={styleSection.description + ' fst-italic'}>
              {' '}
              For inquiries call Mona at (905) 237-1419
            </p>
          </div>

          <FlyerImage className="mt-1 mb-5 col-sm-12" source='/assets/images/flyers/MLHL-weekend-respite-stays.png' />
       
        </div>

        <div
          className={`col-md-12 ${styleSection['icon-box']}`}
          data-aos="zoom-in"
          data-aos-delay="100"
          id="monthly-monday">
          <div className={styleSection.icon}>
            <CalendarFill size={32} />
          </div>
          <h4 className={style.title}>Monthly Programs</h4>
          <p className={style['description-pink']}>
            <span className="fw-bold">
              MONTHLY ZOOM INFORMATION SESSIONS: Find out about Memory Lane Home
              Living and their wholistic model of care:
            </span>
          </p>
          <p className="description mb-4">
            {' '}
            We meet the first Monday of each month from 7-8pm to personally
            answer any questions you may have. Call us at{' '}
            <a className="underline" href="tel:905-237-1419">
              905-237-1419
            </a>{' '}
            or send us an email at{' '}
            <a className="underline" href="mailto:mlliving14@gmail.com">
              mlliving14@gmail.com
            </a>{' '}
            to access the zoom link.
          </p>
        </div>

        <FlyerImage className="mt-1 mb-5 col-sm-12" source='/assets/images/flyers/MLHL-information-evening-first-monday-of-month.png' />

        <div
          className={`col-md-12 ${styleSection['icon-box']}`}
          data-aos="zoom-in"
          data-aos-delay="100"
          id="monthly-tuesday">
          <p className={style['description-pink']}>
            <span className="fw-bold">MONTHLY CARE-GIVER SUPPORTS GROUP</span>
          </p>
          <p className="description">
            This is a monthly group for caregivers of loved ones that attend our
            Community Connection, that meet for support. At Memory Lane you are
            not alone on this journey.{' '}
            <span className="fw-bold">
              We meet for approximately an hour on the last Thursday of each
              month.
            </span>
          </p>
        </div>

        <FlyerImage className="mt-1 mb-5 col-sm-12" source='/assets/images/flyers/MLHL-care-support-last-thursday-of-month.png' />
        {/* assets/flyers/MLHL-care-support-last-thursday-of-month.png flyer PICTURE HERE */}
      </div>
    </section>
  );
};
