import { useState } from 'react';
import Image from 'next/image';
import { Modal } from 'react-bootstrap';
import styleSection from '@styles/Section.module.css';

export const MediaCard = ({
  image = '',
  index = 0,
  width = 300,
  height = 300,
  text = '',
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal
        size="lg"
        show={showModal}
        key={image}
        centered
        onHide={() => setShowModal(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Image
            src={image}
            height={520}
            width={520}
            className="img-fluid d-block mx-auto"
            alt={image}
          />
        </Modal.Body>
      </Modal>
      <div
        className={`d-flex flex-column flex-lg-row justify-content-around ${styleSection['media-card']}`} onClick={() => setShowModal(true)}>
        <Image
          src={image}
          alt={`Media ${index} image`}
          width={width}
          height={height}
          priority={false}
          className="img-fluid m-5 align-self-center"
        />

        <p className={`${styleSection.description} mx-sm-5 mb-sm-5 m-md-5 align-self-center`}>
          {text}
        </p>
      </div>
    </>
  );
};
