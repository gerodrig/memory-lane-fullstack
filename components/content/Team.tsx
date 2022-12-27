import Image from "next/image";
import style from "./Team.module.css";
import sectionStyle from "../../styles/Section.module.css";

export const Team = () => {
    return (
    <section id="team" className={`${style['board-members']} ${sectionStyle['section-bg']} my-5`}>
      <div className="container" data-aos="fade-up">

        <div className={`${sectionStyle['section-title']}`}>
          <h2>Our Team</h2>
          <p className={sectionStyle.description}>We are grateful for the guidance and support from friends, family, knowledgeable individuals in this field, and especially the Alzheimer Society of York Region, Seneca Social Service Worker Gerontology Program (King Campus). Memory Lane Home Living was designed to address the issues that many of us encounter on the dementia journey.</p>
        </div>

        <div className="row d-flex justify-content-center">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch mb-4" data-bs-toggle="modal" data-bs-target="#monaModal">
            <div className={style.member} data-aos="fade-up" data-aos-delay="100">
              <div className={style['member-img']}>
                <Image src="/assets/images/board-members/mona.jpg" width={218} height={280} className="img-fluid" alt=""/>
              </div>

              <div className={style['member-info'] }>
                <h4>Mona Lancaster</h4>
                <span>President</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-bs-toggle="modal" data-bs-target="#minaModal">
            <div className={style.member} data-aos="fade-up" data-aos-delay="200">
              <div className={style['member-img']}>
                <Image src="/assets/images/board-members/mina.jpg" width={218} height={280} className="img-fluid" alt=""/>
              </div>
              <div className={style['member-info'] }>
                <h4>Mina Shirvani</h4>
                <span>Board Member</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-bs-toggle="modal" data-bs-target="#chloeModal">
            <div className={style.member} data-aos="fade-up" data-aos-delay="300">
              <div className={style['member-img']}>
                <Image src="/assets/images/board-members/chloe.jpg" width={218} height={280} className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className={style['member-info'] }>
                <h4>Chloe Tam</h4>
                <span>Board Member</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-bs-toggle="modal" data-bs-target="#jenniferModal">
            <div className={style.member} data-aos="fade-up" data-aos-delay="400">
              <div className={style['member-img']}>
                <Image src="/assets/images/board-members/jennifer.jpg" width={218} height={280} className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className={style['member-info'] }>
                <h4>Jennifer Tran</h4>
                <span>Board Member</span>
              </div>
            </div>
        </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-bs-toggle="modal" data-bs-target="#yipinModal">
            <div className={style.member} data-aos="fade-up" data-aos-delay="400">
              <div className={style['member-img']}>
                <Image src="/assets/images/board-members/yipin.jpg" width={218} height={281} style={{objectFit: 'contain'}} className="img-fluid" alt=""/>
              </div>
              <div className={style['member-info'] }>
                <h4>Yipin Guo</h4>
                <span>Board Member</span>
              </div>
            </div>
        </div>
        </div>
        </div>
      
    </section>
    )
}
