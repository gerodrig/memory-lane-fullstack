
  import styleSection from '../../styles/Section.module.css';
  import style from '../../styles/ContactForm.module.css';

  export const ContactForm = () => {
      return (
          <section id="appointment" className={`${style.appointment} ${styleSection['section-bg']} px-4 mx-4`}>
          <div className="container" data-aos="fade-up">
    
            <div className={styleSection['section-title']}>
              <h2>Contact Us</h2>
              <p>Memory Lane Home Living Inc. is an Alternative Living Residence in Richmond Hill providing Dementia Home Care & Respite Care Services for Women across Aurora, King City, Thornhill, Vaughan, Stouffville, Newmarket, Markham, Barrie, Orangeville, Bradford, and Toronto, Ontario.</p>
            </div>
    
            <form action="forms/appointment.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay="100">
              <div className="row">
                <div className="col-md-4 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" required/>
                </div>
              </div>
    
              <div className="form-group mt-3">
                <textarea className="form-control" name="message"  placeholder="Message (Optional)" rows={5}></textarea>
              </div>
              <div className="my-3">
                {/* <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div> */}
              </div>
              <div className={`text-center`}><button className={`${style['form-btn']} mb-4`} type="submit">Contact Us</button></div>
            </form>
    
          </div>
        </section>
      )
  }
