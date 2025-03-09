import { MemoryLaneLayout } from '@components/layouts';
import styleSection from '@styles/Section.module.css';
import Image from 'next/image';

export default function PartnerPage() {
  return (
    <MemoryLaneLayout
      title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
      pageDescription="Memory Lane Home Living Inc. Events page"
    >
      <section id="register" style={{ marginTop: '200px' }}>
        <div className="container" data-aos="fade-up">
          <div className={styleSection['section-title']}>
            <h2>Heartfelt Thanks to Our Amazing Contributors!</h2>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <Image
                src="/assets/images/events/thankyou-note-soupfest.png"
                alt="Thank you note for Soupfest"
                width={600}
                height={800}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>
    </MemoryLaneLayout>
  );
}
