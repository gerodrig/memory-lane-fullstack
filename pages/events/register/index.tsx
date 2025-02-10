import { MemoryLaneLayout } from '@components/layouts';
import styleSection from '@styles/Section.module.css';

export default function PartnerPage() {
  return (
    <MemoryLaneLayout
      title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
      pageDescription="Memory Lane Home Living Inc. Events page"
    >
      <section id="register" style={{ marginTop: '200px' }}>
        <div className="container" data-aos="fade-up">
          <div className={styleSection['section-title']}>
            <h2>No Events at this time</h2>
          </div>
        </div>
      </section>
    </MemoryLaneLayout>
  );
}
