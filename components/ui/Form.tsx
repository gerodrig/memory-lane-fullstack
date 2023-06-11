import { useState } from 'react';

import Swal from 'sweetalert2';

import style from '../../styles/Form.module.css';

const CC_EMAIL = process.env.NEXT_PUBLIC_FORMSUBMIT_CC_EMAIL;
const MASKED_EMAIL = process.env.NEXT_PUBLIC_FORMSUBMIT_MASKED_EMAIL;

export const Form = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const { name, email, subject, message } = values;

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => setValues({ ...values, [e.target.name]: e.target.value });

  const clearForm = () => {
    setValues({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const resetErrors = () => {
    setErrors({
      name: false,
      email: false,
      subject: false,
      message: false,
    });
   }

  const validateInput = () => {

    let hasErrors = false;
    const errorsValue = { ...errors };
    
    if(values.name.length < 1 ) {
      errorsValue.name = true;
      hasErrors = true;
    } else {
      errorsValue.name = false;
    }

    if(!/\S+@\S+\.\S+/.test(values.email)) {
      errorsValue.email = true;
      hasErrors = true;
    } else {
      errorsValue.email = false;
    }

    if(values.subject.length < 1 ) {
      errorsValue.subject = true;
      hasErrors = true;
    } else {
      errorsValue.subject = false;
    }

    if(values.message.length < 1 ) {
      errorsValue.message = true;
      hasErrors = true;
    } else {
      errorsValue.message = false;
    }

    setErrors(errorsValue);

    //check if any errors are true and return false if so
    return hasErrors;

  };
    

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(validateInput()) {
      return;
    }



    try {
      setIsLoading(true);
     

      await fetch(`https://formsubmit.co/ajax/${MASKED_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ ...values, _cc: CC_EMAIL, _captcha: 'false', _subject: subject.length > 0 ? subject : 'New Message from Memory Lane Page' }),
      });

      Swal.fire({
        icon: 'success',
        title: 'Message sent',
        text: 'Thank you for contacting us!, we will get back to you as soon as possible.',
        showConfirmButton: true,
        confirmButtonText: 'Close',
        confirmButtonColor: '#d68eae',
        iconColor: '#d68eae',
      });
      clearForm();
      resetErrors();
      setFormSent(true);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again later. or contact us directly at (905) 237-1419',
        showConfirmButton: true,
        confirmButtonText: 'Close',
        confirmButtonColor: '#d68eae',
      });
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <div id="appointment" className="col-lg-6">
      <form
        onSubmit={handleSubmit}
        method="POST"
        role="form"
        className={style['email-form']}
      >
        <div className="row">
          <div className="col form-group mt-3">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={handleChange}
            />
            <span hidden={!errors.name} className={`${style['error-message']}`}>Please fill out this field</span>
          </div>
          <div className="col form-group mt-3">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={handleChange}
            />
                 <span hidden={!errors.email} className={`${style['error-message']}`}>Invalid email address</span>
          </div>
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            placeholder="Subject"
            value={subject}
            onChange={handleChange}
          />
          <span hidden={!errors.subject} className={`${style['error-message']}`}>Please fill out this field</span>
        </div>
        <div className="form-group mt-3">
          <textarea
            className="form-control"
            style={{ height: '5em' }}
            name="message"
            placeholder="Message"
            value={message}
            onChange={handleChange}
          ></textarea>
          <span hidden={!errors.message} className={`${style['error-message']}`}>Please fill out this field</span>
        </div>
        <div className="mt-3">

        </div>
        <div className="mt-3 text-center">
          <button type="submit" disabled={isLoading} >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
