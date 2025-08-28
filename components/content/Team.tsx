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
        className={`${style['board-members']} ${styleSection['section-bg']} my-5`}
      >
        <div className="container" data-aos="fade-up">
          <div className={`${styleSection['section-title']}`}>
            <SeparatorIdentifier id={id} />
            <h2>Our Team</h2>
            <p className={styleSection.description}>
              Board members, staff and volunteers all contribute meaningfully to
              our no-for-profit dementia initiative. Our board members bring
              collective wisdom and expertise to ensure decisions are made in
              the best interest of the organization. Our dedicated staff manage
              day-to-day operations and report to the board, while a robust and
              diverse group of volunteers strengthens our efforts in countless
              ways.
            </p>
            <br />
            <p className={styleSection.description}>
              Clients also play an active role in daily life at Memory Lane Home
              Living, contributing through their own volunteerism and
              participating in activities that give back to the broader
              community – our Music from the Heart Choir being a shining
              example.
            </p>
            <br />
            <p className={styleSection.description}>
              It is this vibrant community of board members, staff, volunteers,
              and clients that makes it possible for us to fulfill our mission
              and create meaningful impact every day.
            </p>
          </div>
          {/* 
          <div className="row d-flex justify-content-center">
          <SeparatorIdentifier id="founder" />
            {data
              .filter(({ jobTitle }) => jobTitle?.toLowerCase().includes('founder'))
              .map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}

          </div> */}
          <div className="row d-flex justify-content-center">
            <SeparatorIdentifier id="board-directors" />
            {data
              .filter(({ jobTitle }) => jobTitle?.toLowerCase().includes(','))
              .map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
          </div>

          <div className="row d-flex justify-content-center">
            <SeparatorIdentifier id="board-directors" />
            {data
              .filter(
                ({ jobTitle }) =>
                  jobTitle?.toLowerCase() === 'board of directors'
              )
              .map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
          </div>

          <div className="row d-flex justify-content-center">
            {data
              .filter(
                ({ jobTitle }) => !jobTitle?.toLowerCase().includes('director')
              )
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
  imageFit = 'cover',
  imagePosition = 'center top',  imageScale = 1
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
        onHide={() => setShowModal(false)}
      >
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
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="col-lg-6 col-xl-4 col-xxl-3 d-flex align-items-stretch mb-4">
        <div
          className={style.member}
          data-aos="fade-up"
          data-aos-delay="100"
          onClick={() => setShowModal(true)}
        >
          <div className={style['member-img']}>
            <Image
              src={image}
              alt={name}
              // width={220}
              // height={280}
              // className="img-fluid"
              layout='fill'
              objectFit={imageFit}
              objectPosition={imagePosition}
              style={{ transform: `scale(${imageScale})` }}
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
