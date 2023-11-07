import { MediaCard } from '@components/content/mediaPage/MediaCard';
import { MemoryLaneLayout } from '@components/layouts/MemoryLaneLayout';
import styleSection from '@styles/Section.module.css';
import Link from 'next/link';

const mediaContent = [
  {
    src: '/assets/images/flyers/MLHL-community-connection.png',
    text: `Working Wednesdays Program is a program for women with an MCI diagnosis or mild dementia diagnosis who want to participate in activities with purpose, working with us to prepare crafts for various fundraising initiatives and helping with a variety of social initiatives. Our Working Wednesday Program is the only one of its kind in York Region.`,
  },
];

export default function NewPage() {
  return (
    <MemoryLaneLayout
      title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
      pageDescription="Memory Lane Home Living Inc. Media page."
    >
      <section id="donation" style={{ marginTop: '200px' }}>
        <div className="container" data-aos="fade-up">
          <div className={styleSection['section-title']}>
            <h2>New to Memory Lane Home Living</h2>
          </div>

          {mediaContent.map(({ src, text }, index) => (
            <MediaCard
              key={index}
              image={src}
              text={text}
              index={index}
              size="xl"
            />
          ))}
          <div>
            <p className={styleSection.description}>
              <span className="fw-bold">WHERE:</span> Memory Lane Home Living @
              Yonge and Major Mackenzie Drive West, in Richmond Hill, ON.
            </p>
            <p className={styleSection.description}>
              <span className="fw-bold">COST:</span> $10/Hour for four hours and
              $10 for lunch. Limited spaces.
            </p>
            <p className={styleSection.description}>
              <span className="fw-bold">REGISTRATION REQUIRED:</span> Call us at{' '}
              <Link href="tel:9052371419">905.237.1419</Link> or Email us at{' '}
              <Link href="mailto:mlliving14@gmail.com">
                mlliving14@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </section>
    </MemoryLaneLayout>
  );
}
