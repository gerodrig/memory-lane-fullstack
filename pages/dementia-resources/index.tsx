import Link from 'next/link';
import { MemoryLaneLayout } from '@components/layouts';

import styleSection from '@styles/Section.module.css';

import { resourcesData } from 'database/dummyData';

export default function Resources() {
  return (
    <MemoryLaneLayout
      title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
      pageDescription="Memory Lane Home Living Inc. Resources page.">
      <section id="dementia-resources" style={{ marginTop: '200px' }}>
        <div
          className={`${styleSection['section-title']} container`}
          data-aos="fade-up">
          <h2>Young Onset Dementia Resources</h2>
          <h5 className={styleSection.description}>
            We at Memory Lane have the privilege of working with Young Onset
            dementia and we dedicate 2 days a week to a Community Connections
            program for this population of women. We felt it necessary to
            include these resources:
          </h5>
          {resourcesData.map((resource) => (
            <div key={resource.title} className="text-start my-5">
              <p className={styleSection.description}>
                <span className="fw-bold">{resource.title}</span>{' '}
                {resource.description}
              </p>
              <p>
                <Link
                  href={resource.url}
                  className="external-link"
                  target="_blank">
                  Navigate to external link
                </Link>
              </p>
            </div>
          ))}
        </div>
      </section>
    </MemoryLaneLayout>
  );
}
