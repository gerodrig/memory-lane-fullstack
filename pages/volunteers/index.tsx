import Link from 'next/link';
import { MemoryLaneLayout } from '@components/layouts';

import styleSection from '@styles/Section.module.css';

import { resourcesData } from 'database/dummyData';

export default function Resources() {
  return (
    <MemoryLaneLayout
      title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
      pageDescription="Memory Lane Home Living Inc. Volunteers page.">
      <section id="volunteers" style={{ marginTop: '200px' }}>
        <div
          className={`${styleSection['section-title']} container`}
          data-aos="fade-up">
          <h2>Board of Directors Members & Committee Volunteers Wanted</h2>
          <h5>2022-2023</h5>
          <p className={`${styleSection.description} my-3`}>
          Memory Lane Home Living is looking for help in the form of volunteers to be on committees (i.e., fundraising, program support, music or art therapists ) and/or on the Board of Directors with experience in social media, senior care and recreation therapy, fundraising or  finance. We are looking for people who ideally have a lived experience with dementia or a passion to improve the lives of those living with a dementia and their families.
          </p>
          <p className={styleSection.description}>
          We hope to attract persons who already have experience as volunteers. Most importantly, though, we need people who are ready to help and to work as a member of a team. If you have a few hours a week that you can give to help us please <span><Link
              href="/#appointment"
              className={`scrollto external-link`}
              scroll={false}>
              Contact Us
            </Link></span>
          </p>

        </div>
      </section>
    </MemoryLaneLayout>
  );
}
