import { useState } from 'react';
import Image from 'next/image';

import { Modal } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import style from './Gallery.module.css';
import sectionStyle from '../../styles/Section.module.css';

const images = [
  '/assets/images/gallery/gallery-1.jpg',
  '/assets/images/gallery/gallery-2.jpg',
  '/assets/images/gallery/gallery-3.jpg',
  '/assets/images/gallery/gallery-4.jpg',
  '/assets/images/gallery/gallery-5.jpg',
  '/assets/images/gallery/gallery-6.jpg',
  '/assets/images/gallery/gallery-7.jpg',
  '/assets/images/gallery/gallery-8.jpg',
];

export const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState('');

  const handleShowModal = (image: string) => {
    setShowModal(true);
    setImage(image);
  };

  return (
    <section id="gallery" className={`${style.gallery} my-5`}>
      <div className="container" data-aos="fade-up">
        <div className={sectionStyle['section-title']}>
          <h2>Gallery</h2>
          <p className={sectionStyle.description}>
            Memory Lane Home Living Inc. is an Alternative Living Residence in
            Richmond Hill providing Dementia Home Care & Respite Care Services
            for Women across Aurora, King City, Thornhill, Vaughan, Stouffville,
            Newmarket, Markham, Barrie, Orangeville, Bradford, and Toronto,
            Ontario.
          </p>
        </div>

        <Modal
          size="lg"
          show={showModal}
          key={image}
          centered
          onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>

          </Modal.Header>
          <Modal.Body>
            <Image
              src={image}
              height={520}
              width={520}
              className="img-fluid d-block mx-auto"
              alt={image}
            />
          </Modal.Body>
        </Modal>

        <Swiper
          pagination={{
            type: 'bullets',
            clickable: true,
          }}
          speed={400}
          loop={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="swiper">
          {images.map((image) => (
               <SwiperSlide key={image}>
                <Image
                  onClick={() => handleShowModal(image)}
                  src={image}
                  height={120}
                  width={150}
                  alt={image}
                />
              </SwiperSlide>
          ))}
        </Swiper>

        {/* <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/gallery-1.jpg"><img src="assets/img/gallery/gallery-1.jpg" className="img-fluid" alt=""></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/gallery-2.jpg"><img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt=""></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/gallery-3.jpg"><img src="assets/img/gallery/gallery-3.jpg" className="img-fluid" alt=""></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/gallery-4.jpg"><img src="assets/img/gallery/gallery-4.jpg" className="img-fluid" alt=""></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/gallery-5.jpg"><img src="assets/img/gallery/gallery-5.jpg" className="img-fluid" alt=""></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/gallery-6.jpg"><img src="assets/img/gallery/gallery-6.jpg" className="img-fluid" alt=""></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/gallery-7.jpg"><img src="assets/img/gallery/gallery-7.jpg" className="img-fluid" alt=""></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/gallery-8.jpg"><img src="assets/img/gallery/gallery-8.jpg" className="img-fluid" alt=""></a></div>
          </div>
          <div className="swiper-pagination"></div> */}
      </div>
    </section>
  );
};
