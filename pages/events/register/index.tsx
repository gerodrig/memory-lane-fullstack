import { MemoryLaneLayout } from '@components/layouts';

import styleSection from '@styles/Section.module.css';
import { EventForm } from '@components/ui';

export default function PartnerPage() {
  return (
    <MemoryLaneLayout
      title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
      pageDescription="Memory Lane Home Living Inc. Partners page"
    >
      <section id="register" style={{ marginTop: '200px' }}>
        <div className="container" data-aos="fade-up">
          <div className={styleSection['section-title']}>
            <h2>No Events at this time</h2>
          </div>
          {/* <h5 className={styleSection.description}>
            Please join us on March 15th to learn about Living Well with
            Dementia. We will have presentations and some workshops from a
            physiotherapist, dietitian, pharmacist, dementia experts from the
            Alzheimer Society of York Region, an eco-therapist, music therapist,
            and more. There is no charge for this event. Seating is limited,
            registration is required. Call 905.237.1419 or go to our website and
            register.
          </h5>
          <div className='d-flex justify-content-center'>
            <EventForm />
          </div> */}
        </div>
      </section>
    </MemoryLaneLayout>
  );
}
