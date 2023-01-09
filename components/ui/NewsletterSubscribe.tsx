import { useState } from 'react';

import { useAlert } from '@hooks/useAlert';

import style from '@styles/Footer.module.css';
import { emailValidator } from '@helpers/emailValidator';

export const NewsletterSubscribe = () => {
  const [values, setValues] = useState('');
  const [emailError, setEmailError] = useState(false);

  const { alertSuccess, showAlert } = useAlert({
    title: 'Thank you for subscribing!',
    text: 'You are now subscribed to our newsletter.',
    icon: 'success',
    confirmButtonText: 'Close',
    confirmButtonColor: '#d68eae',
    iconColor: '#d68eae',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailValidator(values) && !showAlert) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    alertSuccess();

    setValues('');
  };

  return (
    <div className={`col-lg-4 col-md-6 ${style['footer-newsletter']}`}>
      <h4>Our Newsletter</h4>
      <p>Enter your email to join our newsletter.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={values}
          onChange={handleChange}
        />
        <input disabled={showAlert} type="submit" value="Subscribe" />
      </form>
      {showAlert && (
        <span className={style.suscribe}>Thanks for subscribing</span>
      )}
      {emailError && (
        <span className={style.error}>Please enter a valid email address</span>
      )}
    </div>
  );
};
