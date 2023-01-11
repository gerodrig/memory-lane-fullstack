import Image from 'next/image';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import styles from '../../styles/FlyerImage.module.css';

type FlyerImageProps = {
  source: string;
  className?: string;
  style?: React.CSSProperties;
};

export const FlyerImage = ({ source, className, style }: FlyerImageProps) => {
  const [show, setShow] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (src: string) => {
    setShow(true);
    setImageSrc(src);
  };

  return (
    <>
      <Image
        className={`${className} ${styles.image}`}
        src={source}
        width={200}
        height={200}
        style={{ cursor: 'pointer', objectFit: 'contain', ...style }}
        priority={false}
        onClick={() => handleShow(source)}
        alt="Flyer"
      />

      <Modal show={show} onHide={handleClose} fullscreen>
        <Modal.Header closeButton closeLabel='' style={{ backgroundColor: '#d68eae' }} />
        <Modal.Body className="mx-auto h-100 w-100" >
          {/* Add the full-size image to the modal body */}
          <Image
            src={imageSrc}
            alt="flyer"
            fill
            className="img-fluid"
            priority={false}
            style={{ objectFit: 'contain' }}
          />
        </Modal.Body>
        {/* //close button */}
        <Modal.Footer style={{backgroundColor: '#FAFAFA'}}>
          <Button
            variant="primary"
            className={styles['modal-button']}
            onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
