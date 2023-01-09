import { MemoryLaneLayout } from '@components/layouts';

import styleSection from '@styles/Section.module.css';
import { PartnersGrid } from '@components/content/partnersPage/PartnersGrid';

export default function PartnerPage() {
  return (
    <MemoryLaneLayout
      title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
      pageDescription="Memory Lane Home Living Inc. Partners page">
      <section id="donation" style={{ marginTop: '200px' }}>
        <div className="container" data-aos="fade-up">
          <div className={styleSection['section-title']}>
            <h2>Partners</h2>
          </div>
          <h5 className={styleSection.description}>
            Your donation will make an impact to keep women with a dementia
            diagnosis in the community and support their loved ones. Our
            dementia initiative is designed to to build confidence, friendships
            and invaluable support. Donations will go to the programs, respite
            and our housing costs so that we are affordable to all.
          </h5>
          <PartnersGrid />
        </div>
      </section>
    </MemoryLaneLayout>
  );
}
