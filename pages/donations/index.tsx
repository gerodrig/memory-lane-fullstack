import Image from 'next/image';
import Link from 'next/link';
import { MemoryLaneLayout } from '@components/layouts';

import styleSection from '@styles/Section.module.css';

export default function Donations() {
  return (
    <MemoryLaneLayout
      title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
      pageDescription="Memory Lane Home Living Inc. donations page">
      <section id="donation" style={{ marginTop: '200px' }}>
        <div className="container" data-aos="fade-up">
          <div className={styleSection['section-title']}>
            <h2>MAKE A DONATION</h2>
          </div>
          <p className={styleSection.description}>
            Your donation will make an impact to keep women with a dementia
            diagnosis in the community and support their loved ones. Our
            dementia initiative is designed to to build confidence, friendships
            and invaluable support. Donations will go to the programs, respite
            and our housing costs so that we are affordable to all.
          </p>
          <div className="d-flex flex-column flex-md-row">
            <Image
              src="/assets/images/donations/canada-helps.png"
              alt="Canada-Helps.org image"
              width={300}
              height={300}
              priority={false}
              className="img-fluid my-3 mx-5"
            />
            <Link
              href="https://www.canadahelps.org/en/pages/memory-lane-home-living/"
              target="_blank"
              rel="noopener noreferrer" className='align-self-center mt-5'>
              <h4 className={`${styleSection['donate-btn']}`}>DONATE</h4>
            </Link>
          </div>
          <p className={styleSection.description}>
            Thank you for supporting Memory Lane Home Living Inc. We are a
            registered Charity, and our Registered Name is Memory Lane Home
            Living Inc and our Business Number is 759279490RR0001 CRA REGISTERED
          </p>
          <div className='d-flex justify-content-center flex-column flex-md-row'>
            <Image
              src="/assets/images/donations/e-transfer.png"
              alt="Interac transfer image"
              width={150}
              height={150}
              priority={false}
              className="img-fluid my-3 mx-5 align-self-center"
            />
          <h4 className="text-center my-3 align-self-center">
            Donations are also accepted via Interac e-Transfers at:
            Mlliving14@gmail.com
          </h4>
          </div>
        </div>
      </section>
    </MemoryLaneLayout>
  );
}
