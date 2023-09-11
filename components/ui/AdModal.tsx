import Image from 'next/image';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import style from '@styles/Footer.module.css';

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
      show={show}
      key={image}
      centered
    //   onHide={() => setShowModal(false)}
    >
      <Modal.Header
        closeButton
        style={{ backgroundColor: '#714b92' }}
      ></Modal.Header>
      <Modal.Body className='mx-auto'>
        <Image
          src={image}
          alt="Ad"
          height={800}
          width={700}
          className="img-fluid"
          priority={true}
          style={{ objectFit: 'contain' }}
          
        />
        <p className={`mt-4 text-center h3`}>
              <span className='fw-bold' style={{color: '#714b92'}}>COST:</span> No charge. Light Lunch and Refreshments.
        </p>
      </Modal.Body>
      <Modal.Footer style={{backgroundColor: '#FAFAFA'}}>
          <Button
            variant="primary"
            style={{ backgroundColor: '#714b92', borderColor: '#714b92' }}
            onClick={navigateToRegister}
        
            >
            Register
          </Button>
          <Button
            variant="primary"
            style={{ backgroundColor: '#d68eae', borderColor: '#d68eae' }}
            onClick={() => setShowModal(false)}
            >
            Close
          </Button>
        </Modal.Footer>
    </Modal>
  );
};
