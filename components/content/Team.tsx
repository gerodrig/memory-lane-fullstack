import { useState } from 'react';
import Image from 'next/image';
import { Button, Modal } from 'react-bootstrap';

import { SeparatorIdentifier } from '../ui/SeparatorIdentifier';

import style from './Team.module.css';
import styleSection from '@styles/Section.module.css';

import { teamData as data } from 'database/dummyData';

export const Team = ({ id = '' }) => {
  return (
    <>
      <section
        // id="team"
        className={`${style['board-members']} ${styleSection['section-bg']} my-5`}>
        <div className="container" data-aos="fade-up">
          <div className={`${styleSection['section-title']}`}>
          <SeparatorIdentifier id={id} />
            <h2>Our Team</h2>
            <p className={styleSection.description}>
              We are grateful for the guidance and support from friends, family,
              knowledgeable individuals in this field, and especially the
              Alzheimer Society of York Region, Seneca Social Service Worker
              Gerontology Program (King Campus). Memory Lane Home Living was
              designed to address the issues that many of us encounter on the
              dementia journey.
            </p>
          </div>

          <div className="row d-flex justify-content-center">
          <SeparatorIdentifier id="board-directors" />
            {data
              .filter(({ jobTitle }) => jobTitle === 'President')
              .map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}

          </div>

          <div className="row d-flex justify-content-center">
          {data
              .filter(({ jobTitle }) => jobTitle !== 'President')
              .map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}

              
            {/* <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-bs-toggle="modal"
              data-bs-target="#jenniferModal">
              <div
                className={style.member}
                data-aos="fade-up"
                data-aos-delay="400">
                <div className={style['member-img']}>
                  <Image
                    src="/assets/images/board-members/jennifer.jpg"
                    width={218}
                    height={280}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className={style['member-info']}>
                  <h4>Jennifer Tran</h4>
                  <span>Board Member</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

const TeamMember = ({
  image = '',
  name = '',
  jobTitle = '',
  description = '',
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Modal
        size="lg"
        show={showModal}
        key={image}
        centered
        onHide={() => setShowModal(false)}>
        <Modal.Body>
          <Image
            src={image}
            height={200}
            width={200}
            className="img-fluid d-block mx-auto my-5"
            alt={image}
          />
          <p className={`${styleSection.description} m-5`}>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className={styleSection['modal-button']}
            onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="col-lg-6 col-xl-4 col-xxl-3 d-flex align-items-stretch mb-4">
        <div
          className={style.member}
          data-aos="fade-up"
          data-aos-delay="100"
          onClick={() => setShowModal(true)}>
          <div className={style['member-img']}>
            <Image
              src={image}
              width={218}
              height={280}
              className="img-fluid"
              alt=""
            />
          </div>

          <div className={style['member-info']}>
            <h4>{name}</h4>
            <span>{jobTitle}</span>
          </div>
        </div>
      </div>
    </>
  );
};
