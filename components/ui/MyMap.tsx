import style from '../../styles/MyMap.module.css';

export const MyMap = () => {
  return (
    <div
      className={`mx-auto d-flex justify-content-center`}
      >
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91990.29521163231!2d-79.49834159232459!3d43.903547560857994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a4936291733%3A0x5201760ad6b142ed!2sRichmond%20Hill%2C%20ON!5e0!3m2!1sen!2sca!4v1672077615409!5m2!1sen!2sca`}
        allowFullScreen
        aria-hidden="false"
        className={style.map}
        tabIndex={0}></iframe>
    </div>
  );
};
