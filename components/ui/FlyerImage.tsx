import Image from 'next/image'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import styles from '../../styles/FlyerImage.module.css';

type FlyerImageProps = {
    source: string;
    className?: string;
    style?: React.CSSProperties;
}

export const FlyerImage = ({source , className, style}: FlyerImageProps) => {

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
            style={{ cursor: 'pointer', objectFit: 'contain',...style }}
            priority={false}
            onClick={() =>
            handleShow(source)
            }
            alt="Flyer"
        />

        <Modal show={show} onHide={handleClose} fullscreen>
        <Modal.Header closeButton/>
            <Modal.Body className='text-center'>
            {/* Add the full-size image to the modal body */}
            <Image src={imageSrc} alt="flyer"
            width={580}
            height={580}
            className="img-fluid"
            priority={false}
            />
            </Modal.Body>
            {/* //close button */}
            <Modal.Footer>
            <Button variant='primary' className={styles['modal-button']} onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
