import Link from 'next/link';
import {
  HeartPulseFill,
  SunFill,
  CheckCircle,
  MoonFill,
  CalendarFill,
  MusicNoteBeamed,
  FileMusicFill,
} from 'react-bootstrap-icons';

import { FlyerImage, SeparatorIdentifier } from '@components/ui';

import style from './Services.module.css';
import styleSection from '@styles/Section.module.css';

interface ServicesProps {
  id?: string;
}

export const Services = ({ id = '' }: ServicesProps) => {
  const check = <CheckCircle className={styleSection.check} />;

  return (
    <>
      <SeparatorIdentifier id={id} margin="my-1" />
      <section>
        <div className="container" data-aos="fade-up">
          <div className="row">
            <SeparatorIdentifier id="living-with-us" margin="my-5" />
            <div
              className={`col-md-12 ${styleSection['icon-box']}`}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
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
                The success of these small home environments includes having
                peers to connect with in a home environment. “Big” environments
                are not always “better” for those on the dementia journey.
                Families are part of a community as they are involved in the
                household and care decisions of their loved ones.
                <span className="fw-bold">
                  {' '}
                  As a cooperative model the cost of care is significantly less
                  than memory units in retirement homes.
                </span>
              </p>
              <p className={styleSection.description}>
                <span className="fst-italic">
                  Are we ready to follow Europe’s lead and look at shared
                  housing as a solution to providing supportive care for those
                  living with dementia?
                </span>{' '}
                Memory Lane Home Living Inc. is an Alternative Living Residence
                in Richmond Hill providing Dementia Home Living, Respite Care
                Services, Day Programs for Women across Aurora, King City,
                Thornhill, Vaughan, Stouffville, Newmarket, Markham, Barrie,
                Orangeville, Bradford, and Toronto, Ontario.{' '}
              </p>
            </div>

            <div>
              <p className={style['description-pink']}>
                <span className="fw-bold">
                  MONTHLY ZOOM INFORMATION SESSIONS: Find out about Memory Lane
                  Home Living and their holistic model of care:
                </span>
              </p>
              <p className={styleSection.description + ` mb-4`}>
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

              <FlyerImage
                className="mt-1 mb-5 col-sm-12"
                source="/assets/images/flyers/MLHL-information-evening-first-monday-of-month.png"
              />
            </div>

            <SeparatorIdentifier id="services" margin="my-5" />

            <div className={styleSection['section-title']}>
              <h2>Services</h2>
            </div>

            <SeparatorIdentifier id="day-program" margin="my-1" />
            <div
              className={`col-md-12 ${styleSection['icon-box']}`}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className={styleSection.icon}>
                <SunFill size={32} />
              </div>
              <h4 className={style.title + ' text-center mb-5'}>
                Community Connection Day Program
              </h4>
              <p className={styleSection.description}>
                We have <strong>recently upgraded</strong> our{' '}
                <em>Community Connection</em> programs to accommodate the needs
                of the community. We have extended hours, and adjusted program
                costs. We invite women with memory challenges to join us from
                10:00 am to 4:00 pm. This is a 6-hour session of socialization,
                activities, and a hot lunch with other women on the same
                journey. One size does not fit all when it comes to dementia, so
                we schedule our program days according to the needs of the
                participants. Women who join us feel as though they are spending
                the day at a friends house.
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
                        <strong>Tuesdays</strong> and <strong>Thursdays</strong>{' '}
                        from 10:00 am to 4:00 pm are{' '}
                        <em>Community Connection</em> for women who need more
                        assistance with everyday activities. The program is
                        directed by a Recreational Therapist, Music & Art
                        Specialists, and a Personal Support Worker that is
                        available for any personal care needs. We accommodate
                        you where you are at. The cost is $60.00 for personal
                        assistance, program activities, lunch, snacks, and
                        dessert.
                      </span>
                      <ul className="mt-4 mb-4">
                        <li>
                          <span className="ps-2">
                            <strong>CAPACITY:</strong> Limited space. 2:1 ratio
                            of clients to qualified staff.
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      {check}{' '}
                      <span className="ps-2">
                        <strong>Wednesdays</strong> and <strong>Fridays</strong>{' '}
                        from 10:00am to 4:00pm are <em>Community Connection</em>{' '}
                        for women that are still independent on their journey
                        but may need some occasional cues. We provide a sense
                        purpose and connection through conversations, singing,
                        music, exercise, games, art, and outdoor activities. We
                        enjoy taking the women to Mill Pond for afternoon walks
                        when we can. These women are also invited to join our
                        community initiatives such as our{' '}
                        <em>Music from the Heart Choir</em>, which travels to
                        various Long Term Care Homes throughout York Region to
                        perform. They are invited to assist us with the
                        Christmas Bazaars we attend to sell our home-made
                        crafts. We have in the past performed a puppet show to
                        entertain the children attending the local library,
                        which is another opportunity to assist Memory Lane Home
                        Living in the community.  Cost is $40.00 per day
                        including personalized programs, lunch, snacks, and
                        dessert.
                      </span>
                      <ul className="mt-4 mb-4">
                        <li>
                          <span className="ps-2">
                            <strong>WHERE:</strong> 
                            <em>Memory Lane Home Living.</em> Yonge and Major
                            Mackenzie Drive West. Richmond Hill, ON.
                          </span>
                        </li>
                        <li>
                          <span className="ps-2">
                            <strong>CAPACITY:</strong> Limited space. 2:1 ratio
                            of clients to qualified staff.
                          </span>
                        </li>
                        <li>
                          <span className="ps-2">
                            <strong>REGISTRATION REQUIRED:</strong> Call us at{' '}
                            <Link href="tel:9052371419">905.237.1419</Link> or
                            Email us at{' '}
                            <Link href="mailto:mlliving14@gmail.com">
                              mlliving14@gmail.com
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <SeparatorIdentifier id="music-from-the-heart" />
            <div
              className={`col-md-12 ${styleSection['icon-box']}`}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className={styleSection.icon}>
                <MusicNoteBeamed size={32} />
              </div>
              <h4 className={style.title + ' text-center mb-5'}>
                Music From The Heart
              </h4>
              <p className={styleSection.description}>
                <span className="fst-italic fw-bold">Music from the Heart</span>
                , is a weekly program run on Tuesdays by our Music Therapist who
                delivers a therapeutic program to caregivers and their loved
                ones with a dementia diagnosis, in a community setting. Music
                therapy is the evidence-based use of music to accomplish
                individualized goals such as reducing stress and improving
                mood/self-expression. We invite care partners and their loved
                one with a dementia diagnosis to come together to participate in
                this music program. Join us and experience the power of music.
              </p>
              <p className={styleSection.description}>
                <span className="fw-bold">WHERE:</span> Richmond Hill
                Presbyterian Church. 10066 Yonge Street, Richmond Hill, ON L4C
                1T8. Yonge & Major Mackenzie Drive.
              </p>
              <p className={styleSection.description}>
                <span className="fw-bold">
                  WHEN: Tuesdays 1:15mp to 3:00 pm.
                </span>
              </p>
              <p className={styleSection.description}>
                <span className="fw-bold">COST:</span> No Charge, Limited
                seating.
              </p>
              <p className={styleSection.description}>
                <span className="fw-bold">REGISTRATION REQUIRED:</span> Call us
                at <Link href="tel:9052371419">905.237.1419</Link> or Email us
                at{' '}
                <Link href="mailto:mlliving14@gmail.com">
                  mlliving14@gmail.com
                </Link>
              </p>
            </div>

            <SeparatorIdentifier id="music-from-the-heart-choir" />
            <div
              className={`col-md-12 ${styleSection['icon-box']}`}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className={styleSection.icon}>
                <FileMusicFill size={32} />
              </div>
              <h4 className={style.title + ' text-center mb-5'}>
                Music From The Heart Choir
              </h4>
              <p className={styleSection.description}>
                <span className="fst-italic fw-bold">
                  Music from the Heart Choir
                </span>
                , grew out of our music therapy program. We are a choir of care
                partners with our loved ones with a dementia diagnosis. We come
                together to share with others our music that is truly from our
                heart. We perform in Long Term Care homes throughout York Region
                at no charge. We love what we do, and it shows in our
                performances. If you would like to join our choir, please call
                us at 905.237.1419.
              </p>
              <p className={styleSection.description}></p>
              <p className={styleSection.description}>
                <span className="fw-bold">WHERE:</span> Richmond Hill
                Presbyterian Church. 10066 Yonge Street, Richmond Hill, ON L4C
                1T8. Yonge & Major Mackenzie Drive.
              </p>
              <p className={styleSection.description}>
                <span className="fw-bold">WHEN:</span> We practice on Tuesdays,
                from 2:00pm to 2:30pm. Performances are usually on Tuesday
                afternoons, approximately once every 8 weeks.
              </p>
              <p className={styleSection.description}>
                <span className="fw-bold">COST:</span> No Charge. Limited
                seating.
              </p>
              <p className={styleSection.description}>
                <span className="fw-bold">REGISTRATION REQUIRED:</span> Call us
                at <Link href="tel:9052371419">905.237.1419</Link> or Email us
                at{' '}
                <Link href="mailto:mlliving14@gmail.com">
                  mlliving14@gmail.com
                </Link>
              </p>
            </div>

            <FlyerImage
              className="mt-1 mb-5"
              source="/assets/images/flyers/MLHL-music-from-the-heart.png"
            />

            <SeparatorIdentifier id="respite-care" className="my-0" />
            <div
              className={`col-md-12 my-1 ${styleSection['icon-box']}`}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className={styleSection.icon}>
                <MoonFill size={32} />
              </div>
              <h4 className={style.title}>Respite Care for Our Clients</h4>
              <p className={styleSection.description}>
                Memory Lane Home Living Inc. recognizes the need in our
                community for respite care to those living with a dementia
                diagnosis. As of June 2022, we continue to offer Respite Care
                for our day program clients. Our care is unique because we
                provide respite care in a small home environment. Your loved one
                truly is at home with us and part of the activities of the
                household. The transition from Community Connections to
                overnight Respite Care is seamless.
              </p>
              <p className={styleSection.description}>
                <span className="fw-bold">WHERE:</span> Memory Lane Home Living
                @ Yonge and Major Mackenzie Drive West, in Richmond Hill, ON.
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

            <FlyerImage
              className="mt-1 mb-5 col-sm-12"
              source="/assets/images/flyers/MLHL-weekend-respite-stays.png"
            />
          </div>

          <div
            className={`col-md-12 ${styleSection['icon-box']}`}
            data-aos="zoom-in"
            data-aos-delay="100"
            id="monthly-monday"
          >
            <div className={styleSection.icon}>
              <CalendarFill size={32} />
            </div>
            <h4 className={style.title}>Monthly Programs</h4>
          </div>

          <SeparatorIdentifier id="monthly-caregiver-support" margin="my-1" />
          <div
            className={`col-md-12 ${styleSection['icon-box']}`}
            data-aos="zoom-in"
            data-aos-delay="100"
            id="monthly-tuesday"
          >
            <p className={style['description-pink']}>
              <span className="fw-bold">MONTHLY CARE-GIVER SUPPORTS GROUP</span>
            </p>
            <p className={styleSection.description}>
              This is a monthly group for caregivers of loved ones that attend
              our Community Connection, that meet for support. At Memory Lane
              you are not alone on this journey.{' '}
              <span className="fw-bold">
                We meet for approximately an hour on the last Thursday of each
                month.
              </span>
            </p>
          </div>

          <FlyerImage
            className="mt-1 mb-5 col-sm-12"
            source="/assets/images/flyers/MLHL-care-support-last-thursday-of-month.png"
          />

        </div>
      </section>
    </>
  );
};
