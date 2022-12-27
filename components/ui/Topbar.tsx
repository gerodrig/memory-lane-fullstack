import { useState, useEffect } from 'react';
import styles from '../../styles/Topbar.module.css';
import { Clock, Phone } from 'react-bootstrap-icons';

type TopbarProps = {
  hide?: boolean;
};

export const Topbar = ({ hide = false }: TopbarProps) => {
  const [visible, setVisible] = useState('');

  useEffect(() => {
    if (hide) {
      setVisible(`${styles['topbar-scrolled']}`);
    } else {
      setVisible('');
    }
  }, [hide]);

  return (
    <div
      id="topbar"
      className={`${styles.topbar} ${visible} d-flex align-items-center fixed-top`}>
      <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
        <div className="align-items-center d-none d-md-flex">
          <Clock className="me-2" /> Monday - Saturday, 9AM to 5PM
        </div>
        <div className="d-flex align-items-center">
          <Phone className="me-2" /> Call us now (905) 237-1419
        </div>
      </div>
    </div>
  );
};
