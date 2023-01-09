import { PartnerCard } from './PartnerCard';
import style from './PartnersGrid.module.css';

const images = [
  {
    src: '/assets/images/partners/Canada-Summer-Jobs1.png',
    alt: 'Canada Summer Jobs',
    size: 'square',
  },
  {
    src: '/assets/images/partners/BW-Gaming.png',
    alt: 'BW Gaming',
    size: 'rectangle',
  },
  {
    src: '/assets/images/partners/CMHA.png',
    alt: 'Canadian Mental Health Association',
    size: 'rectangle',
  },
  {
    src: '/assets/images/partners/Ontario-realtors.png',
    alt: 'Ontario Realtors',
    size: 'rectangle',
  },
];


export const PartnersGrid = () => {

  return (
    <div className={style['partner-grid']}>

      {images.map(({alt, src, size}, index) => (
        <PartnerCard key={index} src={src} text={alt} size={size} />
      ))}

    </div>
  );
};
