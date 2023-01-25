import { MemoryLaneLayout } from '@components/layouts';

import styleSection from '@styles/Section.module.css';

export default function Mission() {
  return (
    <MemoryLaneLayout
      title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
      pageDescription="Memory Lane Home Living Inc. Mission page.">
      <section id="mission" style={{ marginTop: '200px' }}>
        <div className="container overflow-hidden" data-aos="fade-up">
          {/* //create  a flex row that divides each title in 3 in medium and large screens and 1 in small screens */}
          <div className="row gx-5 gy-sm-5">
            <div className='col-md-3 col-sm-12 shadow-sm p-3 mb-5 bg-body rounded'>
              <div className={styleSection['section-title']}>
                <h4>Mission</h4>
              </div>
              <h5 className={styleSection.description}>
                Our Mission is for families and persons living with dementia
                (PLWD) to live well in community with others.
              </h5>
            </div>
            <div className='col-md-1 .d-sm-none' />
            <div className='col-md-4 col-sm-12 shadow-sm p-3 mb-5 bg-body rounded'>
              <div className={styleSection['section-title']}>
                <h4>Values</h4>
              </div>
              <h5 className={styleSection.description}>
                Our Values include compassion, connection, community, quality of
                life, and quality of care.
              </h5>
            </div>
            <div className='col-md-1 .d-sm-none' />
            <div className='col-md-3 col-sm-12 shadow-sm p-3 mb-5 bg-body rounded'>
              <div className={styleSection['section-title']}>
                <h4>Vision</h4>
              </div>
              <h5 className={styleSection.description}>
                Our Vision is to replicate our social model of care throughout
                York Region and Ontario.
              </h5>
            </div>
          </div>
        </div>
      </section>
    </MemoryLaneLayout>
  );
}
