import Image from 'next/image';
import Link from 'next/link';
import { MemoryLaneLayout } from '@components/layouts/MemoryLaneLayout';
import { FlyerImage, YoutubeVideo } from '@components/ui';
import styleSection from '@styles/Section.module.css';

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
      pageDescription="Memory Lane Home Living Inc. What is new page."
    >
      <section id="donation" style={{ marginTop: '200px' }}>
        <div className="container" data-aos="fade-up">
          <div className={styleSection['section-title']}>
            <h2>New to Memory Lane Home Living</h2>
          </div>
          <div className="column">
            <h1 className={`text-center mb-5 ${styleSection['check']}`}>
              Events
            </h1>
            <div className="d-flex justify-content-center">
              <Link href={'/events/register'}>
                <Image
                  src="/assets/images/events/Living-well-with-dementia-march-2024.jpg"
                  alt="event"
                  width={600}
                  height={800}
                />
              </Link>
            </div>
            <h1 className={`text-center mb-5 ${styleSection['check']}`}>
              Testimonials
            </h1>
            <div className="pe-5 me-5">
              <YoutubeVideo
                videoId={'CfHWIwW9xjI'}
                title="Community Connection Program Testimonial"
                embed
              />
              <YoutubeVideo
                videoId={'ehAzXh-czyM'}
                title="Living With Us Testimonial"
                embed
              />
              <YoutubeVideo
                videoId={'pPcFHp9rOUM'}
                title="Walter Testimonial"
                embed
              />
              <YoutubeVideo
                videoId={'amYH6XXiN1Y'}
                title="Music From The Heart Program Testimonial"
                embed
              />
            </div>
          </div>
        </div>
      </section>
    </MemoryLaneLayout>
  );
}
