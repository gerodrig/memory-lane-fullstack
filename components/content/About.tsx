import Image from "next/image";
import style from './About.module.css';
import styleSection from '../../styles/Section.module.css';
import { CheckCircle } from "react-bootstrap-icons";

export const About = () => {

    const check = <CheckCircle className={styleSection.check}/>

    return (
        <section id="about" className={`${style.about}`}>
        <div className="container" data-aos="fade-up">
  
          <div className={`${styleSection['section-title']}`}>
            <h2>About Us</h2>
            <p>Memory Lane Home Living Inc. is a new and exciting way of living with dementia in Canada and located in York Region. Memory Lane offers a unique home-like environment to women who experiencing memory loss.</p>
          </div>
  
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <Image src="/assets/images/about2.jpg"
                width={516}
                height={248}
                priority={true}
                sizes="(max-width: 516px) 100vw, 516px"
                className={`${style.image} img-fluid my-lg-5`}
               alt="home image" />
            </div>
            <div className={`col-lg-6 pt-4 pt-lg-0 ${style.content}`} data-aos="fade-right">
          
              <h3>Memory Lane Home Living Inc. offers: </h3>
   
              <ul>
                <li><i className="bi bi-check-circle"></i>Holistic approach with day programs, respite care and living with us </li>
                <li>{check} We promote purpose and social connection within a small community setting.</li>
                <li>{check} Abilities-focused dementia care, utilizing Dementia Montessori and Butterfly Model of Care Philosophies in our daily living activities.</li>
                <li>{check} Peace of mind to caregivers.</li>
                <li>{check} A cooperative community with family involvement.</li>
              </ul>

            </div>
          </div>
  
        </div>
      </section>
    )
}
