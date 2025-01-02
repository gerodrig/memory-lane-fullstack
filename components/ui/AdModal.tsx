import Image from 'next/image';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import style from '@styles/Footer.module.css';

interface AdModalProps {
  showModal: boolean;
  image: string;
  registerLink: string;
}

export const AdModal = ({ showModal, image, registerLink }: AdModalProps) => {
  const [show, setShowModal] = useState(showModal);

  const navigateToRegister = () => {
    window.open('http://' + registerLink, '_blank');
    setShowModal(false);
  };

  return (
    <Modal
      size="lg"
      // fullscreen
      show={show}
      key={image}
      centered
      onHide={() => setShowModal(false)}
      aria-labelledby="ad-modal"
    >
      <Modal.Header
        // closeButton
        className="d-flex justify-content-end gap-2"
        style={{ backgroundColor: '#FAFAFA' }}
      >
        <Button
          variant="primary"
          style={{ backgroundColor: '#714b92', borderColor: '#714b92' }}
          onClick={navigateToRegister}
        >
          Register
        </Button>
        <Button
          variant="primary"
          className="me-2"
          style={{ backgroundColor: '#d68eae', borderColor: '#d68eae' }}
          onClick={() => setShowModal(false)}
        >
          Close
        </Button>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center justify-content-center">
        <Image
          src={image}
          alt="Ad"
          height={800}
          width={700}
          className="img-fluid w-100"
          priority={true}
          style={{ objectFit: 'contain', maxHeight: '70vh' }}
        />
        {/* Modal information */}
        <div className='mt-3 mx-2'>
          <p className={`mt-1 h6 align-self-start`}>
            <span className="fw-bold" style={{ color: '#714b92' }}>
              📅 Date:
            </span>{' '}
            February 8th, 2025
          </p>
          <p className={`mt-1 h6 align-self-start`}>
            <span className="fw-bold" style={{ color: '#714b92' }}>
              🕒 Time:
            </span>{' '}
            11:30 AM – 2:30 PM
          </p>
          <p className={`mt-1 h6 align-self-start`}>
            <span className="fw-bold" style={{ color: '#714b92' }}>
              🏛️ Venue:
            </span>{' '}
            St. Matthew’s United Church, 333 Crosby Avenue, Richmond Hill
          </p>
          <p className={`mt-1 h6 align-self-start`}>
            <span className="fw-bold" style={{ color: '#714b92' }}>
              🎟️ Tickets:
            </span>{' '}
            $30 per ticket OR 2 tickets for $50
          </p>
        </div>
        ˝
      </Modal.Body>
      {/* <Modal.Footer style={{backgroundColor: '#FAFAFA'}}>
     
        </Modal.Footer> */}
    </Modal>
  );
};
