import { useState } from 'react';

import Swal from 'sweetalert2';

import style from '../../styles/Form.module.css';


export const Form = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [ loading , setLoading ] = useState(false);
  const [ formSent , setFormSent ] = useState(false);
  const [ error , setError ] = useState(false);

  const { name, email, subject, message } = values;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setValues({ ...values, [e.target.name]: e.target.value });

    const clearForm = () => {
        setValues({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(values);
        console.log(formSent);

        try {

            setLoading(true);

            if(!formSent) {
                // await fetch('/api/contact', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(values),
                // });

                //EMAILJS
                await fetch('/api/emailjs', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(values),
                    });
            }

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

        setLoading(false);
    }

  return (
    <div id='appointment' className="col-lg-6">
      <form
        onSubmit={handleSubmit}
        method="post"
        role="form"
        className={style['email-form']}>
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
              required
            />
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
              required
            />
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
            required
          />
        </div>
        <div className="form-group mt-3">
          <textarea
            className="form-control"
            style={{ height: '5em' }}
            name="message"
            placeholder="Message"
            value={message}
            onChange={handleChange}
            required></textarea>
        </div>
        <div className="mt-3">
          {/* <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div> */}
        </div>
        <div className="mt-3 text-center">
          <button type="submit" disabled={loading} >Send Message</button>
        </div>
      </form>
    </div>
  );
};
