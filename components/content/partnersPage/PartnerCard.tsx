import Image from 'next/image';
import style from './PartnersGrid.module.css';

interface PartnerCardProps {
  src: string;
  text?: string;
  size?: string;
}

export const PartnerCard = ({src, text = "", size = 'rectangle' }: PartnerCardProps) => {

    const width = size === 'rectangle' ? 300 : 200;
    const height = size === 'rectangle' ? 150 : 200;

    return (
        <div className={style['partner-card']}>
        <Image src={src} alt={text} width={width} height={height} />
      </div>
    )
}
