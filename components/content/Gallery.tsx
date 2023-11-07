import { useState } from 'react';
import Image from 'next/image';

import { Modal } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { SeparatorIdentifier } from '@components/ui/SeparatorIdentifier';

import style from './Gallery.module.css';
import sectionStyle from '@styles/Section.module.css';

import { imagesGallery, imagesEvent, dayProgramGallery } from '@data/images';
import { IGallery } from 'interfaces';

export const Gallery = ({ id = '' }) => {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [images, setImages] = useState<IGallery[]>();

  const handleShowModal = (index: number, array: IGallery[]) => {
    const image = array[index].image;
    const title = array[index]?.title || '';
    const arrayFiltered = array.filter((item) => item.image !== image);

    setShowModal(true);
    setImage(image);
    setTitle(title);
    setImages(arrayFiltered);
  };

  return (
    <>
      <SeparatorIdentifier id={id} />
      <section id="gallery" className={`${style.gallery} my-5`}>
        <div className="container" data-aos="fade-up">
          <div className={sectionStyle['section-title']}>
            <h2>Gallery</h2>
            <p className={sectionStyle.description}>
              Memory Lane Home Living Inc. is an Alternative Living Residence in
              Richmond Hill providing Dementia Home Care & Respite Care Services
              for Women across Aurora, King City, Thornhill, Vaughan,
              Stouffville, Newmarket, Markham, Barrie, Orangeville, Bradford,
              and Toronto, Ontario.
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
              <Swiper
                pagination={{
                  type: 'progressbar',
                }}
                navigation={true}
                        
                modules={[Pagination, Navigation]}
                className={style.mySwiper}>
                <SwiperSlide >
                  <Image
                    src={image}
                    height={520}
                    width={520}
                    className="img-fluid d-block mx-auto my-auto mt-4"
                    alt={image}
                  />
                  <Modal.Title className="text-center">{title}</Modal.Title>
                </SwiperSlide>
                {images?.map(({ image, title = '' }, index) => (
                  <SwiperSlide key={image}>
                    <Image
                      src={image}
                      height={520}
                      width={520}
                      alt={image}
                      className="img-fluid d-block mx-auto my-auto mt-5"
                    />
                    <Modal.Title className="text-center">{title}</Modal.Title>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Modal.Body>
          </Modal>

          <h4 className={style.title}>Home Living</h4>
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
            {imagesGallery.map(({ image, title = '' }, index, array) => (
              <SwiperSlide key={image}>
                <Image
                  onClick={() => handleShowModal(index, array)}
                  src={image}
                  height={120}
                  width={150}
                  alt={title}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <h4 className={style.title}>Day Program Gallery</h4>
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
            {dayProgramGallery.map(({ title = '', image }, index, array) => (
              <SwiperSlide key={image}>
                <Image
                  onClick={() => handleShowModal(index, array)}
                  src={image}
                  height={120}
                  width={150}
                  alt={title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <h4 className={style.title}>Events Gallery</h4>
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
            {imagesEvent.map(({ title = '', image }, index, array) => (
              <SwiperSlide key={image}>
                <Image
                  onClick={() => handleShowModal(index, array)}
                  src={image}
                  height={120}
                  width={150}
                  alt={title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};
