import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay} from "swiper";
import { Quote } from "react-bootstrap-icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import style from './Testimonials.module.css';
import sectionStyle from '../../styles/Section.module.css';


export const Testimonials = () => {
    return (
    <section id="testimonials" className="mt-5">
      <div className="container" data-aos="fade-up">

        <div className={`${sectionStyle['section-title']}`}>
          <h2>Testimonials</h2>
          <p>Read what clients have said about Our Richmond Hill Assisted Living Residence</p>
        </div>

        {/* <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100"> */}
        <Swiper 
        pagination={{ dynamicBullets: true, type: "bullets", clickable: true }}    
        speed={600} 
        loop={true}
        modules={[Pagination, Autoplay]}
        autoplay={{delay: 5000, disableOnInteraction: false}}   
        className={style.swiper}    
        >
            <SwiperSlide>
            <div className={`${style['testimonial-item']}`}>
                <p>
                  <Quote className={`${style['quote-icon-left']}`}></Quote>
                  My sister and I were struggling to identify a suitable solution for our mother’s rapidly intensifying care needs. Large institutional settings were too process-driven and impersonal. Continuing to shoulder the burden ourselves was simply unsustainable.

                  Memory Lanes innovative model of dementia care offers the balance we were hoping for. The quaint home setting and collaborative approach to tailoring our mothers care to her unique needs, distinguish Memory Lane from other options. We are glad to see how happy our mother is in her new home.
                  <Quote className={`${style['quote-icon-right']}`}></Quote>
                </p>
            
                <h3>Charles</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={`${style['testimonial-item']}`}>
                <p>
                  <Quote className={`${style['quote-icon-left']}`}></Quote>
                    My brother and I put considerable thought into a Day Program service that would both delight and entertain our mother. We wanted to avoid any clinical settings, as well as environments that were overpopulated or had disengaged staff. We are blessed to have found Memory Lane, a more localized and personalized service where we know our mother’s care needs will be met as well as her social needs.

                    I love that when we go to pick her up, she leaves both energized and with a smile on her face. You can tell that she’s been engaged and had fun, that she has made a connection with people and that she’s been stimulated.

                    We are appreciative of the care and attention that has gone into getting to know our mother and personalizing her experience there. Thank you, Memory Lane! 
                  <Quote className={`${style['quote-icon-right']}`}></Quote>
                </p>
            
                <h3>Charles</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={`${style['testimonial-item']}`}>
                <p>
                  <Quote className={`${style['quote-icon-left']}`}></Quote>
                    My sister and I were struggling to identify a suitable solution for our mother’s rapidly intensifying care needs. Large institutional settings were too process-driven and impersonal. Continuing to shoulder the burden ourselves was simply unsustainable.

                    Memory Lanes innovative model of dementia care offers the balance we were hoping for. The quaint home setting and collaborative approach to tailoring our mothers care to her unique needs, distinguish Memory Lane from other options. We are glad to see how happy our mother is in her new home.
                  <Quote className={`${style['quote-icon-right']}`}></Quote>
                </p>
            
                <h3>Alana</h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className={`${style['testimonial-item']}`}>
                <p>
                  <Quote className={`${style['quote-icon-left']}`}></Quote>
                    Your program is lovely, and serves my mother, and myself in ways you can’t imagine.
                  <Quote className={`${style['quote-icon-right']}`}></Quote>
                </p>
            
                <h3>Cassandra</h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className={`${style['testimonial-item']}`}>
                <p>
                  <Quote className={`${style['quote-icon-left']}`}></Quote>
                    We have used this house during a recent renovation to our facility. Women were comfortable and happy in this cozy house, located in a peaceful setting in the heart of Richmond Hill.
                  <Quote className={`${style['quote-icon-right']}`}></Quote>
                </p>
            
                <h3>Ashley</h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className={`${style['testimonial-item']}`}>
                <p>
                  <Quote className={`${style['quote-icon-left']}`}></Quote>
                    This is a great afternoon of connection and good music. I look forward to this weekly event.
                  <Quote className={`${style['quote-icon-right']}`}></Quote>
                </p>
            
                <h3>Laura</h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className={`${style['testimonial-item']}`}>
                <p>
                  <Quote className={`${style['quote-icon-left']}`}></Quote>
                    We enjoy the friendships and the good time we have getting out together to socialize, sing, and exercise. These are a wonderful group of caring people.
                  <Quote className={`${style['quote-icon-right']}`}></Quote>
                </p>
            
                <h3>Betty and Fred</h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className={`${style['testimonial-item']}`}>
                <p>
                  <Quote className={`${style['quote-icon-left']}`}></Quote>
                    I have attended Memory Lane Home Livings Information Session and believe this is one of the most well thought out dementia care models I have seen. They may be the first in York Region to create a Butterfly Care Home, with the training from Dementia Care Matters.” I completely believe in what you’re doing and the approach you’re taking.
                  <Quote className={`${style['quote-icon-right']}`}></Quote>
                </p>
            
                <h3>Anne</h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className={`${style['testimonial-item']}`}>
                <p>
                  <Quote className={`${style['quote-icon-left']}`}></Quote>
                    Insight and knowledge you obtained from this professionally organized conference. MLHL has a clear understanding of the needs in dementia care.
                  <Quote className={`${style['quote-icon-right']}`}></Quote>
                </p>
            
                <h3>Lynn</h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className={`${style['testimonial-item']}`}>
                <p>
                  <Quote className={`${style['quote-icon-left']}`}></Quote>
                      I attended this program with my mom. It was great to find a program for both of us to go to and connect with other. Mom enjoyed the lunch and hymn songs. After mom passed I still continue to attend on my own because of the connections.
                  <Quote className={`${style['quote-icon-right']}`}></Quote>
                </p>
            
                <h3>Wilma</h3>
              </div>
            </SwiperSlide>
        </Swiper>
    
      </div>
    
      
    </section>
    )
}
